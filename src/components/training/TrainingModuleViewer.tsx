import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrainingModule, TrainingSection } from "@/data/trainingContent";
import { BookOpen, CheckCircle, ArrowLeft, ArrowRight, Trophy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TrainingModuleViewerProps {
  module: TrainingModule;
  onComplete: () => void;
  onBack: () => void;
}

const TrainingModuleViewer = ({ module, onComplete, onBack }: TrainingModuleViewerProps) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const { toast } = useToast();

  const sections = module.content.sections;
  const quiz = module.content.quiz;
  const progress = showQuiz 
    ? 80 + (20 * (currentQuestion + 1) / quiz.length)
    : (currentSection + 1) / sections.length * 80;

  const handleNextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      setShowQuiz(true);
    }
  };

  const handlePrevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (!answeredQuestions.includes(currentQuestion)) {
      setAnsweredQuestions([...answeredQuestions, currentQuestion]);
      if (answerIndex === quiz[currentQuestion].correctAnswer) {
        setQuizScore(quizScore + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      completeModule();
    }
  };

  const completeModule = () => {
    const percentage = (quizScore / quiz.length) * 100;
    const passed = percentage >= 70;
    
    toast({
      title: passed ? "Module Completed!" : "Module Review Needed",
      description: passed 
        ? `Congratulations! You scored ${percentage.toFixed(0)}% and earned ${module.points} points.`
        : `You scored ${percentage.toFixed(0)}%. You need 70% to pass. Please review and try again.`,
      variant: passed ? "default" : "destructive",
    });

    if (passed) {
      onComplete();
    } else {
      // Reset quiz for retry
      setCurrentQuestion(0);
      setQuizScore(0);
      setAnsweredQuestions([]);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('•')) {
        return (
          <li key={index} className="ml-4">
            {line.substring(1).trim()}
          </li>
        );
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      if (line.match(/^[A-Z\s]+:$/)) {
        return (
          <h4 key={index} className="font-bold text-freight-navy mt-4 mb-2">
            {line}
          </h4>
        );
      }
      return <p key={index} className="mb-2">{line}</p>;
    });
  };

  if (showQuiz) {
    const question = quiz[currentQuestion];
    const isCorrect = selectedAnswer === question.correctAnswer;
    
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-freight-orange" />
                Knowledge Check
              </CardTitle>
              <Badge variant="secondary">
                Question {currentQuestion + 1} of {quiz.length}
              </Badge>
            </div>
            <Progress value={progress} className="mt-2" />
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">{question.question}</h3>
              <div className="space-y-2 max-w-md mx-auto">
                {question.options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    variant={
                      showExplanation
                        ? index === question.correctAnswer
                          ? "default"
                          : selectedAnswer === index
                          ? "destructive"
                          : "outline"
                        : "outline"
                    }
                    className={
                      showExplanation && index === question.correctAnswer
                        ? "bg-freight-success text-white"
                        : ""
                    }
                    size="lg"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>

            {showExplanation && (
              <Card className={`border-2 ${isCorrect ? 'border-freight-success' : 'border-freight-danger'}`}>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className={`h-5 w-5 ${isCorrect ? 'text-freight-success' : 'text-freight-danger'}`} />
                    <span className="font-semibold">
                      {isCorrect ? 'Correct!' : 'Incorrect'}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{question.explanation}</p>
                  
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-sm text-muted-foreground">
                      Score: {quizScore}/{answeredQuestions.length}
                    </div>
                    <Button onClick={handleNextQuestion}>
                      {currentQuestion < quiz.length - 1 ? 'Next Question' : 'Complete Module'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  const section = sections[currentSection];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-freight-orange" />
              {module.title}
            </CardTitle>
            <Button onClick={onBack} variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Modules
            </Button>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Section {currentSection + 1} of {sections.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-freight-navy mb-4">{section.title}</h2>
            <div className="prose max-w-none">
              {formatContent(section.content)}
            </div>
          </div>

          {section.examples && section.examples.length > 0 && (
            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-lg text-blue-900 dark:text-blue-100">
                  Examples:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.examples.map((example, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span className="text-blue-800 dark:text-blue-200">{example}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {section.tips && section.tips.length > 0 && (
            <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
              <CardHeader>
                <CardTitle className="text-lg text-amber-900 dark:text-amber-100">
                  💡 Pro Tips:
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                      <span className="text-amber-800 dark:text-amber-200">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          <div className="flex justify-between">
            <Button
              onClick={handlePrevSection}
              disabled={currentSection === 0}
              variant="outline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <Button onClick={handleNextSection}>
              {currentSection === sections.length - 1 ? 'Take Quiz' : 'Next Section'}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrainingModuleViewer;
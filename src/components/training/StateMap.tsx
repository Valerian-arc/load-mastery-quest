import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { states, State } from "@/data/states";
import { MapPin, Truck, AlertTriangle } from "lucide-react";

const StateMap = () => {
  const [selectedState, setSelectedState] = useState<State | null>(null);
  const [quizMode, setQuizMode] = useState(false);
  const [currentQuizState, setCurrentQuizState] = useState<State | null>(null);
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const startQuiz = () => {
    setQuizMode(true);
    setScore(0);
    setAttempted(0);
    nextQuizQuestion();
  };

  const nextQuizQuestion = () => {
    const randomState = states[Math.floor(Math.random() * states.length)];
    setCurrentQuizState(randomState);
    setShowAnswer(false);
  };

  const checkAnswer = (answer: string) => {
    setAttempted(attempted + 1);
    setShowAnswer(true);
    if (answer === currentQuizState?.abbreviation) {
      setScore(score + 1);
    }
  };

  const endQuiz = () => {
    setQuizMode(false);
    setCurrentQuizState(null);
    setShowAnswer(false);
  };

  if (quizMode) {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>State Abbreviation Quiz</span>
              <div className="flex gap-2">
                <Badge variant="secondary">Score: {score}/{attempted}</Badge>
                <Button onClick={endQuiz} variant="outline" size="sm">
                  End Quiz
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {currentQuizState && (
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">
                  What is the abbreviation for {currentQuizState.name}?
                </h3>
                <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
                  {[
                    currentQuizState.abbreviation,
                    ...states
                      .filter(s => s.abbreviation !== currentQuizState.abbreviation)
                      .sort(() => 0.5 - Math.random())
                      .slice(0, 3)
                      .map(s => s.abbreviation)
                  ]
                    .sort(() => 0.5 - Math.random())
                    .map((abbr) => (
                      <Button
                        key={abbr}
                        onClick={() => checkAnswer(abbr)}
                        disabled={showAnswer}
                        variant={
                          showAnswer
                            ? abbr === currentQuizState.abbreviation
                              ? "default"
                              : "outline"
                            : "outline"
                        }
                        className={
                          showAnswer && abbr === currentQuizState.abbreviation
                            ? "bg-freight-success text-white"
                            : ""
                        }
                      >
                        {abbr}
                      </Button>
                    ))}
                </div>
                {showAnswer && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-lg">
                        Correct! {currentQuizState.name} = {currentQuizState.abbreviation}
                      </p>
                      <p className="text-muted-foreground">
                        Capital: {currentQuizState.capital}
                      </p>
                    </div>
                    <Button onClick={nextQuizQuestion} className="w-full">
                      Next Question
                    </Button>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-freight-orange" />
              US States Learning Center
            </span>
            <Button onClick={startQuiz} className="bg-freight-orange text-white">
              Start Quiz
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* States List */}
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Select a State to Learn:</h3>
              <div className="max-h-96 overflow-y-auto space-y-1">
                {states.map((state) => (
                  <Button
                    key={state.abbreviation}
                    variant={selectedState?.abbreviation === state.abbreviation ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedState(state)}
                  >
                    <span className="font-mono font-bold mr-2">{state.abbreviation}</span>
                    {state.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* State Details */}
            <div className="space-y-4">
              {selectedState ? (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-2xl font-mono">{selectedState.abbreviation}</span>
                      {selectedState.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-freight-navy">Capital:</h4>
                      <p>{selectedState.capital}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-freight-navy">Major Cities:</h4>
                      <p>{selectedState.majorCities.join(", ")}</p>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-freight-navy flex items-center gap-2">
                        <Truck className="h-4 w-4" />
                        Trucking Information:
                      </h4>
                      <div className="space-y-2 mt-2">
                        <div>
                          <span className="font-medium">Weight Limits:</span>
                          <p className="text-sm text-muted-foreground">
                            {selectedState.truckingInfo.weightLimits}
                          </p>
                        </div>
                        <div>
                          <span className="font-medium">Required Permits:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {selectedState.truckingInfo.permits.map((permit) => (
                              <Badge key={permit} variant="secondary" className="text-xs">
                                {permit}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {selectedState.truckingInfo.restrictions && (
                          <div>
                            <span className="font-medium flex items-center gap-1">
                              <AlertTriangle className="h-3 w-3 text-freight-warning" />
                              Restrictions:
                            </span>
                            <p className="text-sm text-muted-foreground">
                              {selectedState.truckingInfo.restrictions}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="h-64 flex items-center justify-center">
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Select a state from the list to see detailed information
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StateMap;
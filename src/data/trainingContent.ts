export interface TrainingModule {
  id: number;
  title: string;
  description: string;
  duration: string;
  points: number;
  status: 'locked' | 'available' | 'in-progress' | 'completed';
  content: TrainingContent;
}

export interface TrainingContent {
  sections: TrainingSection[];
  quiz: QuizQuestion[];
}

export interface TrainingSection {
  title: string;
  content: string;
  examples?: string[];
  tips?: string[];
  images?: string[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const trainingModules: TrainingModule[] = [
  {
    id: 1,
    title: "DOT Regulations Fundamentals",
    description: "Learn essential Department of Transportation regulations",
    duration: "45 min",
    points: 250,
    status: "available",
    content: {
      sections: [
        {
          title: "Hours of Service (HOS) Rules",
          content: `The Federal Motor Carrier Safety Administration (FMCSA) Hours of Service rules are designed to ensure drivers get adequate rest and prevent fatigue-related accidents.

KEY RULES:
• 11-Hour Driving Limit: Drive maximum of 11 hours after 10 consecutive hours off duty
• 14-Hour Duty Limit: Cannot drive beyond 14 hours after coming on duty
• 30-Minute Break: Required after 8 consecutive hours of driving
• 60/70-Hour Limit: Cannot drive after 60 hours on duty in 7 days or 70 hours in 8 days
• 34-Hour Restart: Reset your 60/70 hour clock with 34 consecutive hours off duty`,
          examples: [
            "Driver starts at 6 AM, can drive until 8 PM (14-hour limit) but only 11 total driving hours",
            "After 8 hours of driving, driver must take 30-minute break before continuing",
            "Weekly limit reached? Take 34-hour restart to reset the clock"
          ],
          tips: [
            "Always log pre-trip and post-trip inspections",
            "Sleeper berth time can extend your 14-hour window under specific conditions",
            "Keep your logbook updated and accurate - violations carry heavy penalties"
          ]
        },
        {
          title: "Weight and Size Regulations",
          content: `Federal and state regulations govern the maximum weight and dimensions for commercial vehicles.

FEDERAL LIMITS:
• Gross Vehicle Weight: 80,000 lbs maximum
• Single Axle: 20,000 lbs maximum  
• Tandem Axle: 34,000 lbs maximum
• Overall Length: 65 feet truck + trailer combination
• Width: 8.5 feet (102 inches)
• Height: Varies by state (typically 13'6" to 14')

BRIDGE FORMULA:
The bridge formula determines legal weight based on axle spacing to protect bridges and roads.`,
          examples: [
            "Standard 53' dry van with tractor: ~65' total length",
            "Overweight load requires permits and specific routing",
            "Each state may have different height restrictions"
          ],
          tips: [
            "Always check state-specific regulations",
            "Scale your load to ensure compliance",
            "Permits required for oversize/overweight loads"
          ]
        },
        {
          title: "Driver Qualification Requirements",
          content: `Commercial drivers must meet specific qualifications and maintain proper documentation.

REQUIREMENTS:
• Valid Commercial Driver's License (CDL) with proper endorsements
• Medical Certificate (DOT Physical) - valid for up to 2 years
• Clean driving record and background check
• Age requirements: 18+ for intrastate, 21+ for interstate
• English proficiency for safety communications

ENDORSEMENTS:
• H - Hazardous Materials
• N - Tank Vehicles  
• P - Passenger Vehicles
• S - School Bus
• T - Double/Triple Trailers
• X - Combination HazMat and Tank`,
          tips: [
            "Renew medical certificate before expiration",
            "Report any traffic violations to your employer",
            "Keep all documentation current and accessible"
          ]
        }
      ],
      quiz: [
        {
          question: "What is the maximum driving time allowed in a 14-hour period?",
          options: ["11 hours", "14 hours", "10 hours", "12 hours"],
          correctAnswer: 0,
          explanation: "Drivers can drive a maximum of 11 hours within a 14-hour duty period."
        },
        {
          question: "What is the maximum gross vehicle weight for most commercial vehicles?",
          options: ["70,000 lbs", "80,000 lbs", "90,000 lbs", "85,000 lbs"],
          correctAnswer: 1,
          explanation: "The federal limit for gross vehicle weight is 80,000 lbs without special permits."
        },
        {
          question: "How long must a driver rest to reset their 60/70 hour clock?",
          options: ["24 hours", "30 hours", "34 hours", "36 hours"],
          correctAnswer: 2,
          explanation: "A 34-hour restart period resets the 60/70 hour duty cycle."
        }
      ]
    }
  },
  {
    id: 2,
    title: "Load Planning & Weight Distribution",
    description: "Master the art of efficient load planning and proper weight distribution",
    duration: "60 min",
    points: 300,
    status: "available",
    content: {
      sections: [
        {
          title: "Weight Distribution Principles",
          content: `Proper weight distribution is critical for safety, legal compliance, and vehicle performance.

BASIC PRINCIPLES:
• Center of Gravity: Keep load's center of gravity as low and centered as possible
• Axle Weight Distribution: Balance weight across all axles within legal limits
• Load Securement: Ensure cargo cannot shift during transport
• Front-to-Back Balance: Proper weight distribution affects steering and braking

WEIGHT CALCULATIONS:
• Tare Weight: Empty vehicle weight
• Gross Weight: Vehicle + cargo weight
• Net Weight: Cargo weight only
• Payload: Maximum cargo capacity`,
          examples: [
            "Heavy items should be loaded over the axles, not between them",
            "Dense cargo should be loaded low and centered",
            "Distribute weight evenly across the trailer floor"
          ],
          tips: [
            "Always weigh your loaded vehicle before departure",
            "Adjust load position if axle weights are unbalanced",
            "Consider fuel weight in your calculations"
          ]
        },
        {
          title: "Load Securement Standards",
          content: `Federal regulations require specific methods to secure different types of cargo.

GENERAL REQUIREMENTS:
• Working Load Limit (WLL): Minimum securement strength required
• Tie-down ratio: Aggregate WLL ≥ 50% of cargo weight
• Minimum tie-downs: Based on cargo length and weight
• Edge protection: Required when tie-downs could be damaged

SECUREMENT DEVICES:
• Chain: High strength, good for heavy loads
• Straps: Versatile, good for most general freight
• Wire rope: Flexible, good for oddly shaped loads
• Blocking and bracing: Prevents cargo movement

INSPECTION POINTS:
• Before departure
• Within 50 miles of origin
• Every 150 miles or 3 hours thereafter
• After any driving break of 30 minutes or more`,
          examples: [
            "20,000 lb load requires minimum 10,000 lbs WLL in tie-downs",
            "Lumber stack requires specific tie-down patterns",
            "Steel coils require special blocking and securement"
          ]
        },
        {
          title: "Special Cargo Considerations",
          content: `Different types of cargo require specific handling and securement methods.

HAZARDOUS MATERIALS:
• Proper classification and documentation
• Compatible cargo segregation
• Emergency response information
• Placarding requirements
• Driver endorsement requirements

OVERSIZED LOADS:
• Permit requirements
• Escort vehicle needs
• Route restrictions
• Time-of-day limitations
• Special securement requirements

TEMPERATURE-CONTROLLED CARGO:
• Pre-cool/heat trailer before loading
• Monitor temperature throughout transport
• Understand different temperature requirements
• Fuel management for reefer units`,
          tips: [
            "Never mix incompatible hazardous materials",
            "Check permit conditions before moving oversized loads",
            "Keep temperature logs for reefer loads"
          ]
        }
      ],
      quiz: [
        {
          question: "What percentage of cargo weight must tie-down equipment support?",
          options: ["25%", "50%", "75%", "100%"],
          correctAnswer: 1,
          explanation: "Tie-down equipment must have an aggregate working load limit of at least 50% of the cargo weight."
        },
        {
          question: "How often must you inspect cargo securement after the first 50 miles?",
          options: ["Every 50 miles", "Every 100 miles", "Every 150 miles", "Every 200 miles"],
          correctAnswer: 2,
          explanation: "Cargo securement must be inspected every 150 miles or 3 hours, whichever comes first."
        },
        {
          question: "Where should heavy cargo be positioned for optimal weight distribution?",
          options: ["Over the axles", "Behind the axles", "In front of the axles", "Between the axles"],
          correctAnswer: 0,
          explanation: "Heavy cargo should be positioned over the axles for proper weight distribution and vehicle stability."
        }
      ]
    }
  },
  {
    id: 3,
    title: "BOL/POD Documentation & Procedures",
    description: "Learn proper handling of Bills of Lading and Proof of Delivery documents",
    duration: "40 min",
    points: 200,
    status: "available",
    content: {
      sections: [
        {
          title: "Bill of Lading (BOL) Fundamentals",
          content: `The Bill of Lading is a critical legal document that serves multiple purposes in freight transportation.

PURPOSE OF BOL:
• Receipt of goods by carrier
• Contract for transportation
• Document of title to goods
• Legal evidence of freight shipment

REQUIRED INFORMATION:
• Shipper and consignee information
• Complete pickup and delivery addresses
• Detailed description of goods
• Weight, pieces, and dimensions
• Special instructions or requirements
• Freight class and rate information
• Signatures and dates

TYPES OF BOL:
• Straight BOL: Non-negotiable, goods delivered to named consignee only
• Order BOL: Negotiable, can be transferred to third parties
• Electronic BOL: Digital version with same legal standing`,
          examples: [
            "Shipper: ABC Manufacturing, 123 Main St, Chicago, IL",
            "Consignee: XYZ Retail, 456 Oak Ave, Dallas, TX",
            "Commodity: Machine parts, 10 pallets, 15,000 lbs"
          ],
          tips: [
            "Verify all information before signing",
            "Note any damage or discrepancies",
            "Keep copies for your records"
          ]
        },
        {
          title: "Pickup Procedures",
          content: `Proper pickup procedures ensure accurate documentation and protect against claims.

PRE-PICKUP STEPS:
• Review dispatch information and route
• Verify equipment is suitable for load
• Check for special requirements or appointments
• Prepare necessary paperwork and equipment

AT PICKUP LOCATION:
• Check in with shipper/receiving personnel
• Verify load details match dispatch information
• Inspect cargo for damage or count discrepancies
• Complete pre-loading inspection of trailer
• Supervise loading if responsible

DOCUMENTATION REVIEW:
• Verify commodity description matches actual goods
• Check piece count and weight
• Note any special handling instructions
• Record any exceptions or damage
• Obtain required signatures and seals`,
          examples: [
            "Count mismatch: BOL shows 50 boxes, only 48 loaded - note on BOL",
            "Damaged pallet: Mark 'damaged pallet noted' on BOL before signing",
            "Late arrival: Note actual pickup time if different from appointment"
          ],
          tips: [
            "Never sign a BOL without reviewing the freight",
            "Take photos of any damage or discrepancies",
            "Get contact information for shipper representative"
          ]
        },
        {
          title: "Delivery and POD Procedures",
          content: `Proof of Delivery (POD) documentation protects against claims and confirms successful delivery.

DELIVERY PREPARATION:
• Contact consignee to confirm delivery appointment
• Verify delivery address and special requirements
• Prepare POD paperwork and inspection equipment
• Check seal integrity if applicable

DELIVERY PROCESS:
• Check in with receiving personnel
• Break seal in presence of consignee if required
• Supervise unloading and count verification
• Inspect for damage with consignee present
• Complete delivery documentation

POD REQUIREMENTS:
• Consignee signature and printed name
• Date and time of delivery
• Notation of any damage or shortages
• Condition of freight upon delivery
• Any special circumstances or exceptions`,
          examples: [
            "Clear delivery: 'Freight delivered in good condition, no exceptions'",
            "Damage noted: 'One pallet shows forklift damage, consignee accepts'",
            "Short delivery: 'Delivered 48 of 50 pieces, 2 pieces short at origin'"
          ],
          tips: [
            "Get signature from authorized personnel only",
            "Document any delivery issues thoroughly",
            "Keep POD copies organized for billing"
          ]
        }
      ],
      quiz: [
        {
          question: "What should you do if you notice damage to freight during pickup?",
          options: ["Ignore it and proceed", "Note it on the BOL", "Refuse the shipment", "Call your dispatcher first"],
          correctAnswer: 1,
          explanation: "Any damage or discrepancies should be noted on the BOL before signing to protect against claims."
        },
        {
          question: "Who can sign the Proof of Delivery?",
          options: ["Anyone at the location", "Only the consignee", "Authorized personnel only", "The security guard"],
          correctAnswer: 2,
          explanation: "Only authorized personnel should sign the POD to ensure proper delivery documentation."
        },
        {
          question: "What is the primary purpose of a Bill of Lading?",
          options: ["Invoice for payment", "Receipt and contract", "Insurance document", "Route planning"],
          correctAnswer: 1,
          explanation: "The BOL serves as both a receipt for goods and a contract for transportation."
        }
      ]
    }
  },
  {
    id: 4,
    title: "Dispatch Communication & Operations",
    description: "Master effective communication and daily dispatch operations",
    duration: "50 min",
    points: 275,
    status: "available",
    content: {
      sections: [
        {
          title: "Effective Dispatch Communication",
          content: `Clear, professional communication is essential for successful dispatch operations.

COMMUNICATION PRINCIPLES:
• Be clear, concise, and professional
• Use proper radio etiquette and terminology
• Confirm important information by repeating it back
• Document all important communications
• Respond promptly to messages and calls

KEY INFORMATION TO COMMUNICATE:
• ETA (Estimated Time of Arrival) updates
• Traffic delays or route changes
• Equipment problems or breakdowns
• Customer service issues
• Load status and delivery confirmations

EMERGENCY COMMUNICATIONS:
• Accidents or incidents
• Hazardous material spills
• Vehicle breakdowns
• Security concerns
• Weather-related issues`,
          examples: [
            "ETA update: 'Dispatch, Unit 123, running 30 minutes late due to traffic, new ETA 1430'",
            "Breakdown: 'Dispatch, Unit 456, breakdown on I-75 mile marker 234, need service'",
            "Delivery confirmation: 'Dispatch, Unit 789, delivered Houston load, POD signed, available for next assignment'"
          ],
          tips: [
            "Keep messages brief but complete",
            "Use 24-hour time format for clarity",
            "Always confirm receipt of important instructions"
          ]
        },
        {
          title: "Route Planning and Optimization",
          content: `Efficient route planning maximizes productivity and minimizes costs.

ROUTE PLANNING FACTORS:
• Distance and driving time
• Fuel costs and efficiency
• Toll roads and bridge costs
• Traffic patterns and construction
• Hours of Service compliance
• Customer delivery windows

PLANNING TOOLS:
• GPS navigation systems
• Route optimization software
• Traffic monitoring apps
• Weather forecasting services
• Construction and road condition reports

OPTIMIZATION STRATEGIES:
• Combine multiple pickups/deliveries
• Avoid peak traffic times when possible
• Consider fuel stop locations
• Plan for required rest breaks
• Account for loading/unloading time`,
          examples: [
            "Multi-stop route: Pick up in Atlanta, deliver in Nashville and Louisville",
            "Fuel strategy: Plan stops at company fuel locations or best price points",
            "HOS planning: Schedule delivery to allow for required 10-hour break"
          ],
          tips: [
            "Always have backup routes planned",
            "Check for construction delays before departure",
            "Consider return load opportunities"
          ]
        },
        {
          title: "Customer Service Excellence",
          content: `Outstanding customer service builds relationships and drives business success.

SERVICE STANDARDS:
• Professional appearance and demeanor
• Punctual pickups and deliveries
• Proactive communication about delays
• Careful handling of customer property
• Problem-solving attitude

CUSTOMER INTERACTION GUIDELINES:
• Introduce yourself and your company
• Verify delivery details and requirements
• Be flexible when possible
• Handle complaints professionally
• Follow up on service issues

BUILDING RELATIONSHIPS:
• Remember regular customer preferences
• Anticipate customer needs
• Exceed expectations when possible
• Maintain consistent service quality
• Ask for feedback and act on it`,
          examples: [
            "Proactive communication: Call ahead if running late",
            "Problem solving: Offer alternatives when delivery windows are tight",
            "Relationship building: Remember customer dock preferences"
          ],
          tips: [
            "Always follow customer-specific procedures",
            "Document special requests for future reference",
            "Turn complaints into opportunities to improve"
          ]
        }
      ],
      quiz: [
        {
          question: "When should you contact dispatch about a delay?",
          options: ["Only if over 1 hour late", "As soon as you know about it", "Only if customer complains", "At the end of the day"],
          correctAnswer: 1,
          explanation: "Proactive communication about delays allows dispatch to notify customers and adjust schedules."
        },
        {
          question: "What should be included in route planning?",
          options: ["Only distance and time", "Distance, time, and fuel costs", "All factors affecting efficiency and compliance", "Just the fastest route"],
          correctAnswer: 2,
          explanation: "Comprehensive route planning considers all factors including HOS compliance, costs, and customer requirements."
        },
        {
          question: "How should you handle a customer complaint?",
          options: ["Refer them to dispatch", "Listen and try to resolve", "Defend company policies", "Ignore and continue working"],
          correctAnswer: 1,
          explanation: "Listen to customer concerns and attempt to resolve issues professionally while keeping dispatch informed."
        }
      ]
    }
  },
  {
    id: 5,
    title: "Trailer Management & Equipment",
    description: "Learn proper trailer handling, switching, and equipment management",
    duration: "45 min",
    points: 225,
    status: "available",
    content: {
      sections: [
        {
          title: "Trailer Types and Specifications",
          content: `Understanding different trailer types and their specifications is crucial for proper load matching.

COMMON TRAILER TYPES:
• Dry Van: 53' x 8.5' x 13.5', most common for general freight
• Refrigerated (Reefer): Temperature-controlled for perishables
• Flatbed: Open deck for oversized or oddly shaped cargo
• Step Deck (Drop Deck): Lower deck height for taller cargo
• Double Drop (Lowboy): Extra low for very tall cargo
• Tank: Liquid transport, various compartment configurations
• Auto Hauler: Specialized for vehicle transport

TRAILER SPECIFICATIONS:
• Length: 28', 40', 45', 48', 53' most common
• Width: 8.5' standard, 8.6' or 9' for specialized
• Height: 13.5' standard, varies by type
• Door specifications and loading methods
• Weight capacity and axle configurations`,
          examples: [
            "53' dry van: Standard for retail freight, 110' door openings",
            "48' reefer: Temperature range -20°F to +70°F",
            "48' flatbed: Stake pockets every 2', multiple tie-down points"
          ],
          tips: [
            "Match trailer type to commodity requirements",
            "Check trailer capacity against load weight",
            "Verify special equipment needs (tarps, straps, etc.)"
          ]
        },
        {
          title: "Trailer Switching Procedures",
          content: `Safe and efficient trailer switching is a critical dispatch skill.

PRE-SWITCHING INSPECTION:
• Check air lines and electrical connections
• Inspect fifth wheel and kingpin
• Verify trailer brakes are working
• Check landing gear operation
• Inspect tires and wheels

DROPPING A TRAILER:
1. Position trailer in designated spot
2. Chock wheels if required
3. Disconnect air lines (service first, then emergency)
4. Disconnect electrical
5. Pull fifth wheel release handle
6. Slowly back away while cranking landing gear
7. Complete separation and inspect connections

HOOKING TO A TRAILER:
1. Inspect trailer and area around it
2. Position tractor in line with trailer
3. Back slowly until fifth wheel contacts kingpin
4. Lock fifth wheel (listen for click, check visually)
5. Connect air lines (emergency first, then service)
6. Connect electrical cable
7. Raise landing gear
8. Perform brake test`,
          examples: [
            "Drop and hook operation: Drop empty trailer, hook to loaded trailer",
            "Relay operation: Switch trailers with another driver mid-route",
            "Live unload: Wait while customer unloads, keep same trailer"
          ],
          tips: [
            "Always inspect the fifth wheel coupling visually",
            "Test brakes before leaving the yard",
            "Never rush the hooking process"
          ]
        },
        {
          title: "Equipment Maintenance and Inspections",
          content: `Regular maintenance and inspections prevent breakdowns and ensure safety.

DAILY INSPECTIONS:
• Pre-trip inspection before departure
• En-route checks during stops
• Post-trip inspection at destination
• Document all defects found
• Report safety-critical issues immediately

TRAILER MAINTENANCE ITEMS:
• Tire condition and air pressure
• Brake system operation
• Lights and electrical systems
• Landing gear and fifth wheel
• Door operation and seals
• Floor condition and cleanliness

PREVENTIVE MAINTENANCE:
• Follow manufacturer service schedules
• Track mileage and service intervals
• Monitor tire wear patterns
• Keep maintenance records current
• Report recurring problems`,
          examples: [
            "Pre-trip finding: Trailer tire low on air - check and inflate",
            "En-route check: Marker light out - note for repair",
            "Post-trip: Trailer door damaged during unloading - report immediately"
          ],
          tips: [
            "Never operate with safety-critical defects",
            "Keep spare bulbs and fuses available",
            "Report maintenance needs promptly"
          ]
        }
      ],
      quiz: [
        {
          question: "What should you connect first when hooking to a trailer?",
          options: ["Service air line", "Emergency air line", "Electrical cable", "Landing gear"],
          correctAnswer: 1,
          explanation: "The emergency air line should be connected first to ensure trailer brakes will set if other connections fail."
        },
        {
          question: "When should you perform a pre-trip inspection?",
          options: ["Once a week", "Before every trip", "Only for long trips", "When required by DOT"],
          correctAnswer: 1,
          explanation: "A pre-trip inspection is required before every trip to ensure vehicle safety."
        },
        {
          question: "What is the standard width for most trailers?",
          options: ["8 feet", "8.5 feet", "9 feet", "10 feet"],
          correctAnswer: 1,
          explanation: "Standard trailer width is 8.5 feet (102 inches) in the United States."
        }
      ]
    }
  }
];
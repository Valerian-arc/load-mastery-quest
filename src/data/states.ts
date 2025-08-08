export interface State {
  name: string;
  abbreviation: string;
  capital: string;
  coordinates: [number, number]; // [longitude, latitude]
  majorCities: string[];
  truckingInfo: {
    weightLimits: string;
    permits: string[];
    restrictions: string;
  };
}

export const states: State[] = [
  {
    name: "Alabama",
    abbreviation: "AL",
    capital: "Montgomery",
    coordinates: [-86.902298, 32.318230],
    majorCities: ["Birmingham", "Mobile", "Huntsville"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "No Sunday restrictions"
    }
  },
  {
    name: "Alaska",
    abbreviation: "AK", 
    capital: "Juneau",
    coordinates: [-152.404419, 64.0685],
    majorCities: ["Anchorage", "Fairbanks", "Juneau"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight", "Winter travel"],
      restrictions: "Extreme weather conditions"
    }
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
    capital: "Phoenix", 
    coordinates: [-111.664047, 33.448143],
    majorCities: ["Phoenix", "Tucson", "Mesa"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Summer heat restrictions"
    }
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
    capital: "Little Rock",
    coordinates: [-92.331122, 34.736009],
    majorCities: ["Little Rock", "Fort Smith", "Fayetteville"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Bridge restrictions on certain routes"
    }
  },
  {
    name: "California",
    abbreviation: "CA",
    capital: "Sacramento",
    coordinates: [-119.766121, 36.116203],
    majorCities: ["Los Angeles", "San Francisco", "San Diego", "Sacramento"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight", "CARB compliance"],
      restrictions: "Strict emissions standards, chain requirements"
    }
  },
  {
    name: "Colorado",
    abbreviation: "CO",
    capital: "Denver",
    coordinates: [-105.358887, 39.113014],
    majorCities: ["Denver", "Colorado Springs", "Aurora"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Mountain pass restrictions, chain laws"
    }
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
    capital: "Hartford",
    coordinates: [-72.757507, 41.767],
    majorCities: ["Hartford", "New Haven", "Stamford"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Parkway restrictions"
    }
  },
  {
    name: "Delaware",
    abbreviation: "DE",
    capital: "Dover",
    coordinates: [-75.526755, 39.161921],
    majorCities: ["Wilmington", "Dover", "Newark"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Limited truck routes"
    }
  },
  {
    name: "Florida",
    abbreviation: "FL",
    capital: "Tallahassee",
    coordinates: [-82.451668, 27.767279],
    majorCities: ["Miami", "Tampa", "Orlando", "Jacksonville"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Hurricane season considerations"
    }
  },
  {
    name: "Georgia",
    abbreviation: "GA",
    capital: "Atlanta",
    coordinates: [-83.441162, 32.157435],
    majorCities: ["Atlanta", "Augusta", "Columbus", "Savannah"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Atlanta bypass recommended"
    }
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
    capital: "Honolulu",
    coordinates: [-155.665857, 19.741755],
    majorCities: ["Honolulu", "Hilo", "Kailua"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Inter-island transport"],
      restrictions: "Island-specific regulations"
    }
  },
  {
    name: "Idaho",
    abbreviation: "ID",
    capital: "Boise",
    coordinates: [-114.478828, 43.613739],
    majorCities: ["Boise", "Idaho Falls", "Pocatello"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross, 105,500 lbs on designated routes",
      permits: ["Oversize", "Overweight"],
      restrictions: "Mountain pass restrictions"
    }
  },
  {
    name: "Illinois",
    abbreviation: "IL",
    capital: "Springfield",
    coordinates: [-89.650373, 39.78325],
    majorCities: ["Chicago", "Aurora", "Rockford", "Joliet"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Chicago area congestion"
    }
  },
  {
    name: "Indiana",
    abbreviation: "IN",
    capital: "Indianapolis",
    coordinates: [-86.147685, 39.790942],
    majorCities: ["Indianapolis", "Fort Wayne", "Evansville"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Indianapolis 465 loop restrictions"
    }
  },
  {
    name: "Iowa",
    abbreviation: "IA",
    capital: "Des Moines",
    coordinates: [-93.620866, 41.590939],
    majorCities: ["Des Moines", "Cedar Rapids", "Davenport"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Seasonal weight restrictions"
    }
  },
  {
    name: "Kansas",
    abbreviation: "KS",
    capital: "Topeka",
    coordinates: [-98.380867, 38.572954],
    majorCities: ["Wichita", "Overland Park", "Kansas City"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Wind restrictions on high profile loads"
    }
  },
  {
    name: "Kentucky",
    abbreviation: "KY",
    capital: "Frankfort",
    coordinates: [-84.86311, 37.839333],
    majorCities: ["Louisville", "Lexington", "Bowling Green"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Bridge restrictions on certain routes"
    }
  },
  {
    name: "Louisiana",
    abbreviation: "LA",
    capital: "Baton Rouge",
    coordinates: [-91.992629, 30.45809],
    majorCities: ["New Orleans", "Baton Rouge", "Shreveport"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Hurricane season, bridge restrictions"
    }
  },
  {
    name: "Maine",
    abbreviation: "ME",
    capital: "Augusta",
    coordinates: [-69.765261, 44.323535],
    majorCities: ["Portland", "Lewiston", "Bangor"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross, 100,000 lbs on some routes",
      permits: ["Oversize", "Overweight"],
      restrictions: "Seasonal weight restrictions"
    }
  },
  {
    name: "Maryland",
    abbreviation: "MD",
    capital: "Annapolis",
    coordinates: [-76.501157, 38.972945],
    majorCities: ["Baltimore", "Frederick", "Rockville"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "DC area congestion, tunnel restrictions"
    }
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
    capital: "Boston",
    coordinates: [-71.0275, 42.2352],
    majorCities: ["Boston", "Worcester", "Springfield"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Big Dig tunnels, low bridges"
    }
  },
  {
    name: "Michigan",
    abbreviation: "MI",
    capital: "Lansing",
    coordinates: [-84.5467, 44.3467],
    majorCities: ["Detroit", "Grand Rapids", "Warren"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross, 164,000 lbs on some routes",
      permits: ["Oversize", "Overweight"],
      restrictions: "Seasonal weight restrictions, bridge restrictions"
    }
  },
  {
    name: "Minnesota",
    abbreviation: "MN",
    capital: "Saint Paul",
    coordinates: [-94.6859, 46.3296],
    majorCities: ["Minneapolis", "Saint Paul", "Rochester"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Seasonal weight restrictions, winter conditions"
    }
  },
  {
    name: "Mississippi",
    abbreviation: "MS",
    capital: "Jackson",
    coordinates: [-89.678696, 32.354668],
    majorCities: ["Jackson", "Gulfport", "Hattiesburg"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Hurricane season considerations"
    }
  },
  {
    name: "Missouri",
    abbreviation: "MO",
    capital: "Jefferson City",
    coordinates: [-91.831833, 38.572954],
    majorCities: ["Kansas City", "St. Louis", "Springfield"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "St. Louis and Kansas City area congestion"
    }
  },
  {
    name: "Montana",
    abbreviation: "MT",
    capital: "Helena",
    coordinates: [-110.454353, 46.82717],
    majorCities: ["Billings", "Missoula", "Great Falls"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Mountain pass restrictions, wind restrictions"
    }
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
    capital: "Lincoln",
    coordinates: [-99.901813, 41.492537],
    majorCities: ["Omaha", "Lincoln", "Bellevue"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Wind restrictions on high profile loads"
    }
  },
  {
    name: "Nevada",
    abbreviation: "NV",
    capital: "Carson City",
    coordinates: [-116.419389, 38.501621],
    majorCities: ["Las Vegas", "Henderson", "Reno"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Desert conditions, mountain passes"
    }
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
    capital: "Concord",
    coordinates: [-71.549896, 43.220093],
    majorCities: ["Manchester", "Nashua", "Concord"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Mountain pass restrictions"
    }
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
    capital: "Trenton",
    coordinates: [-74.756138, 40.221741],
    majorCities: ["Newark", "Jersey City", "Paterson"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Parkway restrictions, tunnel restrictions"
    }
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
    capital: "Santa Fe",
    coordinates: [-106.018066, 34.307144],
    majorCities: ["Albuquerque", "Las Cruces", "Rio Rancho"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Mountain pass restrictions, wind restrictions"
    }
  },
  {
    name: "New York",
    abbreviation: "NY",
    capital: "Albany",
    coordinates: [-74.948051, 42.31327],
    majorCities: ["New York City", "Buffalo", "Rochester", "Syracuse"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Parkway restrictions, NYC restrictions, bridge/tunnel restrictions"
    }
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
    capital: "Raleigh",
    coordinates: [-79.3877, 35.5007],
    majorCities: ["Charlotte", "Raleigh", "Greensboro"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Mountain restrictions, hurricane season"
    }
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
    capital: "Bismarck",
    coordinates: [-101.002012, 47.543768],
    majorCities: ["Fargo", "Bismarck", "Grand Forks"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross, higher on some routes",
      permits: ["Oversize", "Overweight"],
      restrictions: "Seasonal weight restrictions, winter conditions"
    }
  },
  {
    name: "Ohio",
    abbreviation: "OH",
    capital: "Columbus",
    coordinates: [-82.764915, 40.269789],
    majorCities: ["Columbus", "Cleveland", "Cincinnati"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Bridge restrictions on certain routes"
    }
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
    capital: "Oklahoma City",
    coordinates: [-97.534994, 35.482309],
    majorCities: ["Oklahoma City", "Tulsa", "Norman"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Wind restrictions, tornado season considerations"
    }
  },
  {
    name: "Oregon",
    abbreviation: "OR",
    capital: "Salem",
    coordinates: [-120.767775, 43.804133],
    majorCities: ["Portland", "Eugene", "Salem"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross, 105,500 lbs on some routes",
      permits: ["Oversize", "Overweight"],
      restrictions: "Mountain pass restrictions, chain requirements"
    }
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
    capital: "Harrisburg",
    coordinates: [-77.209755, 40.269789],
    majorCities: ["Philadelphia", "Pittsburgh", "Allentown"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Mountain restrictions, tunnel restrictions"
    }
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
    capital: "Providence",
    coordinates: [-71.422132, 41.82355],
    majorCities: ["Providence", "Warwick", "Cranston"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Limited truck routes, bridge restrictions"
    }
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
    capital: "Columbia",
    coordinates: [-81.035, 33.836081],
    majorCities: ["Charleston", "Columbia", "North Charleston"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Hurricane season considerations"
    }
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
    capital: "Pierre",
    coordinates: [-99.901813, 44.367966],
    majorCities: ["Sioux Falls", "Rapid City", "Aberdeen"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Seasonal weight restrictions, wind restrictions"
    }
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
    capital: "Nashville",
    coordinates: [-86.580447, 35.860119],
    majorCities: ["Nashville", "Memphis", "Knoxville"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Mountain restrictions in east Tennessee"
    }
  },
  {
    name: "Texas",
    abbreviation: "TX",
    capital: "Austin",
    coordinates: [-99.681773, 31.106],
    majorCities: ["Houston", "San Antonio", "Dallas", "Austin"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross, 125,000 lbs on designated routes",
      permits: ["Oversize", "Overweight"],
      restrictions: "Heat restrictions, hurricane season on coast"
    }
  },
  {
    name: "Utah",
    abbreviation: "UT",
    capital: "Salt Lake City",
    coordinates: [-111.892622, 39.419220],
    majorCities: ["Salt Lake City", "West Valley City", "Provo"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross, 129,000 lbs on some routes",
      permits: ["Oversize", "Overweight"],
      restrictions: "Mountain pass restrictions, chain requirements"
    }
  },
  {
    name: "Vermont",
    abbreviation: "VT",
    capital: "Montpelier",
    coordinates: [-72.578873, 44.26639],
    majorCities: ["Burlington", "Essex", "South Burlington"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Seasonal weight restrictions, mountain restrictions"
    }
  },
  {
    name: "Virginia",
    abbreviation: "VA",
    capital: "Richmond",
    coordinates: [-78.169968, 37.54],
    majorCities: ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "DC area congestion, tunnel restrictions"
    }
  },
  {
    name: "Washington",
    abbreviation: "WA",
    capital: "Olympia",
    coordinates: [-120.740139, 47.042418],
    majorCities: ["Seattle", "Spokane", "Tacoma"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross, 105,500 lbs on some routes",
      permits: ["Oversize", "Overweight"],
      restrictions: "Mountain pass restrictions, chain requirements"
    }
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
    capital: "Charleston",
    coordinates: [-80.518693, 38.349497],
    majorCities: ["Charleston", "Huntington", "Parkersburg"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Mountain restrictions, bridge restrictions"
    }
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
    capital: "Madison",
    coordinates: [-89.675186, 44.269594],
    majorCities: ["Milwaukee", "Madison", "Green Bay"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Seasonal weight restrictions, winter conditions"
    }
  },
  {
    name: "Wyoming",
    abbreviation: "WY",
    capital: "Cheyenne",
    coordinates: [-107.30249, 41.145548],
    majorCities: ["Cheyenne", "Casper", "Laramie"],
    truckingInfo: {
      weightLimits: "80,000 lbs gross",
      permits: ["Oversize", "Overweight"],
      restrictions: "Wind restrictions, mountain pass restrictions"
    }
  }
];
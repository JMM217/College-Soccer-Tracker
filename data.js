// DATA LAYER: Stores college soccer program dataset and data fetching logic

const COLLEGE_SOCCER_DATA = [
  {
    id: "d1-m-001",
    name: "Clemson University",
    city: "Clemson",
    state: "SC",
    lat: 34.6783,
    lng: -82.8392,
    division: "NCAA D1",
    gender: "Men",
    conference: "ACC",
    stadium: "Historic Riggs Field",
    surface: "Grass",
    capacity: 6500,
    broadcast: "ACC Network / ESPN+"
  },
  {
    id: "d1-w-001",
    name: "University of North Carolina",
    city: "Chapel Hill",
    state: "NC",
    lat: 35.9049,
    lng: -79.0469,
    division: "NCAA D1",
    gender: "Women",
    conference: "ACC",
    stadium: "Dorrance Field",
    surface: "Grass",
    capacity: 4200,
    broadcast: "ACC Network / ESPN+"
  },
  {
    id: "d1-m-002",
    name: "Indiana University",
    city: "Bloomington",
    state: "IN",
    lat: 39.1688,
    lng: -86.5186,
    division: "NCAA D1",
    gender: "Men",
    conference: "Big Ten",
    stadium: "Jerry Yeagley Field",
    surface: "Grass",
    capacity: 6500,
    broadcast: "B1G+"
  },
  {
    id: "d1-w-002",
    name: "Stanford University",
    city: "Stanford",
    state: "CA",
    lat: 37.4275,
    lng: -122.1697,
    division: "NCAA D1",
    gender: "Women",
    conference: "ACC",
    stadium: "Cagan Stadium",
    surface: "Grass",
    capacity: 2000,
    broadcast: "ACC Network / ESPN+"
  }
];

// Helper function to fetch all programs
function getSoccerPrograms() {
  return COLLEGE_SOCCER_DATA;
}

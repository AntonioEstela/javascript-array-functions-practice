const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP***
//1. Get array of all names
const allNames = characters.map((item) => item.name);

//2. Get array of all heights
const allHeights = characters.map((item) => item.height);

//3. Get array of objects with just name and height properties
const nameNheight = characters.map((item) => ({
  name: item.name,
  height: item.height,
}));

//4. Get array of all first names
const allFirstNames = characters.map((item) => item.name.split(" ")[0]);


//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, curr) => acc + curr.mass, 0);

//2. Get total height of all characters
const totalHeight = characters.reduce((acc, curr) => acc + curr.height, 0);

//3. Get total number of characters by eye color
const totalEyeColor = characters.reduce((acc, curr) => {
  acc[curr.eye_color] ? (acc[curr.eye_color] += 1) : (acc[curr.eye_color] = 1);
  return acc;
}, {});

//4. Get total number of characters in all the character names
const numberOfChars = characters.reduce((acc, curr) => acc += curr.name.length, 0);


//***FILTER***
//1. Get characters with mass greater than 100
const massGreather = characters.filter((item) => item.mass > 100);

//2. Get characters with height less than 200
const heightLessThan = characters.filter((item) => item.height < 200);

//3. Get all male characters
const allMale = characters.filter((item) => item.gender === "male");

//4. Get all female characters
const allFemale = characters.filter((item) => item.gender === "female");


//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?

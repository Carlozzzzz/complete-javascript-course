/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/



const game = {
	team1: 'Bayern Munich',
	team2: 'Borrussia Dortmund',
	players: [
		[
			'Neuer',
			'Pavard',
			'Martinez',
			'Alaba',
			'Davies',
			'Kimmich',
			'Goretzka',
			'Coman',
			'Muller',
			'Gnarby',
			'Lewandowski',
		],
		[
			'Burki',
			'Schulz',
			'Hummels',
			'Akanji',
			'Hakimi',
			'Weigl',
			'Witsel',
			'Hazard',
			'Brandt',
			'Sancho',
			'Gotze',
		],
	],
	score: '4:0',
	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
	date: 'Nov 9th, 2037',
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

// 1.) done
/**
  create an object that will contain the game scored properties
  loop through the object using entries function
  display the game properties along with the index of the players
*/

const gameScorers = game.scored;

for( const [index, value] of gameScorers.entries() ) {
  console.log(`Goal ${index + 1} : ${value}`);
}


// 2.) 
/**
  create a loop that will loop through the odds
  calculate the average odd by adding all the odds together and dividing by the number of odds
  display the results
*/

let averageOdd = 0
const gameOddsValues = Object.values(game.odds);

for(value of gameOddsValues) {
  averageOdd += value;
}

console.log(`Game Odds average:  ${averageOdd / gameOddsValues.length}`);


// 3.
/**
  capture the teams and save them to a object called 'teams'
  maximize the computable properties to fetch the game scores objects
  while 'draw' variable is not defined in game object, fetch the 'x' object and assign it to 'draw' variable
  use the teams object to capture the teams data on game odds object
  now create a new object called gameScores and all the capture variables
  iterate over the the gameScores and format it according to the challenge structure

*/

// const teams = {
//   team1: game.team1,
//   team2: game.team2,
// }

// const gameScores = {};

// const teamKey = Object.entries(teams);


// for(const [team, name] of teamKey) {
//   gameScores[team] = {
//     name: name,
//     odd: game.odds[team]
//   }
// }

// const {x: draw} = game.odds;

// gameScores.draw = {
//   odd: draw,
// }

// console.log(gameScores)

// // looping through gameScores
// for (const [key, { name, odd }] of Object.entries(gameScores)) {
//   const hasName = name ? `victory ${name}` : key;

//   console.log(`Odd of ${hasName}: ${odd}`);
// }

const gameScores = Object.entries(game.odds);
const teams = Object.entries(game);

for (const [key, value] of gameScores) {
  const team = game[key] ? `victory ${game[key]}` : 'draw';
  console.log(`Odds of ${team}: ${value}`);
}



// BONUS:

// capture the scored object and it to array
// loop through the scored object and add it to the scorers
//    make the values of the scored object as properties of the scorers

// if theres duplucated properties, then increment the value of score
const playerArr = [...game.scored]
let scorers = {};

playerArr.forEach(player => { 
  let score;
  // check if the property is existing
  scorers.hasOwnProperty(player) ? scorers[player]++ : scorers[player] = 1;
  
});

scorers = Object.keys(scorers)
  .sort()
  .reduce((sortedObj, key) => {
    sortedObj[key] = scorers[key];
    return sortedObj;
  }, {});

console.log(scorers)


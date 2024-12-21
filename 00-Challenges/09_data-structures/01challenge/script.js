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

// initialize players
const players1 = {}, players2 = {};

// Assigning Goalkeeper and fieldPlayers for each team
[players1.gk, ...players1.fieldPlayers] = game.players[0];
[players2.gk, ...players2.fieldPlayers] = game.players[1];

// Create All player List
const allPlayer = [players1.gk, ...players1.fieldPlayers, players2.gk, ...players2.fieldPlayers];

// create new team and add new members
const playersFinal = [...allPlayer, ...['Thiago', 'Coutinho', 'Perisic']];

// creating Game Odds object
const {team1, x:draw, team2} = game.odds


// function that display the names of scorers
function printGoals(...scorer) {

	function totalScore(scorer,scoredPlayers){
		// create variable matchedScores 
		// check for each element if match, add 1 in matchedScore if theres matched element
		// loop through it until the end
		
		// Variables
		let matchedScores = 0;
		for (let x = 0; x < scoredPlayers.length; x++) {
			for(let j = 0; j < scorer.length; j++) {
				if(scorer[j] === scoredPlayers[x]){
					matchedScores++;
				}
			}
		}
		
		return matchedScores;
	}
	
	console.log('Scorer: ', ...scorer)
	console.log('Total Score: ', totalScore(scorer, game.scored))
	
}
printGoals(...['Davies', 'Muller','Lewandowski','Kimmich'])


// checking the winning team
function winningTeam() {
	const isTeam1Win = team1 < team2;
	
	let winningTeam = (team1 < team2) && team1;
	winningTeam = winningTeam || team2
	
	console.log('winningTeam: ', winningTeam)
}
console.log({team1, draw, team2})

winningTeam();


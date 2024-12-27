/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card 64'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);

console.log('Challenge 3.............')
// 1. 
/**
    use sets to remove duplicates
    create and set variable and destructure the gameEvents on it
*/
console.log('----Answer to #1----')
const [...events] = new Set([...gameEvents.values()]);
console.log(events)


// 2. 
/**
    delete the element with key of 64 in map
*/
console.log('----Answer to #2----')
gameEvents.delete(64)
console.log(gameEvents)


// 3.
/**
    // loop through each map keys
    // check whether the key is <= 9, then print 'An event happened, on average, every 9 minutes', maximum count for the loop is 90
*/
console.log('----Answer to #3----')
let eventCount = 0;
for (let x = 0; x <= 90; x++) {
    
    // capture the if an events exists, add 1 on eventCount
    gameEvents.has(x) && eventCount++ ; 
    
    if(x%9==0 && x !== 0) {
       console.log(`An event happened, on average ${eventCount}, every 9 minutes`)
       eventCount = 0;
       // count here if ilang event nangyari
       // from 0 - 9 mins, 10 - 18min and soo on.
       // example is 2 event nangri between 0 -9 mins. print sa console and ung count kung ilang event ang nangyari.
       // ex: .
       // max is 90 mins.
    }
}

// correct approach
console.log(`Correct: An event happend, or average, every ${90 / gameEvents.size}`)

// 4
/** 
    Loop through the gameEvent and print each of it on the console
    identify if the key is less than 45mins
        if true, add [FIRST HALF] before the value on every log
        else, add [SECOND HALF] before the value on every log
*/
console.log('----Answer to #4----')

for(const [key, value] of gameEvents) {
    let gamehalf;
    (key <= 45) ? gamehalf = '[FIRST HALF]' : gamehalf = '[SECOND HALF]';
    console.log(`${gamehalf} ${key} : ${value}`)
}
// Tutorials approach
console.log('other approach----= see the code')
for(const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'HALF';
    console.log(`[${half} HALF] ${min} : ${event}`)
}
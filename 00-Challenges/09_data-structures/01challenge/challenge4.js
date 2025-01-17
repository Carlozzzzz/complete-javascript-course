// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// My Version
// document.querySelector('button').addEventListener('click', () => {
//     const text = document.querySelector('textarea').value;
//     const textArr = text.split('\n');
//     const emojiCheck = '✅';
    
//     for (let str of textArr) {
//         if(!str) continue; // skips empty arrays
//         arrCount++;
        
//         str = str.trim().toLowerCase();
//         const strArr = str.split('_');
        
//         if(strArr.length > 2) continue; // skip if the string is more than 2 words
        
//         let arrCount = 0;
        
//         const toUpper = [];
//         const lastString = strArr[1].split(' ');
        
//         for(const n of lastString) {
//             toUpper.push(n.replace(n[0], n[0].toUpperCase()));
//         }
        
//         let output = [strArr[0], toUpper].join('').padEnd(20, ' ') + emojiCheck.repeat(arrCount);
//         // output = output.padEnd(20, '+');
        
//         console.log(output)
//     }
// });


// Lectures answer
// document.querySelector('button').addEventListener('click', () => {
//     const text = document.querySelector('textarea').value;
//     const rows = text.split('\n');

//     for (const [i, row] of rows.entries()) {
//         const [first, second] = row.toLowerCase().trim().split('_');
        
//         const output = `${first}${second.replace(
//             second[0],
//             second[0].toUpperCase()
//         )}`;
        
//         console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//     }
// });
// CHALLENGE #2

/**
 * CHALLENGE #2
    Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

    Your tasks:

    Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

    And now let's use arrays! So, create an array called bills containing the test data below.

    Create an array called tips containing the tip value for each bill, calculated from the function you created before.

    BONUS: Create an array totals containing the total values, so the bill + tip.

    TEST DATA: 125, 555, and 44.
 */


const calcTip = function (bill) {
    const tip = (bill >= 50 && bill <= 300) ? (.15 * bill) : (.2 * bill);
    return tip;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(`Bills: ${bills}`);
console.log(`Tips: ${tips}`);
console.log(`Totals: ${totals}`);
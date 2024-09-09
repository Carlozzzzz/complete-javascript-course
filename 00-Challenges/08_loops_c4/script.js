const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

const calcTip = function (bill) {
    const tip = (bill >= 50 && bill <= 300) ? (.15 * bill) : (.2 * bill);
    return tip;
}

for (let i = 0; i < bills.length; i++) {
    // tips[i] = calcTip(bills[i]);
    // totals[i] = tips[i] + bills[i];

    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}

console.log(tips, totals)

const calcAverage = function (arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

console.log(calcAverage(totals));
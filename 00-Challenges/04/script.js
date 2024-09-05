const tip = 41.25;
const bill = 275;
const tipCalc = (tip >= 50 && tip <= 300) ? (.2 * bill) : (.15 * bill);
const totalBill = tipCalc + bill;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalBill}`);
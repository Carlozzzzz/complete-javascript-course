const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // c) fix
    // value: Number(prompt('Dgrees celsius: ')),
    value: 10,
  };

  // B) find the bug
  console.table(measurement);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// a) Identify
console.log(measureKelvin());

const temperatures = [3, 5, 1, 'error', 9, 13, 17, 15, 14, 9, 5];

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug(temperatures, [2, 6, 3, 19]);
console.log(amplitudeBug);

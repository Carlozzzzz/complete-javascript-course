const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];



const reverseLoop = function (arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        // console.log(arr[i])
    }

}

const sortBills = function (arr) {
    let x = 0;


    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                x = arr[i];
                arr[i] = arr[j];
                arr[j] = x;
            }
        }
    }

    console.log(arr)
}

console.log('Sorting bills: ');
sortBills(bills);
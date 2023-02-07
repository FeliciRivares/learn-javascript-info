// На вході масив чисел, наприклад arr = [1, -2, 3, 4, -9, 6].

// Завдання: знайти неперервний підмасив arr з максимальною сумою елементів.
// Написати функцію getMaxSubSum(arr) яка повертає таку суму.

// Наприклад:
//     getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
//     getMaxSubSum([2, -1, 2, 3, -9]) == 6
//     getMaxSubSum([-1, 2, 3, -9, 11]) == 11
//     getMaxSubSum([-2, -1, 1, 2]) == 3
//     getMaxSubSum([100, -9, 2, -3, 5]) == 100
//     getMaxSubSum([1, 2, 3]) == 6 (take all)
// Якщо всі елементи менші нуля, нічого не беремо, це означає, що підмасив пустий, а сума рівна нулю:
//     getMaxSubSum([-1, -2, -3]) = 0
// Будь ласка, подумайте над швидким рішенням: O(n2) або навіть над рішенням O(n), якщо зможете.

// просте рішення 

function getMaxSubSum(arr) {
    let maxSum = 0; 

    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;

        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }

    return maxSum;
}

console.log( getMaxSubSum([-1, 2, 3, -9]) );

// складне рішення

function getMaxSubSumHard(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) {
        partialSum += item; 
        maxSum = Math.max(maxSum, partialSum); 
        if (partialSum < 0) partialSum = 0; 
    }
  
    return maxSum;
}

console.log( getMaxSubSumHard([100, -9, 2, -3, 5]) );
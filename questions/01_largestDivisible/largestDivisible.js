/*
largestDivisible returns the largest number from a list of numbers where that number is divisible by a passed in number
write the largestDivisible function

*/

function largestDivisible(arr, num) {
    let largest = null;

    // first let's do this declaratively

    for (let i = 0; i < arr.length; i++) {
        let potential = arr[i];
        
        if (potential % num === 0 && largest === null) {
            largest = potential;
        }
        else if (potential % num === 0 && potential > largest) {
            largest = potential
        }
    }

    return largest;
}

// console.log(largestDivisible([1, 2, 3, 4, 5, 6, 7], 3));//6
// console.log(largestDivisible([1], 2));//null

module.exports = { largestDivisible };

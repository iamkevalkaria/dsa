// Kadane's Algorithm - Get Largest Sum Contiguous Subarray

// Approach -1 | Time complexity: O(n^3), Space complexity:
// const getLargestSumSubArray = (arr) => {
//   // CASE 1 : All negative vals, store min value
//   let maxSum = getMinValueInArray(arr);

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       let sum = 0;
//       for (let m = i; m <= j; m++) {
//         sum = sum + arr[m];
//       }
//       if (sum > maxSum) maxSum = sum;
//     }
//   }
//   return maxSum;
// };

// Approach -2 | Time complexity: O(n^2), Space complexity:
// const getLargestSumSubArray = (arr) => {
//   // CASE 1 : All negative vals, store min value
//   let maxSum = getMinValueInArray(arr);

//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       console.log(arr[j]);
//       sum = sum + arr[j];
//       console.log('SUM=>', sum);
//       if (sum > maxSum) maxSum = sum;
//     }
//   }
//   return maxSum;
// };

// Approach -3 Kadane's algorithm | Time complexity: O(n), Space complexity:
const getLargestSumSubArray = (arr) => {
  let currentSum = 0;
  let bestSum = getMinValueInArray(arr); // Handle the case of all negative nos
  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(currentSum + arr[i], arr[i]);
    bestSum = Math.max(currentSum, bestSum);
    console.log('CS: ' + currentSum, 'BS: ' + bestSum);
  }
  return bestSum;
};

// Get min value
const getMinValueInArray = (arr) => {
  let minVal = arr[0]; // Initialization
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minVal) minVal = arr[i];
  }
  return minVal;
};

// Input:
const arr = [1, 2, 3, 4];
// Output:
console.log(getLargestSumSubArray(arr));

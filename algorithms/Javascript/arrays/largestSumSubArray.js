const arr = [1, 2, 3, 4];

let maxSum = 0; // Store min value
for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    let sum = 0;
    for (let m = i; m <= j; m++) {
      // console.log('arr[m]: ' + arr[m]);
      // console.log("=> "+arr[m])
      sum = sum + arr[m];
    }
    if (sum > maxSum) maxSum = sum;
  }
}

console.log(maxSum);

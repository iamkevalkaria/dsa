// const arr = [41, 25, 98, 5, 12];
const arr = [2, 3, 4, 5, 6, 7];

function bubbleSort() {
  for (let i = arr.length; i > 0; i--) {
    let matchedFlag = 0;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        matchedFlag = 1;
      }
    } // innerLoop ends
    // If array is already sorted
    if (matchedFlag === 0) {
      break;
    }
  } // outerLoop ends
}

bubbleSort();

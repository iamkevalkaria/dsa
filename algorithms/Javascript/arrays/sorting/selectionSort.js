function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

(() => {
  // const arr = [41, 25, 98, 5, 12];
  const arr = [11,2,33,4,5,55];

  // 1. Run selection sort
  selectionSort(arr);
  // 2. Log the array
  console.log(arr);
})();

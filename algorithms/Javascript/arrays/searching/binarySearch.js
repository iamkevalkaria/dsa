// const arr = [1, 2, 45, 56, 57, 67, 77, 78, 79, 93, 222];
const arr = [-1, 0, 3, 5, 9, 12];

//m //l  //r
const value = 9;

function searchForValueUsingBinarySearch(arr, value) {
  let leftPointerIndex = 0;
  let rightPointerIndex = arr.length - 1;
  let centrePointerIndex = Math.round(
    (leftPointerIndex + rightPointerIndex) / 2
  );

  while (
    arr[centrePointerIndex] !== value &&
    leftPointerIndex < rightPointerIndex
  ) {
    console.log(
      'leftPointerIndex, rightPointerIndex, centrePointerIndex : ',
      leftPointerIndex,
      rightPointerIndex,
      centrePointerIndex
    );
    if (arr[centrePointerIndex] > value) {
      rightPointerIndex = centrePointerIndex - 1;
    } else {
      leftPointerIndex = centrePointerIndex + 1;
    }
    centrePointerIndex = Math.round((leftPointerIndex + rightPointerIndex) / 2);
  }
  const response = value === arr[centrePointerIndex] ? centrePointerIndex : -1;
  return response;
}

const response = searchForValueUsingBinarySearch(arr, value);
console.log(response);

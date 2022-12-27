const arr = [1, 2, 45, 56, 57, 67, 77, 78, 79, 93, 222];
const value = 85;

function searchForValueUsingBinarySearch(arr, value) {
  console.log(arr);
  if (arr.length === 0) return -1;

  const middleIndex = Math.round(arr.length / 2);
  const arrayValue = arr[middleIndex];
  console.log('Middle Index: ', middleIndex, ' Array Value: ', arrayValue);

  if (arrayValue === value) return value;
  if (arr.length === 1) return -1;
  if (arrayValue > value) {
    // 95,85
    // Slice will return value from 0 till middleIndex
    return searchForValueUsingBinarySearch(arr.slice(0, middleIndex), value);
  } else {
    // 77 , 85
    return searchForValueUsingBinarySearch(arr.slice(middleIndex), value);
  }
}

const response = searchForValueUsingBinarySearch(arr, value);
console.log(response);

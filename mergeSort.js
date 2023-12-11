function merge(arr1, arr2) {
  // Merges two arrays
  const arr3 = [];
  let max = arr1.length + arr2.length;
  let i = 0;
  let j = 0;

  // Compare the first element of array 1 to the first element of array 2
  for (let k = 0; k < max; k++) {
    if (arr1[i] < arr2[j] || !arr2[j]) {
      arr3[k] = arr1[i];
      i++;
    } else {
      arr3[k] = arr2[j];
      j++;
    }
  }

  return arr3;
}

function mergeSort(arr) {
  // Sorts an array
  if (arr.length === 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  //console.log(mid);
  return merge(
    mergeSort(arr.slice(0, mid)),
    mergeSort(arr.slice(mid, arr.length)),
  );
}

const array = [52, 42, 13, 47, 26, 568, 51, 3243, 646, 62, 41, 19, 37, 20];
const smallerArray = [3, 2, 1];
const lettersArray = ["zoo", "farenheith", "number", "albion"];

let arrays = [array, smallerArray, lettersArray];
arrays.forEach((array) => {
  console.log("Unsorted array: ", array);
  console.log("Sorted array: ", mergeSort(array));
});

function binarySearchRecursive(arr, target, left, right) {
  if (left > right) {
    return -1; // not found
  }

  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) {
    return mid; // found
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right);
  } else {
    return binarySearchRecursive(arr, target, left, mid - 1);
  }
}

let arr1 = [0, 2, 3, 6, 8, 12, 38, 81, 399];
console.log(binarySearchRecursive(arr1, 3, 0, arr1.length));
console.log(binarySearchRecursive(arr1, 81, 0, arr1.length));
console.log(binarySearchRecursive(arr1, 8, 0, arr1.length));
console.log(binarySearchRecursive(arr1, 100, 0, arr1.length));

function binarySearchIterative(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid; // found
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1; // not found
}

let arr2 = [0, 2, 3, 6, 8, 12, 38, 81, 399];
console.log(binarySearchIterative(arr2, 3));
console.log(binarySearchIterative(arr2, 81));
console.log(binarySearchIterative(arr2, 8));
console.log(binarySearchIterative(arr2, 100));

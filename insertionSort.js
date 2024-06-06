// let arr = [8, 5, 7, 6];
// function insertionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let current = arr[i];
//     for (let j = i; j >= 0; j--) {
//       if (j == 0) {
//         arr[j] = current;
//       }

//       if (arr[j - 1] > current) {
//         arr[j] = arr[j - 1];
//       } else {
//         arr[j] = current;
//         break;
//       }
//     }
//   }
//   return arr;
// }
// console.log(insertionSort(arr));

let arr = [8, 5, 7, 6];
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}
console.log(insertionSort(arr));

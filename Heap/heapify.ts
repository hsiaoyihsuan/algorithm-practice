function heapify(arr: number[]): number[] {
  // 0-th position is moved to the end
  arr.push(arr[0]);

  let cur = Math.floor((arr.length - 1) / 2);
  while (cur > 0) {
    let i = cur;

    // Percolate Down
    while (2 * i < arr.length) {
      if (
        i * 2 + 1 < arr.length &&
        arr[2 * i] > arr[2 * i + 1] &&
        arr[2 * i + 1] < arr[i]
      ) {
        const tmp = arr[i];
        arr[i] = arr[2 * i + 1];
        arr[2 * i + 1] = tmp;
        i = 2 * i + 1;
      } else if (arr[2 * i] < arr[i]) {
        const tmp = arr[i];
        arr[i] = arr[2 * i];
        arr[2 * i] = tmp;
        i = 2 * i;
      } else {
        break;
      }
    }

    cur--;
  }

  return arr;
}

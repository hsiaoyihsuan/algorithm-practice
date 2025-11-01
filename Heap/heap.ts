class MinHeap {
  public heap: number[];
  constructor() {
    this.heap = [0];
  }

  push(val: number) {
    this.heap.push(val);
    let i = this.heap.length - 1;

    while (i > 1 && this.heap[i] < this.heap[Math.floor(i / 2)]) {
      const tmp = this.heap[Math.floor(i / 2)];
      this.heap[Math.floor(i / 2)] = this.heap[i];
      this.heap[i] = tmp;
      i = Math.floor(i / 2);
    }
  }

  pop() {
    if (this.heap.length === 1) {
      return null;
    }

    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    const result = this.heap[1];
    let i = 1;
    this.heap[1] = this.heap.pop()!;
    while (2 * i < this.heap.length) {
      if (
        2 * i + 1 < this.heap.length &&
        this.heap[2 * i] > this.heap[2 * i + 1] &&
        this.heap[i] > this.heap[2 * i + 1]
      ) {
        const tmp = this.heap[2 * i + 1];
        this.heap[2 * i + 1] = this.heap[i];
        this.heap[i] = tmp;
        i = 2 * i + 1;
      } else if (this.heap[2 * i] > this.heap[i]) {
        const tmp = this.heap[2 * i];
        this.heap[2 * i] = this.heap[i];
        this.heap[i] = tmp;
        i = 2 * i;
      } else {
        break;
      }
    }

    return result;
  }
}

const heap = new MinHeap();
heap.push(5);
heap.push(4);
heap.push(3);
heap.push(2);
heap.push(1);

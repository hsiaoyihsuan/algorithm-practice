// MinHeap implementation using a 1-indexed array
// Useful for problems like Kth largest element, priority queues, etc.
export class MinHeap {
  private heap: number[];

  constructor() {
    // heap[0] is unused for simpler index calculations
    this.heap = [0];
  }

  // Insert a value into the heap
  push(val: number) {
    this.heap.push(val);
    let i = this.heap.length - 1;

    // Bubble up: swap with parent if smaller
    while (i > 1 && this.heap[i] < this.heap[Math.floor(i / 2)]) {
      const parentIndex = Math.floor(i / 2);
      const tmp = this.heap[parentIndex];
      this.heap[parentIndex] = this.heap[i];
      this.heap[i] = tmp;
      i = parentIndex;
    }
  }

  // Remove and return the smallest value
  pop(): number | null {
    if (this.heap.length === 1) return null; // empty heap

    if (this.heap.length === 2) return this.heap.pop()!; // only one element

    const result = this.heap[1]; // root of heap

    // Move the last element to the root and bubble down
    this.heap[1] = this.heap.pop()!;
    let i = 1;

    // Percolate down
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
      } else if (this.heap[2 * i] < this.heap[i]) {
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

  // Peek at the smallest element without removing it
  peek(): number | null {
    return this.heap.length === 1 ? null : this.heap[1];
  }

  isEmpty(): boolean {
    return this.heap.length === 1;
  }

  size(): number {
    return this.heap.length - 1;
  }
}

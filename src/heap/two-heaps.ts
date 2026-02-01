import {MaxHeap} from "./max-heap.ts";
import {MinHeap} from "./min-heap.ts";

class MedianHeap {
  private small: MinHeap;
  private large: MaxHeap;

  constructor() {
    this.small = new MinHeap();
    this.large = new MaxHeap();
  }

  insert(num: number) {
    // Push num to small part and then swap with larget part if needed
    this.small.push(num);
    if (
      !this.small.isEmpty() &&
      !this.large.isEmpty() &&
      this.small.peek()! > this.large.peek()!
    ) {
      const val = this.small.pop()!;
      this.large.push(val);
    }

    // Handle uneven size
    if (this.small.size() > this.large.size() + 1) {
      const val = this.small.pop()!;
      this.large.push(val);
    }

    if (this.large.size() > this.small.size() + 1) {
      const val = this.large.pop()!;
      this.small.push(val);
    }
  }

  getMedian(): number | null {
    if (this.small.isEmpty() && this.large.isEmpty()) return null;

    if (this.small.size() > this.large.size()) {
      return this.small.peek()!;
    } else if (this.large.size() > this.small.size()) {
      return this.large.peek()!;
    }

    return (this.small.peek()! + this.large.peek()!) / 2;
  }
}

const mh = new MedianHeap();
mh.insert(1);
mh.insert(5);
mh.insert(2);
mh.insert(10);
mh.insert(3);
console.log(mh.getMedian()); // 3

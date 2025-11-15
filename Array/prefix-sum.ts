// Q: Given an array of values, design a data structure that can query the sum of a subarray of the values.
class PrefixSum {
  private prefix: number[];
  constructor(nums: number[]) {
    this.prefix = new Array();
    let total = 0;
    for (let n of nums) {
      total += n;
      this.prefix.push(total);
    }
  }

  rangeSum(left: number, right: number) {
    let preRight = this.prefix[right];
    let preLeft = left > 0 ? this.prefix[left - 1] : 0;
    return preRight - preLeft;
  }
}

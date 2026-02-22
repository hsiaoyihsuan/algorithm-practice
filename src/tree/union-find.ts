export class UnionFind {
  private pair: Map<number, number>;
  private rank: Map<number, number>;

  constructor(n: number) {
    this.pair = new Map<number, number>();
    this.rank = new Map<number, number>();

    for (let i = 0; i < n; i++) {
      this.pair.set(i, i);
      this.rank.set(i, 0);
    }
  }

  find(x: number): number {
    const parent = this.pair.get(x)!;

    if (parent !== x) {
      const root = this.find(parent);
      this.pair.set(x, root); // path compression
      return root;
    }

    return x;
  }

  union(n1: number, n2: number): boolean {
    const root1 = this.find(n1);
    const root2 = this.find(n2);
    if (root1 === root2) return false;

    if (this.rank.get(root1)! > this.rank.get(root2)!) {
      this.pair.set(root2, root1);
    } else if (this.rank.get(root2)! > this.rank.get(root1)!) {
      this.pair.set(root1, root2);
    } else {
      this.pair.set(root2, root1);
      this.rank.set(root1, this.rank.get(root1)! + 1);
    }
    return true;
  }
}

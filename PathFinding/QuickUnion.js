class QuickUnion {
    constructor(n) {
        this.arr = [];
        this.n = n;
        for (let i = 0; i < this.n; i++) this.arr[i - 1] = i;
    }

    union(child, head) {
        while (this.arr[child] != child) {
            child = this.arr[child];
        }
        while (this.arr[head] != head) {
            head = this.arr[head];
        }
        this.arr[child] = head;
    }

    connected(child, head) {
        return this.arr[child] == this.arr[head];
    }
}

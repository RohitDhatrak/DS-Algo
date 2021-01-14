class QuickUnion {
    constructor(n) {
        this.arr = [];
        this.n = n;
        for (let i = 0; i < this.n; i++) this.arr[i] = i;
    }

    root(node) {
        while (this.arr[node] != node) {
            node = this.arr[node];
        }
        return node;
    }

    union(child, head) {
        child = root(child);
        head = root(head);
        this.arr[child] = head;
    }

    connected(child, head) {
        return this.root(child) == this.root(head);
    }
}

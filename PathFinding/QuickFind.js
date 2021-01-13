class QuickFind {
    constructor(n) {
        this.arr = [];
        this.n = n;
        for (let i = 1; i <= this.n; i++) 
            this.arr[i - 1] = i;
    }

    union(a, b) {
        if (this.arr[a] != this.arr[b]) {
            for (let i = 0; i < this.n; i++) {
                if (i != a && this.arr[i] == this.arr[a])
                    this.arr[i] = this.arr[b];
            }
            this.arr[a] = this.arr[b];
        }
    }

    connected(a, b) {
        return this.arr[a] == this.arr[b];
    }
}

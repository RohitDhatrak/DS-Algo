// union() - connect two points
// connected() - checks if two points are connected

// Time Complexity: initialize - O(n), union - O(n), connected - O(1)
// Space Complexity - O(n)

class QuickFind {
    constructor(n) {
        this._arr = [];
        for (let i = 0; i < n; i++) this._arr[i] = i;
    }

    union(a, b) {
        if (this._arr[a] != this._arr[b]) {
            for (let i = 0; i < this._arr.length; i++) {
                if (i != a && this._arr[i] == this._arr[a])
                    this._arr[i] = this._arr[b];
            }
            this._arr[a] = this._arr[b];
        }
    }

    connected(a, b) {
        return this._arr[a] == this._arr[b];
    }
}

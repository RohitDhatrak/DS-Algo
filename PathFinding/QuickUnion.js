// union() - connect two points
// connected() - checks if two points are connected

// Time Complexity: initialize - O(n), union - O(n), connected - O(n) 
// (both union and connected use the _root method which takes linear time(n) in the worst case)
// Space Complexity - O(n)

class QuickUnion {
    constructor(n) {
        this._arr = [];
        this._N = n;
        for (let i = 0; i < n; i++) this._arr[i] = i;
    }

    _root(node) {
        while (this._arr[node] != node) {
            node = this._arr[node];
        }
        return node;
    }

    union(child, head) {
        child = this._root(child);
        head = this._root(head);
        if (child != head) this._arr[child] = head;
        this._N--;
    }

    connected(child, head) {
        return this._root(child) == this._root(head);
    }
}

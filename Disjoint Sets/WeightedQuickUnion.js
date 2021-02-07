const _find = new WeakMap();
const _N = new WeakMap();
const _arr = new WeakMap();

class WeightedQuickUnion {
    constructor(n) {
        if (n == undefined) throw new Error("Constructor parameter not passed");

        _arr.set(this, []);
        const arr = _arr.get(this);
        _N.set(this, n);
        for (let i = 0; i <= n; i++) arr[i] = -1;
        this.count = 0;

        _find.set(this, (node) => {
            while (arr[node] >= 0) {
                node = arr[node];
                this.count += 2;
            }
            this.count++;
            return node;
        });
    }

    union(a, b) {
        const arr = _arr.get(this);
        const find = _find.get(this);
        const N = _N.get(this);
        this.count = 0;

        a = find(a);
        b = find(b);
        if (a != b) {
            if (-1 * arr[a] > -1 * arr[b]) {
                arr[a] += arr[b];
                arr[b] = a;
            } else {
                arr[b] += arr[a];
                arr[a] = b;
            }
            this.count += 6;
        }
        _N.set(this, N - 1);
        console.log(arr);
        console.log(this.count);
    }

    isConnected(a, b) {
        const find = _find.get(this);
        return find(a) == find(b);
    }

    get count1() {
        return _N.get(this);
    }
}

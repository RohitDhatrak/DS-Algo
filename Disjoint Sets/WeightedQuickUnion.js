const _find = new WeakMap();
const _N = new WeakMap();
let _arr = new WeakMap();

class WeightedQuickUnion {
    constructor(n) {
        if (n == undefined) throw new Error("Constructor parameter not passed");

        _arr.set(this, []);
        let arr = _arr.get(this);
        _N.set(this, n);
        for (let i = 0; i <= n; i++) arr[i] = -1;

        _find.set(this, (node) => {
            while (arr[node] >= 0) {
                node = arr[node];
            }
            return node;
        });
    }

    union(a, b) {
        let arr = _arr.get(this);
        let find = _find.get(this);
        let N = _N.get(this);

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
        }
        console.log(arr);
        _N.set(this, N - 1);
    }

    isConnected(a, b) {
        let find = _find.get(this);
        return find(a) == find(b);
    }

    get count() {
        return _N.get(this);
    }
}

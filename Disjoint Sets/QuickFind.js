const _find = new WeakMap();
const _N = new WeakMap();
let _arr = new WeakMap();

class QuickFind {
    constructor(n) {
        if (n == undefined) throw new Error("Constructor parameter not passed");

        _arr.set(this, []);
        let arr = _arr.get(this);
        _N.set(this, n);
        for (let i = 0; i <= n; i++) arr[i] = i;

        _find.set(this, (node) => _arr.get(this)[node]);
    }

    union(a, b) {
        let arr = _arr.get(this);
        let find = _find.get(this);
        let N = _N.get(this);

        let IDa = find(a);
        let IDb = find(b);
        if (IDa != IDb) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == IDa) arr[i] = IDb;
            }
            _N.set(this, N - 1);
        }
    }

    isConnected(a, b) {
        let arr = _arr.get(this);
        return arr[a] == arr[b];
    }

    get count() {
        return _N.get(this);
    }
}

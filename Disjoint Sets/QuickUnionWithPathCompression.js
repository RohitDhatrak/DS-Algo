class QuickUnionWithPathCompression {
    constructor(n) {
        if (n == undefined) throw new Error("Constructor parameter not passed");

        _arr.set(this, []);
        let arr = _arr.get(this);
        _N.set(this, n);
        for (let i = 0; i <= n; i++) arr[i] = i;

        _find.set(this, (node) => {
            let parentNode = node;
            while (arr[parentNode] != parentNode) {
                parentNode = arr[parentNode];
            }
            while (arr[node] != node) {
                let temp = node;
                node = arr[node];
                arr[temp] = parentNode;
            }
            return parentNode;
        });
    }

    union(a, b) {
        let arr = _arr.get(this);
        let find = _find.get(this);
        let N = _N.get(this);

        a = find(a);
        b = find(b);
        if (a != b) {
            arr[a] = b;
        }
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

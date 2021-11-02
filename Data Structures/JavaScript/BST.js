class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.occurance = 1;
    }
}

class BST {
    #root;
    #size;

    constructor() {
        this.#root = null;
        this.#size = 0;
    }

    /* Inserts a node into the BST O(logn) */
    insert(value) {
        if (this.#root) {
            let node = this.#root;
            let positionIsFound = false;
            while (!positionIsFound) {
                if (value < node.value) {
                    if (node.left) node = node.left;
                    else {
                        node.left = new Node(value);
                        positionIsFound = true;
                    }
                } else if (value > node.value) {
                    if (node.right) node = node.right;
                    else {
                        node.right = new Node(value);
                        positionIsFound = true;
                    }
                } else {
                    node.occurance++;
                    return this.#root;
                }
            }
        } else {
            this.#root = new Node(value);
        }
        this.#size++;
        return this.#root;
    }

    /* Returns a boolean indicating whether the value is present in the BST O(logn) */
    contains(value) {
        let node = this.#root;
        while (node) {
            if (value < node.value) {
                node = node.left;
            } else if (value > node.value) {
                node = node.right;
            } else if (value === node.value) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    get size() {
        return this.#size;
    }
}

module.exports = BST;

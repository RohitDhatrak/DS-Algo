const Queue = require("./Queue");

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

    /* If we pass a specific value to search it returns a boolean indicating whether the value is present in the BST
    
    If we dont pass a specific value to search then it returns an array of all the nodes in breadth-first order
    */

    BFS(value) {
        const visited = [];
        const queue = new Queue();
        queue.enqueue(this.#root);

        while (queue.length > 0) {
            const currentNode = queue.dequeue();

            if (value && value === currentNode.value) {
                return true;
            } else if (!value) {
                visited.push(currentNode.value);
            }

            if (currentNode.left) {
                queue.enqueue(currentNode.left);
            }
            if (currentNode.right) {
                queue.enqueue(currentNode.right);
            }
        }

        if (value) {
            return false;
        }
        return visited;
    }

    DFS({ type, value }) {
        const visited = [];
        let isFound = false;

        function traversePreOrder(node) {
            /* 
                We traverse from top to bottom picking left side first at every node

                Root, Left, Right (pre order - we add the root before the children)

                usecase: to create a copy of the tree
            */
            if (value && value === node.value) isFound = true;
            else if (!value) visited.push(node.value);

            if (node.left) traversePreOrder(node.left);
            if (node.right) traversePreOrder(node.right);
        }

        function traversePostOrder(node) {
            /* 
                We traverse from the bottom to top starting from left side and then traversing the right side
            
                While traversing from bottom to top we pick the left node first then the right node and then the parent node.

                Left, Right, Root (post order - we add the root after the children)

                usecase: can be used to delete the tree
            */
            if (node.left) traversePostOrder(node.left);
            if (node.right) traversePostOrder(node.right);

            if (value && value === node.value) isFound = true;
            else if (!value) visited.push(node.value);
        }

        function traverseInOrder(node) {
            /* 
                Same as post order we traverse from the bottom to top starting from left side and then traversing the right side
            
                While traversing from bottom to top we pick the left node first  node and then the parent node then the right

                Left, Root, Right

                usecase: returns the nodes in increasing order (inorder)
            */
            if (node.left) traverseInOrder(node.left);
            if (value && value === node.value) isFound = true;
            else if (!value) visited.push(node.value);
            if (node.right) traverseInOrder(node.right);
        }

        if (type === "postorder") traversePostOrder(this.#root);
        else if (type === "inorder") traverseInOrder(this.#root);
        else traversePreOrder(this.#root);

        if (value) {
            return isFound;
        }
        return visited;
    }

    get size() {
        return this.#size;
    }
}

module.exports = BST;

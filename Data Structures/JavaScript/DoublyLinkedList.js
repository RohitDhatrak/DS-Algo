"use strict";

class Node {
    constructor(value, prev) {
        this.value = value;
        this.next = null;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    #head;
    #tail;
    #length;

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#length = 0;
    }

    /* Add a node to the end of the list O(1) */
    push(value) {
        if (this.#head) {
            this.#tail.next = new Node(value, this.#tail);
            this.#tail = this.#tail.next;
        } else {
            this.#head = new Node(value, null);
            this.#tail = this.#head;
        }
        this.#length++;
        return this;
    }

    /* Remove the last node from the list O(1) */
    pop() {
        const lastNode = this.#tail;
        if (!this.#head) {
            return undefined;
        } else if (this.#length === 1) {
            this.#head = null;
            this.#tail = null;
        } else {
            this.#tail = lastNode.prev;
            this.#tail.next = null;
            lastNode.prev = null;
        }
        this.#length--;
        return lastNode;
    }

    /* Remove the first node from the list O(1) */
    shift() {
        const firstNode = this.#head;
        if (!this.#head) {
            return undefined;
        } else if (this.#length === 1) {
            this.#head = null;
            this.#tail = null;
        } else {
            this.#head = firstNode.next;
            this.#head.prev = null;
            firstNode.next = null;
        }
        this.#length--;
        return firstNode;
    }

    /* Add a new node to the beginning of the list O(1) */
    unshift(value) {
        if (!this.#head) {
            return this.push(value);
        } else {
            const newNode = new Node(value, null);
            this.#head.prev = newNode;
            newNode.next = this.#head;
            this.#head = newNode;
            this.#length++;
            return this;
        }
    }

    /* Get the value of the node at the given position O(n) */
    get(position) {
        if (position < 0 || position >= this.#length) {
            return undefined;
        } else if (position < this.#length / 2) {
            let node = this.#head;
            while (position !== 0) {
                node = node.next;
                position--;
            }
            return node.value;
        } else {
            let node = this.#tail;
            while (position < this.#length - 1) {
                node = node.prev;
                position++;
            }
            return node.value;
        }
    }

    /* Private property to get node at the given position O(n) */
    #getNode(position) {
        if (position < 0 || position >= this.#length) {
            return undefined;
        } else if (position < this.#length / 2) {
            let node = this.#head;
            while (position !== 0) {
                node = node.next;
                position--;
            }
            return node;
        } else {
            let node = this.#tail;
            while (position < this.#length - 1) {
                node = node.prev;
                position++;
            }
            return node;
        }
    }

    /* Change the value of the node at the given position O(n) */
    set(position, value) {
        const node = this.#getNode(position);
        if (node) {
            node.value = value;
            return true;
        }
        return undefined;
    }

    /* Insert a node at the given position O(1) or O(n) */
    insert(position, value) {
        if (position < 0 || position >= this.#length) {
            return undefined;
        } else if (position === 0) {
            this.unshift(value);
        } else {
            const prevNode = this.#getNode(position - 1);
            const newNode = new Node(value, prevNode);
            const nextNode = prevNode.next;
            newNode.next = nextNode;
            nextNode.prev = newNode;
            prevNode.next = newNode;
            this.#length++;
        }
        return true;
    }

    /* Remove the node at the given position O(1) or O(n) */
    remove(position) {
        if (position < 0 || position >= this.#length) {
            return undefined;
        } else if (position === 0) {
            this.shift();
        } else if (position === this.length - 1) {
            this.pop();
        } else {
            const prevNode = this.#getNode(position - 1);
            const nodeToBeRemoved = prevNode.next;
            nodeToBeRemoved.next.prev = prevNode;
            prevNode.next = nodeToBeRemoved.next;
            nodeToBeRemoved.next = null;
            nodeToBeRemoved.prev = null;
            this.#length--;
        }
        return true;
    }

    get length() {
        return this.#length;
    }
}

module.exports = DoublyLinkedList;

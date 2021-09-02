"use strict";

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
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
            this.#tail.next = new Node(value);
            this.#tail = this.#tail.next;
        } else {
            this.#head = new Node(value);
            this.#tail = this.#head;
        }
        this.#length++;
        return this;
    }

    /* Remove the last node from the list O(n) */
    pop() {
        let newTail = this.#head;
        if (!this.#head) {
            return undefined;
        } else if (this.#length === 1) {
            this.#head = null;
            this.#tail = null;
            this.#length = 0;
            return newTail;
        } else {
            for (let i = 0; i < this.#length - 2; i++) {
                newTail = newTail.next;
            }
            const lastNode = newTail.next;
            newTail.next = null;
            this.#tail = newTail;
            this.#length--;
            return lastNode;
        }
    }

    /* Remove the first node from the list O(1) */
    shift() {
        if (!this.#head) {
            return undefined;
        } else if (this.#length === 1) {
            return this.pop();
        } else {
            const firstNode = this.#head;
            this.#head = firstNode.next;
            firstNode.next = null;
            this.#length--;
            return firstNode;
        }
    }

    /* Add a new node to the beginning of the list O(1) */
    unshift(value) {
        if (!this.#head) {
            return this.push(value);
        } else {
            const newNode = new Node(value);
            newNode.next = this.#head;
            this.#head = newNode;
            this.#length++;
            return this;
        }
    }

    /* Get the value of the node at the given position O(n) */
    get(position) {
        if (position >= this.#length || position < 0) {
            return undefined;
        }
        let node = this.#head;
        while (position !== 0) {
            node = node.next;
            position--;
        }
        return node.value;
    }

    /* Private property to get node at the given position O(n) */
    #getNode(position) {
        if (position >= this.#length || position < 0) {
            return undefined;
        }
        let node = this.#head;
        while (position !== 0) {
            node = node.next;
            position--;
        }
        return node;
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
        if (position >= this.#length || position < 0) {
            return undefined;
        } else if (position === 0) {
            this.unshift(value);
        } else {
            const prevNode = this.#getNode(position - 1);
            const newNode = new Node(value);
            newNode.next = prevNode.next;
            prevNode.next = newNode;
            this.#length++;
        }
        return true;
    }

    /* Remove the node at the given position O(1) or O(n) */
    remove(position) {
        if (position >= this.#length || position < 0) {
            return undefined;
        } else if (position === 0) {
            this.shift();
        } else {
            const node = this.#getNode(position);
            const prevNode = this.#getNode(position - 1);
            prevNode.next = node.next;
            this.#length--;
        }
        return true;
    }

    /* Reverses the order of the list in place O(n) */
    reverse() {
        this.#tail = this.#head;
        let currentNode = this.#head;
        let nextNode = currentNode.next;
        let prevNode = currentNode;
        while (nextNode) {
            currentNode = nextNode;
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
        }
        this.#tail.next = null;
        this.#head = currentNode;
        return this;
    }

    /* Get the length of the list */
    get length() {
        return this.#length;
    }
}

module.exports = SinglyLinkedList;

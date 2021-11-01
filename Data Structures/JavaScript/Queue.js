"use strict";

class Node {
    constructor(value, prev) {
        this.value = value;
        this.prev = prev;
        this.next = null;
    }
}

class Queue {
    #head;
    #tail;
    #length;

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#length = 0;
    }

    /* Adds an element to the end of the queue O(1)*/
    enqueue(element) {
        if (this.#head) {
            this.#tail.next = new Node(element, this.#tail);
            this.#tail = this.#tail.next;
        } else {
            this.#head = new Node(element, null);
            this.#tail = this.#head;
        }
        this.#length++;
    }

    /* Removes the first element in the queue O(1)*/
    dequeue() {
        const firstElement = this.#head;
        if (!this.#head) return undefined;
        else if (this.length === 1) {
            this.#head = null;
            this.#tail = null;
        } else {
            this.#head = firstElement.next;
            firstElement.next = null;
            this.#head.prev = null;
        }
        this.#length--;
        return firstElement.value;
    }

    /* Returns the first element in the queue without removing it O(1) */
    peek() {
        if (!this.#head) return undefined;
        return this.#head.value;
    }

    get length() {
        return this.#length;
    }
}

module.exports = Queue;

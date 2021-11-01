"use strict";

class Node {
    constructor(value, prev) {
        this.value = value;
        this.prev = prev;
        this.next = null;
    }
}

class Stack {
    #head;
    #tail;
    #size;

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#size = 0;
    }

    /* Add a element on top of the stack O(1) */
    push(value) {
        if (this.#head) {
            this.#tail.next = new Node(value, this.#tail);
            this.#tail = this.#tail.next;
        } else {
            this.#head = new Node(value, null);
            this.#tail = this.#head;
        }
        this.#size++;
        return this;
    }

    /* Remove the element at the top of the stack and returns it O(1)*/
    pop() {
        const lastElement = this.#tail;
        if (!this.#head) return undefined;
        else if (this.#size === 1) {
            this.#head = null;
            this.#tail = null;
        } else {
            this.#tail = lastElement.prev;
            lastElement.prev = null;
            this.#tail.next = null;
        }
        this.#size--;
        return lastElement.value;
    }

    /* Returns the value of the element at the top of the stack without removing it O(1)*/
    peek() {
        if (!this.#head) return undefined;
        else {
            return this.#tail.value;
        }
    }

    get size() {
        return this.#size;
    }
}

module.exports = Stack;

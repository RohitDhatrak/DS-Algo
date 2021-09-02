const SinglyLinkedList = require("../SinglyLinkedList");

const list = new SinglyLinkedList();

test("Testing inialization of a singly linked list", () => {
    expect(list.length).toBe(0);
    expect(list.head).toBe(undefined);
    expect(list.tail).toBe(undefined);
});

test("Testing push method of singly linked list", () => {
    expect(list.push(1)).toBe(list);
    expect(list.length).toBe(1);
    expect(list.get(0)).toBe(1);
    list.push(32);
    expect(list.get(1)).toBe(32);
});
// 1 > 32

test("Testing pop method of singly linked list", () => {
    const popedNode = list.pop();
    expect(popedNode.value).toBe(32);
    expect(popedNode.next).toBe(null);
    list.pop();
    expect(list.length).toBe(0);
    expect(list.pop()).toBe(undefined);
    list.push(23);
    list.push(3);
    list.push(2);
    expect(list.pop().value).toBe(2);
    expect(list.length).toBe(2);
});
// 23 > 3

test("Testing shift method of singly linked list", () => {
    const shiftedNode = list.shift();
    expect(shiftedNode.value).toBe(23);
    expect(shiftedNode.next).toBe(null);
    expect(list.shift().value).toBe(3);
    expect(list.length).toBe(0);
    expect(list.shift()).toBe(undefined);
});
// null

test("Testing unshift method of singly linked list", () => {
    expect(list.unshift(45)).toBe(list);
    expect(list.get(0)).toBe(45);
    expect(list.unshift(2)).toBe(list);
    expect(list.get(0)).toBe(2);
    expect(list.length).toBe(2);
});
// 2 > 45

test("Testing get method of singly linked list", () => {
    expect(list.get(-2)).toBe(undefined);
    expect(list.get(200)).toBe(undefined);
    expect(list.get(2)).toBe(undefined);
    expect(list.get(0)).toBe(2);
    expect(list.get(1)).toBe(45);
});
// 2 > 45

test("Testing set method of singly linked list", () => {
    expect(list.set(2, 100)).toBe(undefined);
    expect(list.set(0, 34)).toBe(true);
    expect(list.get(0)).toBe(34);
    expect(list.set(1, 25)).toBe(true);
    expect(list.get(1)).toBe(25);
});
// 34 > 25

test("Testing insert method of singly linked list", () => {
    expect(list.insert(0, 19)).toBe(true);
    expect(list.get(0)).toBe(19);
    expect(list.length).toBe(3);
    expect(list.insert(3, 20)).toBe(undefined);
    expect(list.insert(2, 20)).toBe(true);
    expect(list.get(2)).toBe(20);
    expect(list.length).toBe(4);
});
// 19 > 34 > 20 > 25

test("Testing remove method of singly linked list", () => {
    expect(list.remove(0)).toBe(true);
    expect(list.get(0)).toBe(34);
    expect(list.length).toBe(3);
    expect(list.remove(3)).toBe(undefined);
    expect(list.remove(2)).toBe(true);
    expect(list.length).toBe(2);
    expect(list.get(1)).toBe(20);
    expect(list.remove(1)).toBe(true);
    list.pop();
    expect(list.length).toBe(0);
});
// 34

test("Testing reverse method of singly linked list", () => {
    expect(list.push(1)).toBe(list);
    expect(list.push(2)).toBe(list);
    expect(list.push(3)).toBe(list);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
    expect(list.get(2)).toBe(3);
    expect(list.reverse()).toBe(list);
    expect(list.get(0)).toBe(3);
    expect(list.get(1)).toBe(2);
    expect(list.get(2)).toBe(1);
});
// empty

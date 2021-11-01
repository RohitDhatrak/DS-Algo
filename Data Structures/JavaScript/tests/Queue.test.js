const Queue = require("../Queue");

const queue = new Queue();

test("Testing initalization of a queue", () => {
    expect(queue.length).toBe(0);
});

test("Testing enqueue method of queue", () => {
    queue.enqueue(1);
    expect(queue.length).toBe(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.length).toBe(3);
});
// 1 < 2 < 3

test("Testing dequeue method of queue", () => {
    queue.dequeue();
    expect(queue.length).toBe(2);
    expect(queue.dequeue()).toBe(2);
    queue.dequeue();
    expect(queue.length).toBe(0);
    expect(queue.dequeue()).toBe(undefined);
    queue.enqueue(2);
    queue.enqueue(3);
});
// 2 < 3

test("Testing peek method of queue", () => {
    expect(queue.peek()).toBe(2);
    queue.dequeue();
    queue.dequeue();
    expect(queue.peek()).toBe(undefined);
});
//

const Stack = require("../Stack");

const stack = new Stack();

test("Testing initalization of the stack", () => {
    expect(stack.size).toBe(0);
});

test("Testing push method of the stack", () => {
    stack.push(1);
    stack.push(10);
    stack.push(28);
    expect(stack.size).toBe(3);
});
// 1 > 10 > 28

test("Testing pop method of the stack", () => {
    stack.pop();
    expect(stack.size).toBe(2);
    stack.pop();
    stack.pop();
    expect(stack.size).toBe(0);
    stack.push(120);
    stack.push(100);
    expect(stack.size).toBe(2);
});
// 120 > 100

test("Testing peek method of the stack", () => {
    expect(stack.peek()).toBe(100);
    stack.pop();
    expect(stack.peek()).toBe(120);
    expect(stack.size).toBe(1);
    stack.pop();
    expect(stack.size).toBe(0);
});
//

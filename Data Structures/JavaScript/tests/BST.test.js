const BST = require("../BST.js");

const bst = new BST();

test("Initalization of the BST", () => {
    expect(bst.size).toBe(0);
});

test("Insertion method of the BST", () => {
    expect(bst.insert(10).value).toBe(10);
    expect(bst.size).toBe(1);
    bst.insert(10);
    expect(bst.size).toBe(1);
    bst.insert(5);
    bst.insert(4);
    bst.insert(13);
    bst.insert(7);
    expect(bst.size).toBe(5);
});

/* 
		10(2)
	   /	 \
	  5		  13
	/  \
   4	7
*/

test("Testing contains method of the BST", () => {
    expect(bst.contains(10)).toBe(true);
    expect(bst.contains(13)).toBe(true);
    expect(bst.contains(5)).toBe(true);
    expect(bst.contains(4)).toBe(true);
    expect(bst.contains(7)).toBe(true);
    expect(bst.contains(15)).toBe(false);
    expect(bst.contains(undefined)).toBe(false);
    expect(bst.contains(null)).toBe(false);
    expect(bst.contains("hello")).toBe(false);
    expect(bst.contains("5")).toBe(false);
});

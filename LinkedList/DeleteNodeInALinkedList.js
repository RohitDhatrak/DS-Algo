// 237. Delete Node in a Linked List

// Time Complexity  O(n)
// Space Complexity O(1)

var deleteNode = function (node) {
    let lastNode = node;
    let currentNode = node;
    while (currentNode.next) {
        currentNode.value = currentNode.next.value;
        lastNode = currentNode;
        currentNode = currentNode.next;
    }
    lastNode.next = null;
};

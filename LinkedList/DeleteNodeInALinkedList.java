// 237. Delete Node in a Linked List

// Time Complexity  O(n)
// Space Complexity O(1)

public void deleteNode(ListNode node) {
    ListNode lastNode = node;
    ListNode currentNode = node;
    while (currentNode.next) {
        currentNode.value = currentNode.next.value;
        lastNode = currentNode;
        currentNode = currentNode.next;
    }
    lastNode.next = null;
}

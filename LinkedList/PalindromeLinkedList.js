// 234. Palindrome Linked List

// Time Complexity  O(n)
// Space Complexity O(n)

var isPalindrome = function (head) {
    let node = head;
    let length = 1;

    while (node.next) {
        length++;
        node = node.next;
    }

    if (length === 1) {
        return true;
    }


    let mid = length;
    let midNode = head;
    while (mid !== Math.ceil(length / 2)) {
        midNode = midNode.next;
        mid--;
    }

    const rightHalf = [];
    while (midNode) {
        rightHalf.push(midNode.val);
        midNode = midNode.next;
    }

    node = head;
    while (rightHalf.length) {
        if (rightHalf.pop() !== node.val) {
            return false;
        }
        node = node.next;
    }

    return true;
};

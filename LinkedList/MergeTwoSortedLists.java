// 21. Merge Two Sorted Lists

// Time Complexity  O(n + m)
// Space Complexity O(1)

public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    if (l1 == null || l2 == null) {
        if (l1 == null && l2 != null) {
            return l2;
        } else if (l1 != null && l2 == null) {
            return l1;
        } else {
            return null;
        }
    }

    ListNode mergedListHead;
    ListNode node;

    if (l1.val < l2.val) {
        mergedListHead = l1;
        node = l1;
        l1 = l1.next;
    } else {
        mergedListHead = l2;
        node = l2;
        l2 = l2.next;
    }

    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            node.next = l1;
            l1 = l1.next;
        } else {
            node.next = l2;
            l2 = l2.next;
        }
        node = node.next;
    }

    if (l1 == null) {
        node.next = l2;
    } else {
        node.next = l1;
    }
    return mergedListHead;
}

// Cleaner solution
public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    ListNode mergedListHead = new ListNode(0, null);
    ListNode node = mergedListHead;

    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            node.next = l1;
            l1 = l1.next;
        } else {
            node.next = l2;
            l2 = l2.next;
        }
        node = node.next;
    }
    if (l1 == null) {
        node.next = l2;
    } else if (l2 == null){
        node.next = l1;
    }
    return mergedListHead.next;
}

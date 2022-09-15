function hasCycle(head: ListNode | null): boolean {
    if(head === null) return false;
    let slow: ListNode | null = head.next? head.next : null;
    let fast: ListNode | null = slow ? head.next.next? head.next.next : null : null;

    while(slow&&fast){
        if(slow === fast){
            return true;
        }
        slow = slow.next? slow.next : null;
        fast = fast.next ? fast.next.next? fast.next.next : null : null;
    }
    return false;
};
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function deleteMiddle(head: ListNode | null): ListNode | null {
    if(!head?.next) return null;
    let firstPointer: ListNode = head;
    let secondPointer: ListNode = head?.next?.next;

    while(secondPointer && secondPointer.next){
        firstPointer = firstPointer?.next;
        secondPointer = secondPointer?.next?.next;
    }
    firstPointer.next = firstPointer.next.next;
    return head;
};


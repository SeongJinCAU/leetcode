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

function hasCycle(head: ListNode | null): boolean {
    let listAry: ListNode[] = new Array();

    while(head){
        for(let i of listAry){
            if(i === head) return true;
        }
        listAry.push(head);
        head = head.next
    }
    return false;
};
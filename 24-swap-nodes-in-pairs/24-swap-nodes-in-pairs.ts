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

function swapPairs(head: ListNode | null): ListNode | null {
    if(head === undefined || head === null) return head;
    
    let tempNode : ListNode | null = head.next ? head.next : null;
    let tempNode2 : ListNode | null = null;
    if(tempNode === null) return head;    
    head.next = head.next.next;
    tempNode.next = head;
    head = tempNode;
    let rtnNode : ListNode | null = head;
    head = head.next;
    if(head.next === null){
        return rtnNode;
    }
    while(head){
        tempNode = head.next ? head.next : null;
        tempNode2 = tempNode ? tempNode.next : null;
        if (tempNode === null || tempNode2 === null) return rtnNode;
        tempNode.next = tempNode2.next;
        tempNode2.next = tempNode;
        head.next = tempNode2;
        head = head.next ? head.next : null
        if(head) head = head.next ? head.next : null
        
    }
    return rtnNode;
};
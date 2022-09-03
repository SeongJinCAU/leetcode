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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let rtnNode : ListNode = head
    let delNode = function(head : ListNode | null){
        head.next = head.next.next ? head.next.next : null;
    }
    while(head){
        if(head.next && head.val === head.next.val){
            delNode(head)
        }else if(head.next && head.val !== head.next.val){
            head = head.next;
        }else if(!head.next) break;
    }

    return rtnNode;
};
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

function getNodeNum(head:ListNode|null): number{
    var index:number = 0;
    while(head != null){
        index++;
        head = head.next;
    }
    return index;
}



function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    var deleteLocation : number = getNodeNum(head) - n - 1;
    var idx : number = 0;
    var cur : ListNode = head;
    if(deleteLocation == -1){
        head = head.next;
        return head;
    }
    while(idx < deleteLocation){
        cur = cur.next;
        idx++;
    }

    cur.next = cur.next.next;
    return head;
};
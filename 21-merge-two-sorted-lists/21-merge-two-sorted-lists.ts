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

 function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let mergeList : ListNode | null = new ListNode();
    let head : ListNode | null = mergeList;
    while(list1 !== null && list2 !== null){
        if(list1.val >= list2.val){
            mergeList.next = list2;
            list2 = list2.next;
        }else{
            mergeList.next = list1;
            list1 = list1.next;
        }
        mergeList = mergeList.next;
    }
    if(list1 !== null){
        mergeList.next = list1;
    }
    if(list2 !== null){
        mergeList.next = list2;
    }

    
    return head.next;
};
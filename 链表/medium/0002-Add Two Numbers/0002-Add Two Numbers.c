/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    int carry = 0; // 记录进位
    int value = 0; // 记录每位数上的总和
    struct ListNode* p1 = l1;
    struct ListNode* p2 = l2;
    struct ListNode* l3 = NULL; // 新的链表，存储结果
    struct ListNode* p3 = NULL;
    struct ListNode* pre = NULL; // 当前处理位的前一位

    /*
    当相加到最高位，且没有进位的时候该循环结束
    */
    while(p1!=NULL||p2!=NULL||carry!=0){
        //value表示两个数的对应位之和加上进位，是该对应位上的总和
        if(p1 != NULL){
            value += (p1->val);
        }
        if(p2 != NULL){
            value += (p2->val);
        }
        value += carry;

        //p3用来临时存储新的链表的某位
        p3 = (struct ListNode*)malloc(sizeof(struct ListNode));
        p3->val = value % 10;
        p3->next = NULL;

        // 记录下进位
        carry = value / 10;

        if(p1 != NULL){
            p1 = p1->next;
        }
        if(p2 != NULL){
            p2 = p2->next;
        }

        if(pre == NULL){
            pre = (struct ListNode*)malloc(sizeof(struct ListNode));
            l3 = p3; //把首位地址存储起来
        }else{
            pre->next = p3; //连接前一位和当前位
        }

        pre = p3;
        p3 = NULL;
        value = 0;
    }
    return l3;

}
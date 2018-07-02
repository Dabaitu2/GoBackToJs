/**
 * JS 形式的单链表
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const ERR = 0;
const SUCCESS = 1;

function ListNode(val) {
    this.val = val;
    this.next = null;
}
// 查找函数
// 找不到的话返回null
function find(val) {
    var currentNode = this.head;
    while (currentNode.val !== val) {
        currentNode = currentNode.next;
        if (currentNode === null) {
            break;
        }
    }
    return currentNode;
}

// 插入函数(基于查找函数)
function insert(lastVal, val) {
    if (val === null) return ERR;
    var newNode = new ListNode(val);
    var lastNode = this.find(lastVal);
    if(lastNode === null){
        return ERR
    }
    newNode.next = lastNode.next;
    lastNode.next = newNode;
    this.length++;
}

// 删除函数
function remove(val) {
    var removeNode = this.find(val);
}

// 展示链表函数
function display() {
    var final = "";
    var currentNode = this.head;
    while(currentNode.next!==null) {
        final += currentNode.val+"->";
        currentNode = currentNode.next;
    }
    console.log(final+=currentNode.val);
}

function List(val) {
    this.head = new ListNode(val);
    this.tail = this.head;
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.length = 1;
}/**
 *    Created by tomokokawase
 *    On 2018/6/23
 *    阿弥陀佛，没有bug!
 */

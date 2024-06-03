class Node {
  constructor(val) {
      this.val = val;
      this.next = null;
  }
}

var MyLinkedList = function() {
  this.head = null;
  this.size = 0;
};

/** 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function(index) {
    if(index >= this.size) {
        return -1;
    }
    // head부터 돌리기
    let tmp = this.head;
    let count = 0;
    while(count < index) {
        tmp = tmp.next;
        count++;
    }
  
    return tmp.val;
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
  let newNode = new Node(val); // 새로운 노드 생성
  newNode.next = this.head;    // 새로운 노드의 다음 노드로 현재 헤드를 설정
  this.head = newNode;         // 헤드를 새로운 노드로 업데이트
  this.size++;                 // 연결 리스트의 크기 증가
  
  return null;
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {    
  // size가 0인지 확인한다. => 0 이면 head가 된다.
    if(this.size === 0) {
        this.addAtHead(val);
        return;
    }
  
    let curNode = this.head;
  
    while (curNode.next !== null) {
        curNode = curNode.next;
    }
  

    let newNode = new Node(val); // 새로운 노드 생성
 
    curNode.next = newNode;      // 기존의 꼬리 노드의 다음 노드로 새로운 노드를 설정
    this.tail = newNode;
    this.size++;                 // 연결 리스트의 크기 증가
    console.log('head: ', this.head);
    console.log('addAtTail tail: ', this.tail);
    return null;
};

/** 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(this.size < index) {
        return null;
    }
    if(this.size === index) {
        this.addAtTail(val);
        return;
    }

    let newNode = new Node(val);
    if(index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
        return null;
    }
    
    let pre = this.head;
    let after = null;
    for(let k = 0; k < index-1; k++) {
        pre = pre.next;
    }
    console.log('pre', pre);
    console.log('head', this.head);
    
    if(pre?.next) {
        after = pre.next;
    }
    newNode.next = after;
    pre.next = newNode;
    this.size++;
    return null;
};

/** 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(this.size <= index) {
        return null;
    }
    if(index === 0) {
        // 첫번째꺼 삭제
        this.head = this.head.next;
        this.size--;    
        return null;
    }
    let pre = this.head;
    let del = null;
    for(let k = 0; k < index-1; k++) {
        pre = pre.next;
    }
    if(pre.next === null) {
        del = pre;
    }else {
        del = pre.next;
    }
    let after = del.next;
    pre.next = after;
    this.size--;
    return null;
};


/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
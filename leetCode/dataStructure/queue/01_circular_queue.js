/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.queue = new Array();
  this.length = k;
  this.size = 0;
  this.front = null;
  this.rear = null;
};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  // 꽉 차있는지 확인
  if(this.isFull()) {
      return false;  
  }
  // 비어있는지 확인하기
  if(this.isEmpty()) {
      this.front = value;
  }
  
  this.queue.push(value);
  this.rear = value;
  this.size++;
  return true;
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  // 처음부터 비어있으면 못뺸다고 false 보내기
  if(this.isEmpty()) {
      this.front = null;
      this.rear = null;
      this.size = 0;
      return false;
  }
  
  this.queue.shift();
  this.size--;
  this.rear = this.queue[this.size-1];
  this.front = this.queue[0];
  
  // 빼고 난 후 비어있는지 확인하기
  if(this.isEmpty()) {
      this.front = null;
      this.rear = null;
      this.size = 0;
  }
  return true;
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  if(this.front !== null) {
      return this.front;
  }else {
      return -1;
  }
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  // 큐가 비어있으면 -1 리턴
  if(this.rear === null || this.isEmpty()) {
      return -1
  }else {
      return this.rear;    
  }  
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  if(this.size === 0) {
      this.rear = null;
      this.front = null;
      return true;
  }else {
      return false;
  }
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  if(this.size === this.length) {
      return true;
  }else {
      return false;
  }
};

/** 
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/
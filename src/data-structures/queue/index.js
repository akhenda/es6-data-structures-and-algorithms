export default class Queue {
  /**
   * initializes the queue
   * @param {number} capacity - the capacity of the queue
   */
  constructor(capacity = Infinity) {
    this._capacity = capacity;
    this._data = [];
    this._front = 0;
    this._rear = 0;
  }

  /**
   * adds a new element onto the queue
   * @param  {any} element
   * @return {number|string} the index of the added element or queue overflow message
   */
  enqueue(element) {
    if (this.size() < this._capacity) {
      this._rear++;
      this._data.push(element);

      return this._rear;
    }

    return 'Max capacity reached. Remove element before adding a new one.';
  }

  /**
   * does the reverse of the enqueue() i.e. removes an element
   * from the queue and then increments the front pointer variable
   * @return {any} the element in the front position of the queue or an error message
   */
  dequeue() {
    if (this._front === this._rear) {
      return 'No element inside the queue. Add element before dequeuing.';
    }

    const element = this._data.shift();

    if (this._front < this._rear) this._front++;

    return element;
  }

  /**
   * returns the oldest element added onto the queue. similar to dequeue but
   * does not remove element from queue
   * @return {any} returns the oldest element in the queue
   */
  peek() {
    return this._data[this._front];
  }

  /**
   * examine the front element of the queue
   * @return {any} the element in the front position of the queue
   */
  front() {
    return this._data[this._front];
  }

  /**
   * examine the back element of the queue
   * @return {any} the element in the rear position of the queue
   */
  back() {
    return this._data[this._rear];
  }

  /**
   * returns the size/length of the queue
   * @return {number} the difference of the front and rear values
   */
  size() {
    return this._rear - this._front;
  }

  /**
   * check whether the queue is empty
   * @return {boolean}
   */
  isEmpty() {
    return this._front - this._rear === 0;
  }

  /**
   * clears the queue and sets the top pointer variable back to 0
   */
  clear() {
    this._rear = 0;
    this._front = 0;
    this._data = [];
  }

  /**
   * displays the queue
   */
  print() {
    return this._data.join(' ');
  }

  /**
   * returns the set capacity of the stack
   * @return {number}
   */
  capacity() {
    return this._capacity;
  }

  /**
   * check wheteher an element exists in the queue
   * @param  {any} element the element to search
   * @return {boolean}
   */
  contains(element) {
    return this._data.includes(element);
  }
}

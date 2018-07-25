export default class Stack {
  /**
   * initializes the stack
   * @param {number} capacity the capacity of the stack
   */
  constructor(capacity = Infinity) {
    this._capacity = capacity;
    this._data = {};
    this._top = 0;
  }

  /**
   * adds a new element onto the stack
   * @param  {any} element
   * @return {number|string} the index of the added element or stack overflow message
   */
  push(element) {
    if (this._top < this._capacity) {
      this._data[this._top++] = element;

      return this._top;
    }

    return 'Max capacity already reached. Remove element before adding a new one.';
  }

  /**
   * does the reverse of the push() and then decrements the top pointer variable
   * @return {any} the element in the top position of the stack or an error message
   */
  pop() {
    if (this._top === 0) {
      return 'No element inside the stack. Add element before poping.';
    }

    const element = this._data[--this._top];
    delete this._data[this._top];

    if (this._top < 0) {
      this._top = 0;
    }

    return element;
  }

  /**
   * returns the most recent element added onto the stack
   * @return {any} returns the top element of the stack
   */
  peek() {
    return this._data[this._top - 1];
  }

  /**
   * returns the size/length of the stack
   * @return {number} the value of top
   */
  size() {
    return this._top;
  }

  /**
   * check whether the stack is empty
   * @return {boolean}
   */
  isEmpty() {
    return this._top === 0;
  }

  /**
   * clears the stack and sets the top pointer variable back to 0
   */
  clear() {
    this._data = {};
    this._top = 0;
  }

  /**
   * displays the stack
   */
  print() {
    return Object.values(this._data).join(' ');
  }
}

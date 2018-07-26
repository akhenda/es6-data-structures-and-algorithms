import Node from './node';

export default class DoublyLinkedList {
  /**
   * initializes the doubly linked list
   */
  constructor() {
    this.head = null;
  }

  /**
   * creates a new node from argument 'data' and assigns the resulting
   * node to the head property if no node is assigned to it
   * @param  {any} data
   * @return {void}
   */
  insertFirst(data) {
    this.insertAt(0, data);
  }

  /**
   * returns the number of nodes in the doubly linked list
   * @return {number} the size of the doubly linked list
   */
  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  /**
   * returns the first node of the doubly linked list
   * @return {object}
   */
  getFirst() {
    return this.head;
  }

  /**
   * returns the last node of the doubly linked list
   * @return {object}
   */
  getLast() {
    return this.getAt(this.size() - 1);
  }

  /**
   * empties the doubly linked list of any nodes
   * @return {void}
   */
  clear() {
    this.head = null;
  }

  /**
   * removes only the first node of the doubly linked list. the list's head
   * should now be the second element
   * @return {void}
   */
  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
  }

  /**
   * removes the last node of the list
   * @return {void}
   */
  removeLast() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let node = this.head.next;
    while (node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
  }

  /**
   * inserts a new node with provided data at the end of the chain
   * @param  {any} data
   * @return {void}
   */
  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // we have some existing nodes in our doubly linked list
      last.next = new Node(data, null, last);
    } else {
      this.head = new Node(data);
    }
  }

  /**
   * returns the node at the provided index
   * @param  {number} index the index of the node to get
   * @return {object}
   */
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) return node;

      counter++;
      node = node.next;
    }

    return null;
  }

  /**
   * removes the node at the provided index
   * @param  {number} index the index of the node to delete
   * @return {void}
   */
  removeAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) return;
    previous.next = previous.next.next;
    if (previous.next) previous.next.prev = previous;
  }

  /**
   * create and insert a new node at the provided index
   * @param  {number} index the index of the node to delete
   * @param  {any} data  the data to be inserted into the doubly linked list at the give index
   * @return {void}
   */
  insertAt(index, data) {
    if (index === 0) {
      this.head = new Node(data, this.head);
      if (this.head.next) this.head.next.prev = this.head;
      return;
    }

    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  /**
   * print the contents of the doubly linked list
   * @return {string} string representation of the list
   */
  print() {
    let string = '';
    let node = this.head;
    while (node) {
      string += `${node.data} `;
      node = node.next;
    }

    return string.trim();
  }

  /**
   * calls the provided function with every node in the list
   * @param  {Function} fn
   * @return {void}
   */
  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  /**
   * doubly linked list should be compatible as the subject of a 'for...of' loop
   * @return {void}
   */
  * [Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

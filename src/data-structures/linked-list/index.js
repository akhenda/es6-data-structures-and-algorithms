import Node from './node';

export default class LinkedList {
  /**
   * initializes the linked list
   */
  constructor() {
    this.head = null;
  }

  /**
   * create a new node from argument 'data' and assigns the resulting
   * node to the head property if no node is assigned to it
   * @param  {any} data
   * @return {void}
   */
  insertFirst(data) {
    // this.head = new Node(data, this.head);

    // alternatively, we can do the following
    this.insertAt(0, data);
  }

  /**
   * returns the number of nodes in the linked list
   * @return {number} the size of the linked list
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
   * returns the first node of the linked list
   * @return {object}
   */
  getFirst() {
    // return this.head;

    // this could also be implemented as follows:
    return this.getAt(0);
  }

  /**
   * returns the last node of the linked list
   * @return {object}
   */
  getLast() {
    // if (!this.head) return null;
    //
    // let node = this.head;
    // while (node) {
    //   if (!node.next) return node;
    //   node = node.next;
    // }

    // alternatively, we can do the following too
    return this.getAt(this.size() - 1);
  }

  /**
   * empties the linked list of any nodes
   * @return {void}
   */
  clear() {
    this.head = null;
  }

  /**
   * removes only the first node of the linked list. the list's head
   * should now be the second element
   * @return {void}
   */
  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
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

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  /**
   * inserts a new node with provided data at the end of the chain
   * @param  {any} data
   * @return {void}
   */
  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // we have some existing nodes in our linked list
      last.next = new Node(data);
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
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) return;
    previous.next = previous.next.next;
  }

  /**
   * create and insert a new node at the provided index
   * @param  {number} index the index of the node to delete
   * @param  {any} data  the data to be inserted into the linked list at the give index
   * @return {void}
   */
  insertAt(index, data) {
    if (index === 0) {
      this.head = new Node(data, this.head);
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
   * linked list should be compatible as the subject of a 'for...of' loop
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

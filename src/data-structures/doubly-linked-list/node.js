export default class Node {
  /**
   * initializes the node
   */
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

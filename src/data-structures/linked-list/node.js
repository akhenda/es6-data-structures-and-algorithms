export default class Node {
  /**
   * initializes the node
   * @param {any} data the value of the node
   */
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

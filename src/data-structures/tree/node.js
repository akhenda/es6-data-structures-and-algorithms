export default class Node {
  /**
   * initialize the Node
   * @param {number|string} data
   */
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

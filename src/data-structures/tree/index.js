import Node from './node';

export default class Tree {
  /**
   * initialize the Tree
   */
  constructor() {
    this.root = null;
  }

  /**
   * adds a Node to the Tree
   * @param {string|number} data
   * @param {string|number} toNodeData
   */
  addNode(data, toNodeData) {
    const node = new Node(data);
    const parent = toNodeData ? this.findBFS(toNodeData) : null;

    if (!parent && !this.root) {
      this.root = node;
    } else if (!parent && this.root) {
      return 'Root node is already assigned';
    } else {
      parent.children.push(node);
    }
  }

  /**
   * remove a Node from the Tree
   * @param  {number|string} data
   * @return {void}
   */
  remove(data) {
    if (this.root.data === data) this.root = null;

    const queue = [this.root];

    while (queue.length && this.root) {
      const node = queue.shift();

      node.children.forEach((childNode, i) => {
        if (childNode.data === data) {
          node.children.splice(i, 1);
        } else {
          queue.push(childNode);
        }
      });
    }
  }

  /**
   * check whether the tree contains the given data
   * @param  {number|string} data
   * @return {Boolean}
   */
  contains(data) {
    return this.root ? !!this.findBFS(data) : false;
  }

  /**
   * find data in the tree using BFS
   * @param  {number|string} data
   * @return {Node}
   */
  findBFS(data) {
    const queue = [this.root];

    while (queue.length && this.root) {
      const node = queue.shift();

      if (node.data === data) return node;

      node.children.forEach(childNode => (queue.push(childNode)));
    }

    return null;
  }

  /**
   * prints a representation of the tree on a single line
   * @return {string} tree representation
   */
  print() {
    if (!this.root) return 'No root node found';

    let string = '';
    const newline = new Node('|');
    const queue = [this.root, newline];

    while (queue.length) {
      const node = queue.shift();

      string += `${node.data.toString()} `;

      if (node === newline && queue.length) queue.push(newline);

      node.children.forEach(childNode => (queue.push(childNode)));
    }

    console.log(string.slice(0, -2).trim());
    return string.slice(0, -2).trim();
  }

  /**
   * prints a representation of the tree level by level
   * on multiple lines
   * @return {string} tree representation
   */
  printByLevel() {
    if (!this.root) return 'No root node found';

    let string = '';
    const newline = new Node('\n');
    const queue = [this.root, newline];

    while (queue.length) {
      const node = queue.shift();

      string += `${node.data.toString()}${(node.data !== '\n' ? ' ' : '')}`;

      if (node === newline && queue.length) queue.push(newline);

      node.children.forEach(childNode => (queue.push(childNode)));
    }

    console.log(string.trim());
    return string.trim();
  }
}

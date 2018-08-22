import Node from './node';

export default class BinarySearchTree {
  /**
   * initialize the BinarySearchTree
   */
  constructor() {
    this.root = null;
  }

  /**
   * adds a Node to the BinarySearchTree
   * @param {string|number} data
   */
  addNode(data) {
    const node = new Node(data);

    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;

      while (current) {
        if (node.data < current.data) {
          if (!current.left) {
            current.left = node;
            break;
          }

          current = current.left;
        } else if (node.data > current.data) {
          if (!current.right) {
            current.right = node;
            break;
          }

          current = current.right;
        } else {
          break;
        }
      }
    }
  }

  /**
   * remove a Node from the BinarySearchTree
   * @param  {number|string} data
   * @return {void}
   */
  remove(data) {
    const that = this;
    const removeNode = (node, nData) => {
      if (!node) return null;

      if (nData === node.data) {
        if (!node.left && !node.right) return null;
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        // 2 children
        const temp = that.getMin(node.right);
        node.data = temp;
        node.right = removeNode(node.right, temp);
      } else if (nData < node.data) {
        node.left = removeNode(node.left, nData);
      } else {
        node.right = removeNode(node.right, nData);
      }

      return node;
    };

    this.root = removeNode(this.root, data);
  }

  /**
   * check whether the tree contains the given data
   * @param  {number|string} data
   * @return {Boolean}
   */
  contains(data) {
    let current = this.root;

    while (current) {
      if (data === current.data) return true;

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
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
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
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
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    console.log(string.trim());
    return string.trim();
  }

  /**
   * get the minimum node
   * @param  {Node} node node to start with
   * @return {string|number}
   */
  getMin(node) {
    if (!node) node = this.root;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  /**
   * get the maximum node
   * @param  {Node} node node to start with
   * @return {string|number}
   */
  getMax(node) {
    if (!node) node = this.root;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

  /**
   * private helper method for getHeight method
   * @param  {Node} node    the starting node
   * @return {number}
   */
  _getHeight(node) {
    if (!node) return -1;

    const left = this._getHeight(node.left);
    const right = this._getHeight(node.right);

    return Math.max(left, right) + 1;
  }

  /**
   * get the height of tree from the given node
   * @param  {Node} node    the starting node
   * @return {number}
   */
  getHeight(node) {
    if (!node) node = this.root;

    return this._getHeight(node);
  }

  /**
   * private helper method for isBalanced method
   * @param  {Node} node    the starting node
   * @return {Boolean}
   */
  _isBalanced(node) {
    if (!node) return true;

    const heigthLeft = this._getHeight(node.left);
    const heigthRight = this._getHeight(node.right);
    const diff = Math.abs(heigthLeft - heigthRight);

    if (diff > 1) return false;

    return this._isBalanced(node.left) && this._isBalanced(node.right);
  }

  /**
   * checks whether the tree is balanced or not
   * @param  {Node} node    the starting node
   * @return {Boolean}
   */
  isBalanced(node) {
    if (!node) node = this.root;

    return this._isBalanced(node);
  }

  /**
   * private helper method for isBalancedOptimized method
   * @param  {Node} node    the starting node
   * @return {number}
   */
  _checkHeight(node) {
    if (!node) return 0;

    const left = this._checkHeight(node.left);

    if (left === -1) return -1;

    const right = this._checkHeight(node.right);

    if (right === -1) return -1;

    const diff = Math.abs(left - right);

    if (diff > 1) return -1;

    return Math.max(left, right) + 1;
  }

  /**
   * checks whether the tree is balanced and optimized
   * @param  {Node} node    the starting node
   * @return {Boolean}
   */
  isBalancedOptimized(node) {
    if (!node) node = this.root;
    if (this._checkHeight(node) === -1) return false;

    return true;
  }
}

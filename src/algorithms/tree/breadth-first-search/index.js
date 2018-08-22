import Queue from 'src/data-structures/queue';

/**
 * tree breadth first search implementation
 * @param  {Tree}   tree
 * @param  {Function} cb
 * @return {string}       
 */
const breadthFirstSearch = (tree, cb) => {
  let result = '';
  const queue = new Queue();

  queue.enqueue(tree.root);

  while (queue.size()) {
    const node = queue.dequeue();

    if (cb) result += `${cb(node)} `;

    for (let i = 0; i < node.children.length; i++) {
      queue.enqueue(node.children[i]);
    }
  }

  return result.trim();
};

export default breadthFirstSearch;

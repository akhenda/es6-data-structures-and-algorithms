/**
 * dfs pre-order traversal utility function
 * @param  {Node}   node
 * @param  {string}   result
 * @param  {Function} fn    
 * @return {void}
 */
const preOrderTraversal = (node, result, fn) => {
  if (node) {
    if (fn) result += `${fn(node)} `;

    node.children.forEach((child) => {
      result = preOrderTraversal(child, result, fn);
    });
  }

  return result;
};

/**
 * dfs post-order traversal utility function
 * @param  {Node}   node
 * @param  {string}   result
 * @param  {Function} fn
 * @return {void}
 */
const postOrderTraversal = (node, result, fn) => {
  if (node) {
    node.children.forEach((child) => {
      result = postOrderTraversal(child, result, fn);
    });

    if (fn) result += `${fn(node)} `;
  }
};

/**
 * tree depth first search implementation
 * @param  {Tree}   tree
 * @param  {Function} cb
 * @return {string}
 */
const depthFirstSearch = (tree, cb) => {
  const result = '';
  const current = tree.root;

  return preOrderTraversal(current, result, cb).trim();
};

export default depthFirstSearch;

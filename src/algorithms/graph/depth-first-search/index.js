/**
 * dfs recursive traversal utility function
 * @param  {Graph}   graph
 * @param  {number}   vertex
 * @param  {array}   visited
 * @param  {string}   result
 * @param  {Function} fn
 * @return {string}
 */
const traverse = (graph, vertex, visited, result, fn) => {
  visited[vertex] = true;

  if (graph.edges[vertex] !== undefined) result += `${fn(vertex)} -> `;

  graph.edges[vertex].forEach((item) => {
    if (!visited[item]) result = traverse(graph, item, visited, result, fn);
  });

  return result;
};

/**
 * graph depth first search implementation
 * @param  {Graph}   graph
 * @param  {number}   startVertex
 * @param  {Function} cb
 * @return {string}
 */
const depthFirstSearch = (graph, startVertex, cb) => {
  if (graph.vertices.indexOf(startVertex) === -1) return 'Vertex not found';

  const result = '';
  const visited = [];
  return traverse(graph, startVertex, visited, result, cb).slice(0, -3).trim();
};

export default depthFirstSearch;

import Queue from 'src/data-structures/queue';

/**
 * graph breadth first search implementation
 * @param  {Graph}   graph
 * @param  {number}   startVertex
 * @param  {Function} cb         
 * @return {string}
 */
const breadthFirstSearch = (graph, startVertex, cb) => {
  if (graph.vertices.indexOf(startVertex) === -1) return 'Vertex not found';

  let result = '';
  const queue = new Queue();
  const visited = [];

  queue.enqueue(startVertex);
  visited[startVertex] = true;

  while (queue.size()) {
    startVertex = queue.dequeue();

    result += `${cb(startVertex)} -> `;

    for (let i = 0; i < graph.edges[startVertex].length; i++) {
      if (!visited[graph.edges[startVertex][i]]) {
        visited[graph.edges[startVertex][i]] = true;
        queue.enqueue(graph.edges[startVertex][i]);
      }
    }
  }

  return result.slice(0, -4);
};

export default breadthFirstSearch;

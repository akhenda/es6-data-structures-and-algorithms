import chai from 'chai';
import Graph from 'src/data-structures/graph';
import breadthFirstSearch from 'src/algorithms/graph/breadth-first-search';


const { expect } = chai;

describe('Graph Breadth First Search', () => {
  it('traverses the graph using BFS', () => {
    const graph = new Graph();

    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addVertex(5);
    graph.addVertex(6);

    graph.addEdge(1, 2);
    graph.addEdge(1, 5);
    graph.addEdge(2, 3);
    graph.addEdge(2, 5);
    graph.addEdge(3, 4);
    graph.addEdge(4, 5);
    graph.addEdge(4, 6);

    const callbackFn = (vertex) => {
      console.log(vertex);
      return vertex;
    };

    expect(breadthFirstSearch(graph, 1, callbackFn)).to.equal('1 -> 2 -> 5 -> 3 -> 4 -> 6');
    expect(breadthFirstSearch(graph, 0, callbackFn)).to.equal('Vertex not found');
  });
});

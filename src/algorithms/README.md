## Algorithms

This is a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.

The following are the algorithms covered here:

* **Searches**
  * [Linear Search](src/algorithms/search/linear-search)
  * [Binary Search](src/algorithms/search/binary-search)
  * [Jump/Block Search](src/algorithms/search/jump-search)
  * [Interpolation Search](src/algorithms/search/interpolation-search)
* **Sorting**
  * [Bubble Sort](src/algorithms/sorting/bubble-sort)
  * [Selection Sort](src/algorithms/sorting/selection-sort)
  * [Insertion Sort](src/algorithms/sorting/insertion-sort)
  * [Merge Sort](src/algorithms/sorting/merge-sort)
  * [Heap Sort](src/algorithms/sorting/heap-sort)
  * [Quicksort](src/algorithms/sorting/quick-sort)
  * [Shellsort](src/algorithms/sorting/shell-sort)
  * [Counting Sort](src/algorithms/sorting/counting-sort)
  * [Radix Sort](src/algorithms/sorting/radix-sort)
* **Graphs**
  * [Depth-First Search (DFS)](src/algorithms/graph/depth-first-search)
  * [Breadth-First Search (BFS)](src/algorithms/graph/breadth-first-search)
  * [Kruskal’s Algorithm](src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * [Dijkstra Algorithm](src/algorithms/graph/dijkstra) - finding shortest paths to all graph vertices from single vertex
  * [Prim’s Algorithm](src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * [Travelling Salesman Problem](src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
* **Others**
  * [Tower of Hanoi](src/algorithms/uncategorized/hanoi-tower)

### Array Sorting Algorithms Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: |
| **Bubble sort**       | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |
| **Insertion sort**    | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |
| **Selection sort**    | n<sup>2</sup>   | n<sup>2</sup>       | n<sup>2</sup>       | 1         | No        |
| **Heap sort**         | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | 1         | No        |
| **Merge sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | Yes       |
| **Quick sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | No        |
| **Shell sort**        | n&nbsp;log(n)   | depends on gap sequence   | n&nbsp;(log(n))<sup>2</sup>  | 1         | No         |
| **Counting sort**     | n + r           | n + r               | n + r               | n + r     | Yes       |
| **Radix sort**        | n * k           | n * k               | n * k               | n + k     | Yes       |

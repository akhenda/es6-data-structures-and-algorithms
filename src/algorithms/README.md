## Algorithms

This is a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.

The following are the algorithms covered here:

* **Searches**
  * [Linear Search](search/linear-search)
  * [Binary Search](search/binary-search)
  * [Jump/Block Search](search/jump-search)
  * [Interpolation Search](search/interpolation-search)
* **Sorting**
  * [Bubble Sort](sorting/bubble-sort)
  * [Selection Sort](sorting/selection-sort)
  * [Insertion Sort](sorting/insertion-sort)
  * [Merge Sort](sorting/merge-sort)
  * [Heap Sort](sorting/heap-sort)
  * [Quicksort](sorting/quick-sort)
  * [Shellsort](sorting/shell-sort)
  * [Counting Sort](sorting/counting-sort)
  * [Radix Sort](sorting/radix-sort)
* **Graphs**
  * [Depth-First Search (DFS)](graph/depth-first-search)
  * [Breadth-First Search (BFS)](graph/breadth-first-search)
  * [Kruskal’s Algorithm](graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * [Dijkstra Algorithm](graph/dijkstra) - finding shortest paths to all graph vertices from single vertex
  * [Prim’s Algorithm](graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
  * [Travelling Salesman Problem](graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
* **Others**
  * [Tower of Hanoi](others/hanoi-tower)

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

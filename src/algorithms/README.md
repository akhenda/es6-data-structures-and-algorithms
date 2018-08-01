## Algorithms

This is a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.

The following are the algorithms covered here:

### Algorithms by Topic

-   **Searching**
    -   [Linear Search](src/algorithms/searching/linear-search)
    -   [Binary Search](src/algorithms/searching/binary-search)
    -   [Jump/Block Search](src/algorithms/searching/jump-search)
    -   [Interpolation Search](src/algorithms/searching/interpolation-search)
-   **Sorting**
    -   [Shell Sort](src/algorithms/sorting/shell-sort)
    -   [Heap Sort](src/algorithms/sorting/heap-sort)
    -   [Quick Sort](src/algorithms/sorting/quick-sort)
    -   [Radix Sort](src/algorithms/sorting/radix-sort)
    -   [Merge Sort](src/algorithms/sorting/merge-sort)
    -   [Bubble Sort](src/algorithms/sorting/bubble-sort)
    -   [Insertion Sort](src/algorithms/sorting/insertion-sort)
    -   [Counting Sort](src/algorithms/sorting/counting-sort)
    -   [Selection Sort](src/algorithms/sorting/selection-sort)
-   **Sets**
    -   [Longest Increasing Subsequence](src/algorithms/set/longest-increasing-subsequence)
    -   [Longest Common Subsequence](src/algorithms/set/longest-common-subsequence) (LCS)
    -   [Shortest Common Supersequence](src/algorithms/set/shortest-common-supersequence) (SCS)
    -   [Permutations](src/algorithms/set/permutations) (with and without repetitions)
    -   [Combinations](src/algorithms/set/combinations) (with and without repetitions)
    -   [Combination Sum](src/algorithms/set/combination-sum) - find all combinations that form specific sum
    -   [Maximum Subarray](src/algorithms/set/maximum-subarray) - "Brute Force" and "Dynamic Programming" (Kadane's) versions
-   **Math**
    -   [Factorial](src/algorithms/math/factorial)
    -   [Fibonacci](src/algorithms/math/fibonacci)
    -   [Integer Partition](src/algorithms/math/integer-partition)
    -   [Pascal's Triangle](src/algorithms/math/pascals-triangle)
    -   [Least Common Multiple](src/algorithms/math/lcm) (LCM)
    -   [Primality Test](src/algorithms/math/prime-number) (trial division method)
    -   [Euclidean Algorithm](src/algorithms/math/euclidean-algorithm) - calculate the Greatest Common Divisor (GCD)
    -   [Sieve of Eratosthenes](src/algorithms/math/sieve-of-eratosthenes) - finding all prime numbers up to any given limit
    -   [Is Power of Two](src/algorithms/math/is-power-of-two) - check if the number is power of two (naive and bitwise algorithms)
-   **Trees**
    -   [Depth-First Search (DFS)](src/algorithms/tree/depth-first-search)
    -   [Breadth-First Search (BFS)](src/algorithms/tree/breadth-first-search)
-   **Graphs**
    -   [Depth-First Search (DFS)](src/algorithms/graph/depth-first-search)
    -   [Breadth-First Search (BFS)](src/algorithms/graph/breadth-first-search)
    -   [Dijkstra Algorithm](src/algorithms/graph/dijkstra-algorithm) - finding shortest paths to all graph vertices from single vertex
    -   [Prim’s Algorithm](src/algorithms/graph/prims-algorithm) - finding Minimum Spanning Tree (MST) for weighted undirected graph
    -   [Kruskal’s Algorithm](src/algorithms/graph/kruskals-algorithm) - finding Minimum Spanning Tree (MST) for weighted undirected graph
    -   [Travelling Salesman Problem](src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
-   **Others**
    -   [Tower of Hanoi](src/algorithms/others/tower-of-hanoi)

### Algorithms by Paradigm

An algorithmic paradigm is a generic method or approach which underlies the design of a class of algorithms. It is an abstraction higher than the notion of an algorithm, just as an algorithm is an abstraction higher than a computer program.

-   **Brute Force** - look at all the possibilities and selects the best solution
    -   [Linear Search](src/algorithms/searching/linear-search)
    -   [Maximum Subarray](src/algorithms/set/maximum-subarray)
    -   [Travelling Salesman Problem](src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
-   **Greedy** - choose the best option at the current time, without any consideration for the future
    -   [Prim’s Algorithm](src/algorithms/graph/prims-algorithm) - finding MST for weighted undirected graph
    -   [Dijkstra Algorithm](src/algorithms/graph/dijkstra-algorithm) - finding shortest path to all graph vertices
    -   [Kruskal’s Algorithm](src/algorithms/graph/kruskals-algorithm) - finding Minimum Spanning Tree (MST) for weighted undirected graph
-   **Divide and Conquer** - divide the problem into smaller parts and then solve those parts
    -   [Quicksort](src/algorithms/sorting/quick-sort)
    -   [Merge Sort](src/algorithms/sorting/merge-sort)
    -   [Binary Search](src/algorithms/searching/binary-search)
    -   [Tower of Hanoi](src/algorithms/others/tower-of-hanoi)
    -   [Pascal's Triangle](src/algorithms/math/pascals-triangle)
    -   [Euclidean Algorithm](src/algorithms/math/euclidean-algorithm) - GCD
    -   [Tree Depth-First Search](src/algorithms/tree/depth-first-search) (DFS)
    -   [Graph Depth-First Search](src/algorithms/graph/depth-first-search) (DFS)
    -   [Permutations](src/algorithms/set/permutations) (with and without repetitions)
    -   [Combinations](src/algorithms/set/combinations) (with and without repetitions)
-   **Dynamic Programming** - build up a solution using previously found sub-solutions
    -   [Fibonacci](src/algorithms/math/fibonacci)
    -   [Integer Partition](src/algorithms/math/integer-partition)
    -   [Maximum Subarray](src/algorithms/set/maximum-subarray)
    -   [Longest Increasing Subsequence](src/algorithms/set/longest-increasing-subsequence)
    -   [Shortest Common Supersequence](src/algorithms/set/shortest-common-supersequence)
    -   [Longest Common Subsequence](src/algorithms/set/longest-common-subsequence) (LCS)
-   **Backtracking** - similarly to brute force, try to generate all possible solutions, but each time you generate next solution you test if it satisfies all conditions, and only then continue generating subsequent solutions. Otherwise, backtrack, and go on a different path of finding a solution. Normally the DFS traversal of state-space is being used.
    -   [Combination Sum](src/algorithms/set/combination-sum) - find all combinations that form specific sum


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

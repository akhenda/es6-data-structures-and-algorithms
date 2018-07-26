# EcmaScript 6 Algorithms and Data Structures

[![Build Status](https://travis-ci.org/akhenda/es6-data-structures-and-algorithms.svg?branch=develop)](https://travis-ci.org/akhenda/es6-data-structures-and-algorithms)
[![codecov](https://codecov.io/gh/akhenda/es6-data-structures-and-algorithms/branch/develop/graph/badge.svg)](https://codecov.io/gh/akhenda/es6-data-structures-and-algorithms)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f8d6910025c5402f8d9a232155a3a420)](https://www.codacy.com/app/joseph-akhenda/es6-data-structures-and-algorithms?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=akhenda/es6-data-structures-and-algorithms&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/f8d6910025c5402f8d9a232155a3a420)](https://www.codacy.com/app/joseph-akhenda/es6-data-structures-and-algorithms?utm_source=github.com&utm_medium=referral&utm_content=akhenda/es6-data-structures-and-algorithms&utm_campaign=Badge_Coverage)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/akhenda/es6-data-structures-and-algorithms/blob/develop/LICENSE) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

This repository contains some popular Data Structures and Algorithms done in JavaScript ES6.

## Data Structures

According to Wikipedia:

> In computer science, a data structure is a particular way of storing and organizing data in a computer so that it can be used efficiently.

The following terms are the foundation terms of a data structure.

* **Interface** - This represents the set of operation supported by a data structure
* **Implementation** - This provides the definition of algorithms used in the operations of the data structure i.e. it provides the internal representation of the data structure

### Characteristics of a Data Structure
1. **Correctness** - a data structure should implement its interface correctly
2. **Time Complexity** - execution time of operations of a data structure should be as small as possible
3. **Space Complexity** - memory usage of a data structure operation should be as little as possible

### Data Structure Operations Complexity

| Data Structure          | Access    | Search    | Insertion | Deletion  |
| ----------------------- | :-------: | :-------: | :-------: | :-------: |
| **Array**               | 1         | n         | n         | n         |
| **Stack**               | n         | n         | 1         | 1         |
| **Queue**               | n         | n         | 1         | 1         |
| **Linked List**         | n         | n         | 1         | 1         |
| **Hash Table**          | -         | n         | n         | n         |
| **Binary Search Tree**  | n         | n         | n         | n         |
| **B-Tree**              | log(n)    | log(n)    | log(n)    | log(n)    |
| **AVL Tree**            | log(n)    | log(n)    | log(n)    | log(n)    |


![](assets/ds-operations-big-o.png)

The following are the data structures covered here:

* [Array](src/data-structures/array)
* [Linked List](src/data-structures/linked-list)
* [Doubly Linked List](src/data-structures/doubly-linked-list)
* [Stack](src/data-structures/stack)
* [Queue](src/data-structures/queue)
* [Priority Queue](src/data-structures/priority-queue)
* [Set](src/data-structures/set)
* [Hash Table](src/data-structures/hash-table)
* [Graph](src/data-structures/graph)
* [Spanning Tree](src/data-structures/spanning-tree)
* [Tree](src/data-structures/tree)
    * [Binary Search Tree](src/data-structures/tree/binary-search-tree)
    * [AVL Tree](src/data-structures/tree/avl-tree)
* [Heap](src/data-structures/heap)
* [Trie](src/data-structures/trie)

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


## Big-O Notation

This is a theoretical measure of the execution of an algorithm, usually the time or memory needed, given the problem size **n**, which is usually the number of items. Informally, saying some equation `f(n) = O(g(n))` means it is less than some constant multiple of `g(n)`.

It is used in Computer Science to describe the performance or complexity of an algorithm. Big-O specifically describes the worst-case scenario, and can be used to describe the execution time required or the space used (e.g. in memory or on disk) by an algorithm.

Below is the list of some of the most used Big O notations and their performance comparisons against different sizes of the input data.

| Big O Notation | Computations for 10 elements | Computations for 100 elements | Computations for 1000 elements  |
| -------------- | ---------------------------- | ----------------------------- | ------------------------------- |
| **O(1)**       | 1                            | 1                             | 1                               |
| **O(log N)**   | 3                            | 6                             | 9                               |
| **O(N)**       | 10                           | 100                           | 1000                            |
| **O(N log N)** | 30                           | 600                           | 9000                            |
| **O(N^2)**     | 100                          | 10000                         | 1000000                         |
| **O(2^N)**     | 1024                         | 1.26e+29                      | 1.07e+301                       |
| **O(N!)**      | 3628800                      | 9.3e+157                      | 4.02e+2567                      |

![](assets/big-o-comparison.png)

## Installation

Clone this repo:

```
$ git clone https://github.com/akhenda/es6-data-structures-and-algorithms.git
```

Navigate to the `es6-data-structures-and-algorithms` directory:

```
$ cd es6-data-structures-and-algorithms
```

Install the required dependencies:

```
$ npm install
```

## Testing

To run both tests and linting, run:

```
npm run validate
```

To run the tests alone:

```
npm run test
```

To run ESLint:

```
npm run lint
```

## Usage

...


## Resources

[Data Structures and Algorithms Playlist on Youtube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

## License

### The MIT License (MIT)

Copyright (c) 2016 [Joseph Akhenda](https://github.com/akhenda).

> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

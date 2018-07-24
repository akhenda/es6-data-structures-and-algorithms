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


![](../../assets/ds-operations-big-o.png)

The following are the data structures covered here:

* [Array](array)
* [Linked List](linked-list)
* [Doubly Linked List](doubly-linked-list)
* [Circular Linked List](circular-linked-list)
* [Stack](stack)
* [Queue](queue)
* [Priority Queue](priority-queue)
* [Hash Table](hash-table)
* [Graph](graph)
* [Spanning Tree](spanning-tree)
* [Tree](tree)
    * [Binary Search Tree](tree/binary-search-tree)
    * [AVL Tree](tree/avl-tree)
* [Heap](heap)
* [Trie](trie)

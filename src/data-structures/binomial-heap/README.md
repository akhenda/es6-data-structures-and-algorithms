## Binomial Heap

According to Wikipedia:

> In computer science, a **binomial heap** is a heap similar to a binary heap but also supports quick merging of two heaps. This is achieved by using a special tree structure. It is important as an implementation of the mergeable heap abstract data type (also called meldable heap), which is a priority queue supporting merge operation. Binomial heaps were invented in 1978 by J. Vuillemin

A **binomial heap** is a specific implementation of the heap data structure. Binomial heaps are collections of binomial trees that are linked together where each tree is an ordered heap. In a binomial heap, there are either one or zero binomial trees of order *k*, where *k* helps describe the number of elements a given tree can have: *2<sup>k</sup>*. Binomial heaps are similar to binary heaps but binomial heaps have a more specific structure and allow for efficient merging of heaps. Heaps are often used to implement priority queues which are in turn used in implementations of many types of algorithms such as shortest-path finding algorithms—these fast operations help make these algorithms more efficient.

Shown below are Binomial trees of order 0 to 3: Each tree has a root node with subtrees of all lower ordered binomial trees, which have been highlighted. For example, the order 3 binomial tree is connected to an order 2, 1, and 0 (highlighted as blue, green and red respectively) binomial tree.

![Binomial Trees](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Binomial_Trees.svg/1000px-Binomial_Trees.svg.png)

#### Binomial Trees
Binomial heaps are made up of **binomial trees**.

A binomial tree *B<sub>k</sub>* is made up of two binomial trees *B<sub>k-1</sub>* that are linked together such that the root of one is the leftmost child of the root of the other.

Binomial trees are defined recursively as follows:

-   A binomial tree of order 0 is a single node.
-   A binomial tree of order k has a root node whose children are roots of binomial trees of orders k−1, k−2, ..., 2, 1, 0 (in this order).

The image below is a collection of binomial trees with orders 0, 1, 2, and 3 (from left to right). The order represents how many children the root node is able to have. For example, there are three children coming out of the order 3 node and no children coming out of the order 0 node.

![Binomial Trees](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Binomial_Trees.svg/1000px-Binomial_Trees.svg.png)

##### Properties of Binomial Trees

An order *k* binomial tree *B<sub>k</sub>* has the following properties:

-   The height of the tree is *k*. For example, in the image above, if the tree only contained the *0<sup>th</sup>* order node, the height would be *0*. Since the entire tree is order *3*, the height is *3*.
-   There are a total of *2<sup>k</sup>* nodes in the tree.
-   The tree has <img src="http://latex2png.com/output//latex_c632a10ad5e8cd45e9165aa78dd3329f.png?invert_in_darkmode&sanitize=true" align=middle height=40pt/> nodes at depth *i*
-   The degree of the root is *k*
-   Deleting the root yields *k* binomial trees: *B<sub>k</sub>-1,...,B<sub>0</sub>*

#### Binomial Heaps
Binomial heaps can be implemented by using doubly linked lists to store the root nodes. Each node stores information about the parent pointer, left and right sibling pointers, left most child pointer, the number of children it has, and its key. Since the list is doubly linked, the parent nodes have pointers to the children and the children have pointers to the parent. Using the doubly linked list allows for constant time inserts and deletes from the root list, constant time to merge for two root lists together, and more.

The structure of a binomial heap is similar to the binary number system. For example, a binomial heap containing  elements will contain binomial trees of order *1, 2, 3, 4, 5* and *6*  since it takes six digits to write the decimal number 63 in binary. 63 in binary is 111111.

##### Properties of Binomial Heaps

For a binomial heap with **n** nodes,

-   the node containing the minimum element is a root of either <img src="http://latex2png.com/output//latex_67e87967cddb456480f740d657bebf18.png?invert_in_darkmode&sanitize=true" align=middle height=16pt/> or <img src="http://latex2png.com/output//latex_dfb6e643bb5cd8e2b7e04fd5a7a7eb0a.png?invert_in_darkmode&sanitize=true" align=middle height=16pt/>
-   in total, the heap has <img src="http://latex2png.com/output//latex_a1cfb57a704bfea5215c83e5d9713193.png?invert_in_darkmode&sanitize=true" align=middle height=16pt/> binomial trees;
-   the height of the heap is <img src="http://latex2png.com/output//latex_7cdd96dbdc5f0834dd94996859ed10c9.png?invert_in_darkmode&sanitize=true" align=middle height=16pt/>

A binomial heap must satisfy the **binomial heap property**. The property is as follows:
```
Binomial Heap Property

- Every binomial tree in a binomial min heap obeys the min-heap property (that the key of a node
  is greater than or equal to the key of its parent) and every binomial tree in a binomial
  max heap obeys the max-heap property (that the key of a node is less than or equal to the
  key of its parent).

- There can only be either one or zero binomial trees for each order. In other words, for
  every k, there is at most one binomial tree of order k in the heap.
```

The first property ensures that the min/max-heap properties hold throughout the heap.

The second property implies that a binomial heap with *n* nodes consists of at most *log n + 1* binomial trees, which is a property of binomial heaps. In order to maintain this property, the heaps may need to be consolidated after an operation. For example, if an operation results in two heaps of order two, steps must be taken to correct this so that the binomial heap property holds.

![Binomial Heap](https://ds055uzetaobb.cloudfront.net/image_optimizer/139de103f74b1469fdf0a062c027bf5b067fc936.png)

The diagram above is an example of a binomial heap containing 13 nodes with distinct keys. The heap consists of three binomial trees with orders 0, 2, and 3.

The children of a node are linked together in a doubly linked list. Each child has a pointer to its parent, and the parent has a pointer to one of the children. Here is what the above binomial heap looks like as a linked list of the roots:

![Binomial Heap](https://ds055uzetaobb.cloudfront.net/image_optimizer/a02da645b5affc7843bcf16a395df7328ee0bd67.png)

### Complexity

#### Average

| Operation    | Complexity |
| :----------: | :--------: |
| Insertion    | O(1)       |
| Deletion     | O(log n)   |
| Find Min     | O(1)       |
| Extract Min  | O(log n)   |
| Decrease Key | O(log n)   |
| Merge        | O(log n)   |


### Basic Operations

Here is how binomial heaps implement the basic functionalities of heaps and the time complexity of each operation. These operations are decribed in terms of min binomial heaps, but could easily be adapted to max binomial heaps.

#### Decrease key
Decrease key reduces the specified node’s key and then bubbles it up through its ancestors until the tree meets the conditions of a heap.

<img src="/assets/decrease-key.gif?invert_in_darkmode&sanitize=true" align=middle width=250pt/>

#### Delete
Delete is performed by calling decrease key to reducing the node to negative infinity which pulls the node to the top of the tree.

<img src="/assets/delete-1.gif?invert_in_darkmode&sanitize=true" align=middle width=450pt/>

The tree is then detached from the rest of the heap and the node removed. The fragments of the old tree are reversed and linked together to form a new heap.

<img src="/assets/delete-2.gif?invert_in_darkmode&sanitize=true" align=middle width=450pt/>

The two heaps can then be combined using the union operation.

#### Extract minimum
Extract minimum iterates through the roots of each binomial tree in the heap to find the smallest node which is removed. The tree fragments are then reversed to form another heap.

<img src="/assets/extract-minimum.gif?invert_in_darkmode&sanitize=true" align=middle width=300pt/>

The two heaps can then be combined using the union operation.

#### Find minimum
Find minimum iterates through the roots of each binomial tree in the heap.

![Binomial Heap - Find Minimum](/assets/find-minimum.svg)

#### Insert
Insert creates a new heap with the inserted element which are then combined using the union operation.

![Binomial Heap - Insert](/assets/insert.svg)

#### Union
The union operation merges the two heaps together by continually linking trees of the same order until no two trees of the same order exist.

<img src="/assets/union.gif?invert_in_darkmode&sanitize=true" align=middle width=250pt/>

## References

-   [Wikipedia](https://en.wikipedia.org/wiki/Binomial_heap)
-   [Brilliant](https://brilliant.org/wiki/binomial-heap/)
-   [Growing with the Web](https://www.growingwiththeweb.com/data-structures/binomial-heap/overview/)
-   [WisdomJobs](https://www.wisdomjobs.com/e-university/data-structures-tutorial-290/binomial-heap-7237.html)
-   [YouTube - GeeksForGeeks](https://www.youtube.com/watch?v=e_gh1aD4v-A)
-   [YouTube - Foundations of Data Science](https://www.youtube.com/watch?v=7UQd9SYUoNk)

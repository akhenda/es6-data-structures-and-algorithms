## Fibonacci Heap

According to Wikipedia:

> In computer science, a **Fibonacci heap** is a data structure for priority queue operations, consisting of a collection of heap-ordered trees. It has a better amortized running time than many other priority queue data structures including the binary heap and binomial heap. Michael L. Fredman and Robert E. Tarjan developed Fibonacci heaps in 1984 and published them in a scientific journal in 1987. They named Fibonacci heaps after the Fibonacci numbers, which are used in their running time analysis.
>
> For the Fibonacci heap, the find-minimum operation takes constant (*O(1)*) amortized time. The insert and decrease key operations also work in constant amortized time. Deleting an element (most often used in the special case of deleting the minimum element) works in *O(log n)* amortized time, where *n* is the size of the heap. This means that starting from an empty data structure, any sequence of a insert and decrease key operations and b delete operations would take *O(a + b log n)* worst case time, where n is the maximum heap size. In a binary or binomial heap such a sequence of operations would take *O((a + b) log n)* time. A Fibonacci heap is thus better than a binary or binomial heap when *b* is smaller than a by a non-constant factor. It is also possible to merge two Fibonacci heaps in constant amortized time, improving on the logarithmic merge time of a binomial heap, and improving on binary heaps which cannot handle merges efficiently.
>
> Using Fibonacci heaps for priority queues improves the asymptotic running time of important algorithms, such as Dijkstra's algorithm for computing the shortest path between two nodes in a graph, compared to the same algorithm using other slower priority queue data structures.


A **Fibonacci heap** is a specific implementation of the heap data structure that makes use of Fibonacci numbers. Fibonacci heaps are used to implement the priority queue element in Dijkstra’s algorithm, giving the algorithm a very efficient running time.

Fibonacci heaps have a faster amortized running time than other heap types. Fibonacci heaps are similar to binomial heaps but Fibonacci heaps have a less rigid structure. Binomial heaps merge heaps immediately but Fibonacci heaps wait to merge until the extract-min function is called. While Fibonacci heaps have very good theoretical complexities, in practice, other heap types such as pairing heaps are faster. This is because even in the simplest implementation, Fibonacci heaps require four pointers for each node, other heaps need two or three.

Below is an example of a Fibonacci heap. It has three trees of degrees 0, 1, and 3. Three vertices are marked (shown in blue). Therefore, the potential of the heap is 9 (3 trees + 2 × (3 marked-vertices)

![Fibonacci Heap](https://upload.wikimedia.org/wikipedia/commons/4/45/Fibonacci_heap.png)

The primary difference between the Fibonacci heap and the binomial heap is that it defers all ‘clean up’ jobs to a point where they are more convenient, guarenteeing **Θ(1)** for several operations. Due to the deferred clean up, the worst case time complexity of the delete and extract minimum operations is **O(n)**, however they are **O(log n)** amortised.

#### Structure of Fibonacci Heaps
As the name suggests, Fibonacci heaps use Fibonacci numbers in its structure.

The Fibonacci numbers are the terms of a sequence of integers in which each term is the sum of the two previous terms with

<img src="http://latex2png.com/output//latex_0a10a72c55a31561fa9adadfa8efb036.png?invert_in_darkmode&sanitize=true" height=20pt/>

The first few Fibonacci numbers are
```
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
```
Like **binomial heaps**, Fibonacci heaps use **doubly linked lists** to allow for  time for operations such as splicing off a part of a list, merging two lists, and finding the minimum (or maximum) value. Each node contains a pointer to its parent and any one of its children. The children are all linked together in a doubly linked list called the child list. Each child in the child list has pointers for its left sibling and its right sibling.

For each node, the linked list also maintains the number of children a node has, a pointer to the root containing the minimum key, and whether the node is marked. A node is marked to indicate that it has lost a single child and a node is unmarked if it loses no children. See the description of the `decrease-key` function in the next section for more details.

Here is an image showing the differences between a singly linked list and a doubly-linked list. The singly linked has only one pointer from each node, while the doubly linked has pointers going both to and from a node.

![Linked List](https://ds055uzetaobb.cloudfront.net/image_optimizer/7bf20800792ad4e33e910bca27bf50be2d5fe218.png)

Like the binomial heap, a Fibonacci heap is a collection of heap-ordered trees. They do not need to be binomial trees however, this is where the relaxation of some of the binomial heap’s properties comes in.

Each tree has an order just like the binomial heap that is based on the number of children. Nodes within a Fibonacci heap can be removed from their tree without restructuring them, so the order does not necessarily indicate the maximum height of the tree or number of nodes it contains.

Below are some examples of trees of order 0, 1 and 2 (the black nodes are 'marked')

![Trees](https://www.growingwiththeweb.com/images/data-structures/fibonacci-heap/structure.svg)

#### Links
The pointers between nodes in a Fibonacci heap are very similar to that of the binomial heap, only that each node in a Fibonacci heap contains a doubly linked list of all its children. This allows node removal and child list concatenation to both be performed in linear time.

![Links](https://www.growingwiththeweb.com/images/data-structures/fibonacci-heap/links.svg)

Note that the child node whose parent links to it is always the node with the smallest value among its siblings.

#### 'Marked' nodes
An important part of the Fibonacci Heap is how it marks nodes within the trees. The decrease key operation marks a node when its child is cut from a tree, this allows it to track some history about each node. Essentially the marking of nodes allows us to track whether:

-   The node has had no children cut (unmarked)
-   The node has had a single child cut (marked)
-   The node is about to have a second child cut (removing a child of a marked node)

When a second child is cut from its parent, the parent is moved to the root list. This ensures that the structure of the Fibonacci heap does not stray too far from that of the binomial heap, which is one of the properties that enables the data structure to achieve its amortised time bounds.


### Complexity

#### Average

| Operation    | Complexity |
| :----------  | :--------  |
| Insertion    | Θ(1)       |
| Find Min     | Θ(1)       |
| Delete Min   | O(log n)   |
| Decrease Key | Θ(1)       |
| Merge        | Θ(1)       |


### Basic Operations

#### Find minimum
A pointer to minimum node of the root list is always kept up to date.

![Fibonacci Heap - Find Minimum](https://www.growingwiththeweb.com/images/data-structures/fibonacci-heap/find-minimum.svg)

#### Insert
Insert creates a new tree containing only the new node which is being added to the heap. The total number of nodes in the tree is incremented and the pointer to the minimum value is updated if necessary.

![Fibonacci Heap - Insert](https://www.growingwiththeweb.com/images/data-structures/fibonacci-heap/insert.svg)

The insert operation of a fibonacci heap does not attempt to consolidate trees of equal order, opting instead to defer until a later time.

#### Union
Union concatenates the root lists of two Fibonacci heaps and sets the minimum node to which ever tree’s minimum node is smaller.

<img src="/assets/fib-heap-union.gif?invert_in_darkmode&sanitize=true" align=middle width=450pt/>

#### Decrease key
Decrease key lowers the key of a node. The node is then cut from the tree, joining the root list as its own tree. The parent of the node is then cut if it is marked, this continues for each anscestor until a parent that is not marked is encountered, which is then marked. The pointer to the minimum node is then updated if the node’s new value is less than the current minimum.

<img src="/assets/fib-heap-decrease-key.gif?invert_in_darkmode&sanitize=true" align=middle width=350pt/>

#### Extract minimum
Extract minimum is the most complex operation of a Fibonacci Heap as it’s where the actions that were deferred by the other operations occur. It starts by removing the minimum node from the root list and adding its children to the root list.

<img src="/assets/fib-heap-extract-minimum-1.gif?invert_in_darkmode&sanitize=true" align=middle width=350pt/>

If the minimum was the only node in the root list, the pointer to the minimum node is set to the smallest node in the root list and the operation is completed.

If not, the ‘consolidate’ operation is performed which merges all trees of the same order together until there are no two trees of the same order. The minimum is then set to the smallest node in the root list.

<img src="/assets/fib-heap-extract-minimum-2.gif?invert_in_darkmode&sanitize=true" align=middle width=350pt/>

#### Delete
Delete is performed by calling decrease key to reduce the node to negative infinity which pulls the node to the top of the tree. Extract minimum is then called on the node to remove it from the heap.

## References

-   [Wikipedia](https://en.wikipedia.org/wiki/Fibonacci_heap)
-   [Brilliant](https://brilliant.org/wiki/fibonacci-heap/)
-   [Growing with the Web](https://www.growingwiththeweb.com/data-structures/fibonacci-heap/overview/)
-   [WisdomJobs](https://www.wisdomjobs.com/e-university/data-structures-tutorial-290/fibonacci-heap-7238.html)
-   [YouTube - StudyKorner](https://www.youtube.com/watch?v=GUML34YFCZs)
-   [YouTube - Foundations of Data Science](https://www.youtube.com/watch?v=nZ0nFTvQez0)

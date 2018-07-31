## Tree

According to Wikipedia:

> In computer science, a tree is a widely used abstract data type (ADT)—or data structure implementing this ADT—that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes.
>
> A tree data structure can be defined recursively (locally) as a collection of nodes (starting at a root node), where each node is a data structure consisting of a value, together with a list of references to nodes (the "children"), with the constraints that no reference is duplicated, and none points to the root.
>
> Alternatively, a tree can be defined abstractly as a whole (globally) as an ordered tree, with a value assigned to each node. Both these perspectives are useful: while a tree can be analyzed mathematically as a whole, when actually represented as a data structure it is usually represented and worked with separately by node (rather than as a set of nodes and an adjacency list of edges between nodes, as one may represent a digraph, for instance). For example, looking at a tree as a whole, one can talk about "the parent node" of a given node, but in general as a data structure a given node only contains the list of its children, but does not contain a reference to its parent (if any).

A tree is a *nonlinear* data structure that is used to store data in a **hierarchical** manner. Tree data structures are used to store *hierarchical* data, such as the *files* in a **file system**.

A tree is made up of a set of nodes connected by *edges*. Special types of trees, called **binary trees** or **binary search trees**, restrict the number of child nodes to no more than two.

A tree can be broken down into *levels*. The root node is at **level 0**, its children are at **level 1**, those nodes' children are at **level 2**, and so on.

A `Tree` is like a linked list, except it keeps references to many **child nodes** in a hierarchical structure i.e, each node can have no more than one parent. The **Document Object Model (DOM)** is such a structure, with a root `html` node that branches into the `head` and `body` nodes, which further subdivide into all the familiar html tags. As an in-memory representation of the DOM, React’s **Virtual DOM** is also a tree structure.

Take a look at the following tree:-

![Simple Tree](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/384px-Binary_tree.svg.png)

A simple unordered tree; in this diagram, the node labeled 7 has two children, labeled 2 and 6, and one parent, labeled 2. The root node, at the top, has no parent.

### Complexity

#### Average

| Operation | Complexity |
| :-------: | :--------: |
| Access    | <img src="/assets/linear-time.svg?invert_in_darkmode&sanitize=true" align=middle width=35.64773519999999pt height=24.65753399999998pt/>     |
| Search    | <img src="/assets/linear-time.svg?invert_in_darkmode&sanitize=true" align=middle width=35.64773519999999pt height=24.65753399999998pt/>     |
| Insertion | <img src="/assets/linear-time.svg?invert_in_darkmode&sanitize=true" align=middle width=35.64773519999999pt height=24.65753399999998pt/>     |
| Deletion  | <img src="/assets/linear-time.svg?invert_in_darkmode&sanitize=true" align=middle width=35.64773519999999pt height=24.65753399999998pt/>     |

## References

-   [Wikipedia](https://en.wikipedia.org/wiki/Tree_(data_structure))
-   [Java2s](http://www.java2s.com/Tutorials/Javascript/Javascript_Data_Structure/0420__Javascript_Binary_Tree.htm)
-   [YouTube](https://www.youtube.com/watch?v=qH6yxkw0u78)
-   [YouTube](https://www.youtube.com/watch?v=oSWTXtMglKE)

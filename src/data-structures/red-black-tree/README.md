## Red Black Tree

According to Wikipedia:

> A red–black tree is a kind of self-balancing binary search tree in computer science. Each node of the binary tree has an extra bit, and that bit is often interpreted as the color (red or black) of the node. These color bits are used to ensure the tree remains approximately balanced during insertions and deletions.
>
> Balance is preserved by painting each node of the tree with one of two colors in a way that satisfies certain properties, which collectively constrain how unbalanced the tree can become in the worst case. When the tree is modified, the new tree is subsequently rearranged and repainted to restore the coloring properties. The properties are designed in such a way that this rearranging and recoloring can be performed efficiently.
>
> The balancing of the tree is not perfect, but it is good enough to allow it to guarantee searching in O(log n) time, where n is the total number of elements in the tree. The insertion and deletion operations, along with the tree rearrangement and recoloring, are also performed in O(log n) time.
>
> Tracking the color of each node requires only 1 bit of information per node because there are only two colors. The tree does not contain any other data specific to its being a red–black tree so its memory footprint is almost identical to a classic (uncolored) binary search tree. In many cases, the additional bit of information can be stored at no additional memory cost.

Red - Black Tree is another variant of Binary Search Tree in which every node is colored either **RED** or **BLACK**. We can define a Red Black Tree as follows:

> Red Black Tree is a Binary Search Tree in which every node is colored either RED or BLACK.

In a Red Black Tree the color of a node is decided based on the following Red Black Tree properties.

    1. Red - Black Tree must be a Binary Search Tree.
    2. The ROOT node must colored BLACK.
    3. The children of Red colored node must colored BLACK. (There should not be two consecutive RED nodes).
    4. In all the paths of the tree there must be same number of BLACK colored nodes.
    5. Every new node must inserted with RED color.
    6. Every leaf (e.i. NULL node) must colored BLACK.

In AVL tree insertion, we used rotation as a tool to do balancing after insertion caused imbalance. In Red-Black tree, we use two tools to do balancing.

1) Recoloring
2) Rotation

We try recoloring first, if recoloring doesn’t work, then we go for rotation.

### Complexity

#### Average

| Operation | Complexity |
| :-------: | :--------: |
| Space     | O(n)       |
| Search    | O(log n)   |
| Insertion | O(log n)   |
| Deletion  | O(log n)   |

Simple representation of a red-black tree.

![Red-Black Tree](https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Red-black_tree_example.svg/1000px-Red-black_tree_example.svg.png)

## Insertion into Red Black Tree:

Below is a detailed insertion algorithm. The algorithm has mainly two cases depending upon the color of uncle. If uncle is red, we do recoloring. If uncle is black, we do rotations and/or recoloring.

Color of a NULL node is considered as BLACK.

### If uncle is RED
![Red Black Tree Balancing](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase2.png)

### If uncle is BLACK

-   Left Left Case (`p` is left child of `g` and `x` is left child of `p`)
-   Left Right Case (`p` is left child of `g` and `x` is right child of `p`)
-   Right Right Case (`p` is right child of `g` and `x` is right child of `p`)
-   Right Left Case (`p` is right child of `g` and `x` is left child of `p`)

#### Left Left Case (See g, p and x)

![Red Black Tree Balancing](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3a1.png)

#### Left Right Case (See g, p and x)

![Red Black Tree Balancing](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3d.png)

#### Right Right Case (See g, p and x)

![Red Black Tree Balancing](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3c.png)

#### Right Left Case (See g, p and x)

![Red Black Tree Balancing](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3c.png)

## Deletion in Red Black Tree:

### Insertion vs Deletion
In a Red Black Tree, the deletion operation is similar to deletion operation in BST. But after every deletion operation we need to check with the Red Black Tree properties. If any of the property is voilated then make suitable operation like Recolor or Rotaton & Recolor.

Like Insertion, recoloring and rotations are used to maintain the Red-Black properties.

In insert operation, we check color of uncle to decide the appropriate case. In delete operation, **we check color of sibling** to decide the appropriate case.

The main property that violates after insertion is two consecutive reds. In delete, the main violated property is, change of black height in subtrees as deletion of a black node may cause reduced black height in one root to leaf path.

Deletion is fairly complex process.  To understand deletion, notion of double black is used.  When a black node is deleted and replaced by a black child, the child is marked as **double black**. The main task now becomes to convert this double black to single black.

## References

-   [Wikipedia](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree)
-   [BTech](http://btechsmartclass.com/DS/U5_T4.html)
-   [GeeksForGeeks - Red Black Tree Insertion](https://www.geeksforgeeks.org/red-black-tree-set-2-insert/)
-   [Red Black Tree Interactive Visualisations](https://www.cs.usfca.edu/~galles/visualization/RedBlack.html)
-   [YouTube - Red Black Tree Insertion](https://www.youtube.com/watch?v=UaLIHuR1t8Q&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=63)
-   [YouTube - Red Black Tree Deletion](https://www.youtube.com/watch?v=CTvfzU_uNKE&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=64)

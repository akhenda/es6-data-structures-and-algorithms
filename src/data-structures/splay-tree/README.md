## Splay Tree

According to Wikipedia:

> A splay tree is a self-adjusting binary search tree with the additional property that recently accessed elements are quick to access again. It performs basic operations such as insertion, look-up and removal in O(log n) amortized time. For many sequences of non-random operations, splay trees perform better than other search trees, even when the specific pattern of the sequence is unknown. The splay tree was invented by Daniel Sleator and Robert Tarjan in 1985.
>
> All normal operations on a binary search tree are combined with one basic operation, called splaying. Splaying the tree for a certain element rearranges the tree so that the element is placed at the root of the tree. One way to do this with the basic search operation is to first perform a standard binary tree search for the element in question, and then use tree rotations in a specific fashion to bring the element to the top. Alternatively, a top-down algorithm can combine the search and the tree reorganization into a single phase.

Splay tree is another variant of binary search tree. In a splay tree, the recently accessed element is placed at the root of the tree.

Splay Tree is a self - adjusted Binary Search Tree in which every operation on an element rearranges the tree so that the element is placed at the root position of the tree.

In a splay tree, every operation is performed at root of the tree. All the operations on a splay tree are involved with a common operation called "Splaying".

Splaying an element is the process of bringing it to the root position by performing suitable rotation operations.

In a splay tree, splaying an element rearranges all the elements in the tree so that splayed element is placed at root of the tree.

With the help of splaying an element we can bring most frequently used element closer to the root of the tree so that any operation on those element performed quickly. That means the splaying operation automatically brings more frequently used elements closer to the root of the tree.

Every operation on a splay tree performs the splaying operation. For example, the insertion operation first inserts the new element as it inserted into the binary search tree, after insertion the newly inserted element is splayed so that it is placed at root of the tree. The search operation in a splay tree is search the element using binary search process then splay the searched element so that it placed at the root of the tree.

In a splay tree, to splay any element we use the following rotation operations:-

##### Rotations in Splay Tree
1.  Zig Rotation
2.  Zag Rotation
3.  Zig - Zig Rotation
4.  Zag - Zag Rotation
5.  Zig - Zag Rotation
6.  Zag - Zig Rotation

### Zig Rotation
The **Zig Rotation** in a splay tree is similar to the single right rotation in AVL Tree rotations. In zig rotation every node moves one position to thr righ from its current position. Consider the following example.

![Zig Rotation](http://btechsmartclass.com/DS/images/Zig%20Rotation.png)

### Zag Rotation
The **Zag Rotation** in a splay tree is similar to the single left rotation in AVL Tree rotations. In zag rotation every node moves one position to the left from its current position. Consider the following example.

![Zag Rotation](http://btechsmartclass.com/DS/images/Zag%20Rotation.png)

### Zig-Zig Rotation
The **Zig-Zig Rotation** in a splay tree is a double zig rotation. In zig-zig rotation every node moves two position to the right from its current position. Consider the following example.

![Zig-Zig Rotation](http://btechsmartclass.com/DS/images/Zig-Zig.png)

### Zag-Zag Rotation
The **Zag-Zag Rotation** in a splay tree is a double zag rotation. In zag-zag rotation every node moves two position to the left from its current position. Consider the following example.

![Zag-Zag Rotation](http://btechsmartclass.com/DS/images/Zag-Zag.png)

### Zig-Zag Rotation
The **Zig-Zag Rotation** in a splay tree is a sequence of zig rotation followed by zag rotation. In zig-zag rotation every node moves one position to the right followed by one position to the left from its current position. Consider the following example.

![Zig-Zag Rotation](http://btechsmartclass.com/DS/images/Zig-Zag.png)

### Zag-Zig Rotation
The **Zag-Zig Rotation** in a splay tree is a sequence of zag rotation followed by zig rotation. In zag-zig rotation every node moves one position to the left followed by one position to the right from its current position. Consider the following example.

![Zag-Zig Rotation](http://btechsmartclass.com/DS/images/Zag-Zig.png)

> Every Splay tree must be a binary search tree but it is need not to be balanced tree.


## Insertion Operation in Splay Tree
The insertion operation in Splay tree is performed using following steps:-

1.  Check whether tree is Empty.
2.  If tree is Empty then insert the newNode as Root node and exit from the operation.
3.  If tree is not Empty then insert the newNode as a leaf node using Binary Search tree insertion logic.
4.  After insertion, Splay the newNode

## Deletion Operation in Splay Tree
In a Splay Tree, the deletion operation is similar to deletion operation in Binary Search Tree. But before deleting the element first we need to splay that node then delete it from the root position then join the remaining tree.

### Complexity

#### Average

| Operation | Complexity |
| :-------: | :--------: |
| Space     | O(n)       |
| Search    | O(log n)   |
| Insertion | O(log n)   |
| Deletion  | O(log n)   |

## References

-   [Wikipedia](https://en.wikipedia.org/wiki/Splay_tree)
-   [BTech](http://btechsmartclass.com/DS/U5_T5.html)
-   [YouTube](https://www.youtube.com/watch?v=IBY4NtxmGg8)
-   [YouTube](https://www.youtube.com/watch?v=9p6-_r_4Hxs)

## AVL Tree

According to Wikipedia:

> In computer science, an **AVL** tree (named after inventors **A**delson-**V**elsky and **L**andis) is a self-balancing binary search tree. It was the first such data structure to be invented. In an AVL tree, the heights of the two child subtrees of any node differ by at most one; if at any time they differ by more than one, rebalancing is done to restore this property. Lookup, insertion, and deletion all take <img src="/assets/logarithmic-time.svg?invert_in_darkmode&sanitize=true" align=middle width=57.27448814999999pt height=24.65753399999998pt/> time in both the average and worst cases, where *n* is the number of nodes in the tree prior to the operation. Insertions and deletions may require the tree to be rebalanced by one or more tree rotations.
>
> The AVL tree is named after its two Soviet inventors, Georgy Adelson-Velsky and Evgenii Landis, who published it in their 1962 paper "An algorithm for the organization of information".
>
> AVL trees are often compared with red–black trees because both support the same set of operations and take <img src="/assets/logarithmic-time.svg?invert_in_darkmode&sanitize=true" align=middle width=57.27448814999999pt height=24.65753399999998pt/> time for the basic operations. For lookup-intensive applications, AVL trees are faster than red–black trees because they are more strictly balanced. Similar to red–black trees, AVL trees are height-balanced. Both are, in general, neither weight-balanced nor <img src="/assets/mu.svg?invert_in_darkmode&sanitize=true" align=middle width=9.90492359999999pt height=14.15524440000002pt/>-balanced for any <img src="/assets/mu-less-than-half.svg?invert_in_darkmode&sanitize=true" align=middle width=40.34769914999999pt height=27.77565449999998pt/> that is, sibling nodes can have hugely differing numbers of descendants.

Take a look at the following AVL-Tree :-

![AVL-Tree](https://upload.wikimedia.org/wikipedia/commons/f/fd/AVL_Tree_Example.gif)

Animation showing the insertion of several elements into an AVL tree. It includes left, right, left-right and right-left rotations.

Shown below is an AVL tree with balance factors (green)

![AVL-Tree](https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/AVL-tree-wBalance_K.svg/524px-AVL-tree-wBalance_K.svg.png)

### Complexity

#### Average

| Operation | Complexity  |
| :-------: | :---------: |
| Space     | <img src="/assets/linear-time.svg?invert_in_darkmode&sanitize=true" align=middle width=35.64773519999999pt height=24.65753399999998pt/> |
| Search    | <img src="/assets/logarithmic-time.svg?invert_in_darkmode&sanitize=true" align=middle width=70.05992069999998pt height=24.65753399999998pt/> |
| Insertion | <img src="/assets/logarithmic-time.svg?invert_in_darkmode&sanitize=true" align=middle width=70.05992069999998pt height=24.65753399999998pt/> |
| Deletion  | <img src="/assets/logarithmic-time.svg?invert_in_darkmode&sanitize=true" align=middle width=70.05992069999998pt height=24.65753399999998pt/> |


### AVL Tree Rotations

**Left-Left Rotation**

![Left-Left Rotation](http://btechsmartclass.com/DS/images/LL%20Rotation.png)

**Right-Right Rotation**

![Right-Right Rotation](http://btechsmartclass.com/DS/images/RR%20Rotation.png)

**Left-Right Rotation**

![Left-Right Rotation](http://btechsmartclass.com/DS/images/LR%20Rotation.png)

**Right-Left Rotation**

![Right-Right Rotation](http://btechsmartclass.com/DS/images/RL%20Rotation.png)

## References

-   [Wikipedia](https://en.wikipedia.org/wiki/AVL_tree)
-   [Tutorials Point](https://www.tutorialspoint.com/data_structures_algorithms/avl_tree_algorithm.htm)
-   [BTech](http://btechsmartclass.com/DS/U5_T2.html)
-   [AVL Tree Insertion on YouTube](https://www.youtube.com/watch?v=rbg7Qf8GkQ4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=12&)
-   [AVL Tree Interactive Visualisations](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)

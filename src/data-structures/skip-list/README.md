## Skip List

According to Wikipedia:

> In computer science, a skip list is a data structure that allows fast search within an ordered sequence of elements. Fast search is made possible by maintaining a linked hierarchy of subsequences, with each successive subsequence skipping over fewer elements than the previous one (see the picture below on the right). Searching starts in the sparsest subsequence until two consecutive elements have been found, one smaller and one larger than or equal to the element searched for. Via the linked hierarchy, these two elements link to elements of the next sparsest subsequence, where searching is continued until finally we are searching in the full sequence. The elements that are skipped over may be chosen probabilistically or deterministically, with the former being more common.

Skip lists are a linked-list-like structure which allows for fast search. It consists of a base list holding the elements, together with a tower of lists maintaining a linked hierarchy of subsequences, each skipping over fewer elements.

![Skip List](https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Skip_list.svg/800px-Skip_list.svg.png)

A schematic picture of the skip list data structure. Each box with an arrow represents a pointer and a row is a linked list giving a sparse subsequence; the numbered boxes (in yellow) at the bottom represent the ordered data sequence. Searching proceeds downwards from the sparsest subsequence at the top until consecutive elements bracketing the search element are found.

![Skip List Insertion](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Skip_list_add_element-en.gif/800px-Skip_list_add_element-en.gif)

Inserting elements to skip list


### Advantages

-   Skip lists perform very well on rapid insertions because there are no rotations or reallocations.
-   They’re simpler to implement than both self-balancing binary search trees and hash tables.
-   You can retrieve the next element in constant time (compare to logarithmic time for inorder traversal for BSTs and linear time in hash tables).
-   The algorithms can easily be modified to a more specialized structure (like segment or range “trees”, indexable skip lists, or keyed priority queues).
-   Making it lockless is simple.
-   It does well in persistent (slow) storage (often even better than AVL and EH).

### Complexity

#### Average

| Operation | Complexity |
| :-------: | :--------: |
| Space     | O(n)       |
| Search    | O(log n)   |
| Insertion | O(log n)   |
| Deletion  | O(log n)   |

A simple representation of a Skip List

![Simple Skip List Insertion](https://i.imgur.com/nNjOtfa.png)

## References

-   [Wikipedia](https://en.wikipedia.org/wiki/Skip_list)
-   [Tiki Blog](http://ticki.github.io/blog/skip-lists-done-right/)
-   [YouTube - GeeksforGeeks](https://www.youtube.com/watch?v=ypod5jeYzAU)
-   [YouTube](https://www.youtube.com/watch?v=7GWXfL6T3fM)

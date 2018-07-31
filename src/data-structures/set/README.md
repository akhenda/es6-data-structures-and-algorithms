## Set

According to Wikipedia:

> In computer science, a set is an abstract data type that can store unique values, without any particular order. It is a computer implementation of the mathematical concept of a finite set. Unlike most other collection types, rather than retrieving a specific element from a set, one typically tests a value for membership in a set.

Some set data structures are designed for static or frozen sets that do not change after they are constructed. Static sets allow only query operations on their elements — such as checking whether a given value is in the set, or enumerating the values in some arbitrary order. Other variants, called dynamic or mutable sets, allow also the insertion and deletion of elements from the set.

### Complexity

#### Average

| Operation | Complexity |
| :-------: | :--------: |
| Access    | ---        |
| Search    | O(n)       |
| Insertion | O(n)       |
| Deletion  | O(n)       |

Simple representation of a Set

#### Input
![Set Input](http://algorist.com/images/figures/set-data-structures-L.png)

#### Output
![Set Output](http://algorist.com/images/figures/set-data-structures-R.png)

## References

-   [Wikipedia](https://en.wikipedia.org/wiki/Set_(abstract_data_type))
-   [Prof. Steven Skiena](http://algorist.com/problems/Set_Data_Structures.html)

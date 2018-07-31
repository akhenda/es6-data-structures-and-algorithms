## Stack

According to Wikipedia:

> A Stack is an abstract data type that serves as a collection of elements, with two principal operations: push, which adds an element to the collection, and pop, which removes the most recently added element that was not yet removed. The order in which elements come off a Stack gives rise to its alternative name, LIFO (for last in, first out).

A Stack often has a third method peek which allows to check the last pushed element without popping it.

It is a list of elements that are accessible only from one end of the list, which is called the top.

Stacks implement a LIFO (Last-In First-Out) structure which means that the last element added to the structure must be the first one to be removed

In this implementation, an object is used to build the stack.

### Complexity

#### Average

| Operation | Complexity |
| :-------: | :--------: |
| Access    | O(n)       |
| Search    | O(n)       |
| Insertion | O(1)       |
| Deletion  | O(1)       |

Simple representation of a stack runtime with push and pop operations.

![Stack](https://upload.wikimedia.org/wikipedia/commons/b/b4/Lifo_stack.png)

## References

-   [Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))
-   [YouTube](https://www.youtube.com/watch?v=wjI1WNcIntg&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=3&)

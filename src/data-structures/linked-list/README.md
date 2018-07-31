## Linked List

According to Wikipedia:

> In computer science, a linked list is a linear collection of data elements, whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence. In its most basic form, each node contains: data, and a reference (in other words, a link) to the next node in the sequence. This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration. More complex variants add additional links, allowing more efficient insertion or removal of nodes at arbitrary positions. A drawback of linked lists is that access time is linear (and difficult to pipeline). Faster access, such as random access, is not feasible. Arrays have better cache locality compared to linked lists.

Linked Lists are among the simplest and most common data structures because they allow for efficient insertion or removal of elements from any position in the sequence.

They are made of groups of nodes which together represent a sequence. You will notice that both the Queue and the Stack where made using the basic idea of a linked list. However, they have special rule which makes them different in functionality.

Like arrays, they store data elements in sequential order. Instead of keeping indexes, linked lists hold pointers to other elements. The first node is called the head while the last node is called the tail. In a singly-linked list, each node has only one pointer to the next node. Here, the head is where we begin our walk down the rest of the list. In a doubly-linked list, a pointer to the previous node is also kept. Therefore, we can also start from the tail and walk “backwards” toward the head.

Linked lists have constant-time insertions and deletions because we can just change the pointers. To do the same operations in arrays requires linear time because subsequent items need to be shifted over. Also, linked lists can grow as long as there is space.

Like arrays, linked lists can operate as stacks. It’s as simple as having the head be the only place for insertion and removal. Linked lists can also operate as queues. This can be achieved with a doubly-linked list, where insertion occurs at the tail and removal occurs at the head, or vice versa.

Linked lists are useful on both the client and server. On the client, state management libraries like Redux structure its middleware logic in a linked-list fashion. When actions are dispatched, they are piped from one middleware to the next until all is visited before reaching the reducers. On the server, web frameworks like Express also structure its middleware logic in a similar fashion. When a request is received, it is piped from one middleware to the next until a response is issued.

### Complexity

#### Average

| Operation | Complexity |
| :-------: | :--------: |
| Access    | O(n)       |
| Search    | O(n)       |
| Insertion | O(1)       |
| Deletion  | O(1)       |

Simple representation of a linked list.

![Linked List](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)

## References

-   [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
-   [Silicon Wat(Medium)](https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c)
-   [YouTube](https://www.youtube.com/watch?v=njTh_OwMljA&index=2&t=1s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

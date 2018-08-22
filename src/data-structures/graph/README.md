## Graph

According to Wikipedia:

> In computer science, a graph is an abstract data type that is meant to implement the undirected graph and directed graph concepts from mathematics, specifically the field of graph theory.
>
> A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph. These pairs are known as edges, arcs, or lines for an undirected graph and as arrows, directed edges, directed arcs, or directed lines for a directed graph. The vertices may be part of the graph structure, or may be external entities represented by integer indices or references.
>
> A graph data structure may also associate to each edge some edge value, such as a symbolic label or a numeric attribute (cost, capacity, length, etc.).

A `graph` is a pictorial representation of a set of *objects* where some pairs of the objects are connected by *links*. The interconnected objects are represented by points termed as **vertices**, and links that connect the vertices are called **edges**.

Formally, a graph is a pair of sets **(V, E)**, where **V** is the set of vertices and **E** is the set of edges, connecting the pairs of vertices.

Take a look at the following graph:-

![Simple Graph](http://btechsmartclass.com/DS/images/Graph%201.png)

In the above graph,
<p align="center"><img src="/assets/graph-V.svg?invert_in_darkmode&sanitize=true" align=middle width=145.6036164pt height=16.438356pt/></p>
<p align="center"><img src="/assets/graph-E.svg?invert_in_darkmode&sanitize=true" align=middle width=279.50544104999994pt height=16.438356pt/></p>

<br />

There are different ways of representing a graph, each of them with its own advantages and disadvantages. Here are the two main ones:

-   **Adjacency list:** For every vertex a list of adjacent vertices is stored. This can be viewed as storing the list of edges. This data structure allows the storage of additional data on the vertices and edges.
-   **Adjacency matrix:** Data are stored in a two-dimensional matrix, in which the rows represent source vertices and columns represent destination vertices. The data on the edges and vertices must be stored externally.

If a tree is free to have more than one parent, it becomes a `Graph`. Edges that connect vertices together in a graph can be *directed* or *undirected*, *weighted* or *unweighted*. Edges that have both direction and weight are analogous to *vectors*.

Multiple inheritances in the form of *Mixins* and data objects that have *many-to-many* relationships produce graph structures. A social network and the Internet itself are also graphs. The most complicated graph in nature is our human brain, which **neural networks** attempt to replicate to give machines *superintelligence*.

### Complexity

| Operation  | Adjacency list   | Adjacency matrix |
| :-------:  | :------------:   | :--------------: |
| Storage    | <img src="/assets/big-o-v+e.svg?invert_in_darkmode&sanitize=true" align=middle width=90.46115264999999pt height=24.65753399999998pt/> | <img src="/assets/big-o-v-squared.svg?invert_in_darkmode&sanitize=true" align=middle width=90.46115264999999pt height=24.65753399999998pt/> |
| Add Vertex | <img src="/assets/constant-time.svg?invert_in_darkmode&sanitize=true" align=middle width=90.46115264999999pt height=24.65753399999998pt/> | <img src="/assets/big-o-v-squared.svg?invert_in_darkmode&sanitize=true" align=middle width=90.46115264999999pt height=24.65753399999998pt/> |
| Add Edge   | <img src="/assets/constant-time.svg?invert_in_darkmode&sanitize=true" align=middle width=90.46115264999999pt height=24.65753399999998pt/> | <img src="/assets/constant-time.svg?invert_in_darkmode&sanitize=true" align=middle width=90.46115264999999pt height=24.65753399999998pt/> |
| Query      | <img src="/assets/big-o-v.svg?invert_in_darkmode&sanitize=true" align=middle width=90.46115264999999pt height=24.65753399999998pt/> | <img src="/assets/constant-time.svg?invert_in_darkmode&sanitize=true" align=middle width=90.46115264999999pt height=24.65753399999998pt/> |

Simple representation of a Graph (Our sample graph)

![Simple Graph](http://blog.benoitvallon.com/img/2016-02-15-the-graph-data-structure/graph-view.jpg)

## References

-   [Wikipedia](https://en.wikipedia.org/wiki/Graph_(abstract_data_type))
-   [Silicon Wat](https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c)
-   [BSC](http://btechsmartclass.com/DS/U3_T8.html)
-   [Benoit Vallon](http://blog.benoitvallon.com/data-structures-in-javascript/the-graph-data-structure/)
-   [YouTube](https://www.youtube.com/watch?v=gXgEDyodOJU&index=9&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
-   [YouTube](https://www.youtube.com/watch?v=k1wraWzqtvQ&index=10&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

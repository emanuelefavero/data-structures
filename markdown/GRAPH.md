# Graph

A graph is a data structure consisting of a collection of vertices (nodes) connected by edges (links). Graphs are used to represent relationships between objects. Each edge represents a connection between two nodes. Graphs can be either directed (edges have a specific direction) or undirected (edges have no direction). Additionally, graphs can have weighted edges, where each edge has an associated numerical value called weight

> Graphs can be used to model various real-world scenarios, such as social networks, computer networks, transportation systems, and more

## Graph Terminology

- **Vertex**: A node in a graph
- **Edge**: A connection between two vertices, showed as a line (it represents a relationship between two vertices)
- **Directed Graph**: A graph where each edge has a direction (like Twitter followers)
- **Undirected Graph**: A graph where each edge has no direction, it is bidirectional (like Facebook friends)
- **Weighted Graph**: A graph where each edge has a weight

## When to use a Graph

- **Social Networks**: Graphs are used to represent relationships between users in social networks
- **Databases**: Graphs are sometimes used to represent relationships between entries in a database
- When you need to represent relationships between objects
- When modelling real-world scenarios, such as computer networks, transportation systems, and more
- When solving problems involving paths, routes or connectivity

## Graph Representation

Graphs can be represented in two main ways, including:

- **Adjacency Matrix**: A 2D matrix where each cell (i, j) represents an edge between vertices i and j. For weighted graphs, the cell contains the edge's weight.
- **Adjacency List**: A collection of lists or arrays, where each list corresponds to a vertex, and it contains the vertices adjacent to that vertex.

_Graph:_

```text
    A -- B
    |    |
    |    |
    C --/
```

_Adjacency Matrix of this Graph:_

```text
    | A | B | C |
-----------------
A   | 0 | 1 | 1 |
-----------------
B   | 1 | 0 | 1 |
-----------------
C   | 1 | 1 | 0 |
```

_Adjacency List of this Graph:_

```text
A: B, C
B: A, C
C: A, B
```

> TIP: You can either use an array or a linked list as the hash table value in the adjacency list

## Graph Operations

- **Add Vertex**: Adds a vertex to the graph
- **Add Edge**: Adds an edge between two vertices in the graph
- Check if a vertex or an edge exists in the graph
- Traverse the graph (BFS, DFS)

## Graph Traversal

Graph traversal is the process of visiting all the nodes in a graph. There are two main ways to traverse a graph:

- **Depth-First Search (DFS)**: If you want to traverse all the vertices in a graph, use DFS. DFS is also useful when searching for a grandchild or a great-grandchild in a family tree
- **Breadth-First Search (BFS)**: If you want to find the shortest path between two vertices. BFS is also useful when searching for the closest person or a friend in a social network (e.g. LinkedIn, Facebook)

&nbsp;

---

&nbsp;

[**Go To Top &nbsp; ⬆️**](#graph)

&nbsp;

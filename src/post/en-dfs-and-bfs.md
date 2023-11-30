---
title: 'DFS and BFS'
date: '2020-09-22 07:00:00'
---

![](/images/algorithm/graph/dfsbfs.gif)

# Depth First Search

DFS is an algorithm for searching and traversing in a tree or graph. This algorithm starts at a root node for tree 
or any specified node (starting node) for a graph and explores as far as possible along each 
branch (or neighbors) before [backtracking](https://en.wikipedia.org/wiki/Backtracking).

DFS(Depth First Search) can be implemented using either a recursion or stack.

## Recursion 
```cpp
#define vi vector<int>
#define vb vector<bool>

void dfs(vector<vi > &graph, vb &visited, int start) 
{
  visited[start] = true;
  vi neighbors = graph[start];

  for(int i=0; i<neighbors.size(); ++i) 
  {
    if(visited[neighbors[i]] == false) 
    {
      dfs(graph, visited, neighbors[i]);
    }
  }
}
```

## Stack
```cpp
#define vi vector<int>
#define vb vector<bool>

void dfs(vector<vi > &graph, vb &visited, int start) 
{
  visited[start] = true;
  stack<int> s;
  s.push(start);

  while(!s.empty()) 
  {
    int curr = s.top();
    s.pop();
    vi = graph[curr];

    for(int v : n) 
    {
      if(visited[v] == false) 
      {
        visited[v] = true;
        s.push(curr);
        s.push(v);
        break;
      }
    }
  }
}
```

# Breadth First Search

Unlike DFS algorithm, BFS explore all nodes connected to the current 
vertex first. So if 3 nodes are connected to the current vertex, it explores all those nodes first.

BFS can be implemented using a queue.

## Implementation

```cpp
#define vi vector<int>
#define vb vector<bool>

void bfs(vector<vi > &g, vb &visited, int start) 
{
  queue<vi > q;

  q.push(g[start]);
  visited[start] = true;

  while(!q.empty()) 
  {
    vi neighbors = q.front();
    q.pop();

    for(int i=0; i<neighbors.size(); ++i) 
    {
      if(visited[neighbors[i]]==false)  
      {
        visited[neighbors[i]] = true;
        q.push(g[neighbors[i]]);
      }
    }
  }
}
```

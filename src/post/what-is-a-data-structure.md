---
title: 'What is a Data Structure?'
date: '2022-07-04 22:20:00'
updated: '2023-09-25 14:05:00'
---

A data structure represents a specialized format for organizing, processing, retrieving, and storing data. It makes it easier and more efficient for developers to work with data elements.

# Why Learn Data Structures?

Understanding data structures is crucial for several reasons. Firstly, data structures serve as the fundamental building blocks for creating more advanced applications. Additionally, familiarity with various data structures is essential because it gives you more opportunity to enhance algorithmic performance, leading to faster execution times.

Choosing an ill-suited data structure will result in slower runtime and, in the worst case, your program may stop running due to the algorithm being too slow with the selected data structure.

# Characteristics

Characteristics of data structures are determined based on the following factors: 1. whether data elements are stored sequentially, 2. whether all data elements are of the same type, and 3. whether the structure can be altered during the runtime.

1. Data structures are considered **linear** when data elements are stored sequentially; otherwise, they are deemed **non-linear**.
2. A data structure is **homogeneous** if it imposes a constraint that only the same data type can be stored, and **heterogenous** if it allows different data types.
3. When a data structure has a fixed size, structure, and memory location, it is referred to as **static**. Conversely, if a data structure has a size, structure, and memory location that can be modified during the runtime, it is termed **dynamic**

# Linear Data Structure

A linear data structure is defined by elements arranged sequentially, one after another.

Examples of linear data structures include: _Arrays_, _Linked Lists_, _Stacks_, and _Queues_.

![Linear Data Structure](/images/linear-data-structure.gif)

Linear data structures exhibit the following characteristics:

- Data elements are organized sequentially in a contiguous manner.
- The elements exist on a single level.
- A complete visitation and traversal of all elements can be achieved in a single pass.
- Memory usage may not be optimal as a block of memory needs to be pre-allocated.

# Non-Linear Data Structure

A non-linear data structure does not adhere to a specific sequence for storing its elements. Instead, it organizes them in a hierarchical manner where each element is connected to one or more other elements.

Examples of non-linear data structures include: _Trees_ and _Graphs_.

![Non-Linear Data Structure](/images/nonlinear-data-structure.gif)

Non-linear data structures exhibit the following characteristics:

- Data elements are not arranged in a sequential order.
- The elements are organized hierarchically, with multiple layers.
- Visiting all elements typically requires multiple passes through the structure.
- Memory utilization efficiency varies across different non-linear structures.

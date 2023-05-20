---
title: 'Asymptotic Analysis: Big-O, Omega, and Theta'
posttitle: 'Asymptotic Analysis: Big-O, Omega, and Theta'
date: '2022-07-06 07:00:00'
uid: 'b'
---

## Asymptotic Notations

Asymptotic notations are a set of mathematical tools used to analyze the performance of algorithms. They help us describe how the time and resources required to solve a problem grow as the size of the input data increases. By using these notations, we can compare different algorithms and choose the most efficient one for a particular task.

[^a] ![Big-O Graph](/images/big-o-graph.webp)

There are primarily three distinct notations available to represent three different complexity states:

- Theta (Θ) Notation for the best-case complexity.
- Big-O Notation  for the worst-case complexity.
- Omega (Ω) Notation  for the average-case complexity.

[^b] ![Asymptotic notations](/images/notations.webp)

## Big-O Notation

The worst-case time complexity of an algorithm is described by Big-O notation.

Mathematically, Big-O is defined as:

```text
O(g(n)) = { f(n): there exist positive constants c and n_0
            such that 0 ≤ f(n) ≤ cg(n) for all n ≥ n_0 }
```

## Omega Notation

The best-case time complexity of an algorithm is described by Omega (Ω) Notation.

Mathematically, Omega notation is defined as:

```text
Ω(g(n)) = { f(n): there exist positive constants c and n_0
            such that 0 ≤ cg(n) ≤ f(n) for all n ≥ n_0 }
```

## Theta Notation

And last but not least, the average time complexity of an algorithm is described by the Theta (Θ) Notation.

For a function `g(n)` and `Θ(g(n))` is given by the relation:

```text
Θ(g(n)) = { f(n): there exist positive constants c1, c2 and n_0
            such that 0 ≤ c1g(n) ≤ f(n) ≤ c2g(n) for all n ≥ n_0 }
```

## Source

- [https://www.programiz.com/dsa/asymptotic-notations](https://www.programiz.com/dsa/asymptotic-notations)

[^a]: Big-O Graph image source: https://danielmiessler.com/study/big-o-notation/
[^b]: Asymptotic Notations image source: https://www.dotnetlovers.com/images/coolnikhilj2256c883d1-b9fc-46e9-b225-588ac5063c3d.png
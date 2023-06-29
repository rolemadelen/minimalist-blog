---
title: "Asymptotic Analysis: Big-O, Omega, and Theta"
posttitle: "Asymptotic Analysis: Big-O, Omega, and Theta"
date: "2022-07-06 07:00:00"
---

Asymptotic notations are mathematical tools used to analyze the performance of algorithms. They provide a way to describe how the time and resources needed to solve a problem scale as the size of the input data increases. These notations enable us to compare and evaluate different algorithms, helping us choose the most efficient one for a specific task.

![Big-O Graph](/images/big-o-graph.webp)
_https://danielmiessler.com/study/big-o-notation/_

There are three primary notations used to represent different complexity states: _Theta_, _Big-O_, and _Omega_.

![Asymptotic notations](/images/notations.webp)
_https://www.dotnetlovers.com/article/129/explanation-on-asymptotic-notations_

### Big-O Notation

The **worst-case time complexity** of an algorithm is represented by Big-O notation.
Mathematically, Big-O is defined as:

```text
O(g(n)) = { f(n): there exist positive constants c and n_0
            such that 0 ≤ f(n) ≤ cg(n) for all n ≥ n_0 }
```

### Omega Notation

The **best-case time complexity** of an algorithm is represented by Omega (Ω) Notation.
Mathematically, Omega notation is defined as:

```text
Ω(g(n)) = { f(n): there exist positive constants c and n_0
            such that 0 ≤ cg(n) ≤ f(n) for all n ≥ n_0 }
```

### Theta Notation

And last but not least, the **average time complexity** of an algorithm is represented by the Theta (Θ) Notation.
For a function `g(n)` and `Θ(g(n))` is given by the relation:

```text
Θ(g(n)) = { f(n): there exist positive constants c1, c2 and n_0
            such that 0 ≤ c1g(n) ≤ f(n) ≤ c2g(n) for all n ≥ n_0 }
```

### Reference

- <https://www.programiz.com/dsa/asymptotic-notations)>

---
title:  "Time & Space Complexity"
date:  "2021-05-03 07:00:00"
---

# Time Complexity
- A correlation between the input size and the time it takes to process it.
- In CP, we assume that a program can process about 100 million operations per second.
  + FYI: In May 2021, the world's fastest super computer is Japanese _[Fugaku](https://blog.global.fujitsu.com/fgb/2020-06-22/supercomputer-fugaku-named-world-fastest/)_. Its peak performance is 537petaFLOPS(PF) which means it can process about 53.7 quadrillion operations per second.

Here's a `countEven` function that finds a total number of evens between 1 to N.

Lets see how many operations are done here.

```cpp
int countEven(int N) {
    int cnt = 0;

    for(int i=1; i<=N; ++i) {
        if(i % 2 == 0) ++cnt;
    }

    return cnt;
}
```

- Line 2: `cnt = 0` (+1)
- for loop
  + Line 4: `i=1` (+1)
  + Line 4 - repeat N times: `i <= N` and `++i` (+2) 
  + Line 5 - repeat N times: `i % 2 == 0` (+2) and `++cnt` (+1)
- Line 8: `return cnt` (+1)

Now if we put those together, we get `1+1*N(2+2+1)+1` or `5N+3`. Now we know about how many operations are done in the function.


Earlier we mentioned that a program can process about 100 million operations per second. If `N=10_000_000`, we can safely assume that the program will finish under a second since 50 million is below 100 million.
But if `N=50_000_000`, it requires around 250 million operations which will take more than a second.


So what does `5N + 3` has to do with the time complexity? What's important here is the proportionality. As `N` gets larger, the number of operations and the runtime of a program increases. And as `N` gets smaller, the total number of operations and the runtime decreases which means it runs faster.


Using the Big-Oh notation, we say that the function `countEven` has `O(n)` (_Big-Oh of N_ or _Oh-N_) time complexity.

## Big-Oh Notation
A notation used to analyze the efficiency of an algorithm. All coefficients and terms are ignored except the dominant term.

```
- O(N)   ==> N+3, 10N + logN, 5N + 10sqrtN, ...
- O(N^2) ==> 5N^2 + 10N + 7, 10N^2 + 1, ...
- O(1)   ==> 1, 5, 17, ...
```

Here's the graph of Big-Oh.

![Big-Oh Chart](/images/algorithm/complexity/big-oh.png)

Now we can check whether our program is efficient enough to solve a problem under the given time frame or not by substituting the `N` in a time complexity with a max input.

# Space Complextiy
- A correlation between the input size and the space used in a memory.
- Generally, a problem in CP limits the memory to be 512MB; this is equivalent to declaring 120 million int-type variables.

It is rare for a space to become an issue; however, there are problems that restricts the space so do be careful.

# Reference
- [https://blog.encrypted.gg/922](https://blog.encrypted.gg/922)
- [Big Oh Chart](https://danielmiessler.com/study/big-o-notation/)
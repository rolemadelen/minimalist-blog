---
title: "Primality Test"
posttitle: "Primality Test"
date: "2023-04-03 06:45:00"
---

A prime number is a number that can only be divided by 1 and itself without resulting in a fraction or decimal.
For example, 2, 3, 5, 7, 11, 13, 17, 19, 23, and 29 are the first ten prime numbers. Among them, 2 is the only even prime number.
Primality test is an algorithm to determine whether an input number is prime.

There are several ways to implement an algorithm to test whether a given number is prime or not. Let's start with a simple algorithm.

### Naive Approach

One way to check if a number is prime is to iterate from `2` to `n-1` and try dividing `n` by each number. If there is a number that divides `n` without a remainder, then `n` is not prime.
The following code demonstrates this algorithm implemented in TypeScript:

```ts
const isPrime = (n: number): boolean => {
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};
```

The time complexity of this algorithm is `O(N)`, which is not too bad, but there is room for further optimization.
One way to reduce the number of operations is to exclude even numbers, as all prime numbers (except 2) are odd.

```ts
const isPrime = (n: number): boolean => {
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i < n; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};
```

While we have reduced the number of operations, it is important to note that this algorithm still has a linear time complexity.
Is it possible to improve upon the linear time complexity of this algorithm?
Absolutely.

### Square Root Optimization

To achieve a more efficient primality test algorithm, we can limit our checks to numbers up to the square root of `n`.
If `n` is not a prime number, it can be represented as a product of two factors, `p` and `q`. At least one of these factors will be less than or equal to the square root of `n`.

```ts
const isPrime = (n: number): boolean => {
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  const UPPER_BOUND = Math.sqrt(n);

  for (let i = 3; i <= UPPER_BOUND; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};
```

The time complexity of this algorithm is `O(sqrt(N))`.
We can further optimize the algorithm by leveraging the properties of `6K-1` and `6K+1`.

### 6k ± 1 Optimization

All prime numbers, except for 2 and 3, can be expressed in the form of `6K-1` or `6K+1`.

- 6k
- 6K + 1 & 6K - 1
- 6k + 2 & 6k - 2
- 6k + 3 & 6k - 3
- 6k + 4 & 6k - 4
- 6k + 5 & 6k - 5

When `k = 1`, the values become:

- 6k → 6
- 6k ± 1 → 7 & 5
- 6k ± 2 → 8 & 4
- 6k + 3 → 9
- 6k + 4 → 10

From these values, we observe that `6k`, `6k ± 2`, `6k + 3`, and `6k + 4` are all divisible by 2 or 3, and thus cannot be prime. This leaves us with `6k ± 1`.
Therefore, we can optimize our algorithm by only checking the values of `6K-1` and `6K+1`.

```ts
const isPrime = (k: number): boolean => {
  if (k <= 1) return false;
  if (k === 2 || k === 3) return true;
  if (k % 2 === 0 || k % 3 === 0) return false;

  for (let i = 5; i * i <= k; i += 6) {
    if (k % i === 0 || k % (i + 2) === 0) return false;
  }

  return true;
};
```

The time complexity of this optimize algorithm is `O(sqrt(N))`.

### Sieve of Eratosthenes

The Sieve of Eratosthenes is an algorithm used to find all prime numbers up to a given value `N`.

The algorithm begins by creating a list of numbers from `2` to `N`. It then iteratively marks the multiples of each prime number as composite (not prime). At the conclusion of the algorithm, the numbers that remain unmarked are the prime numbers within the range.

![sieve](https://upload.wikimedia.org/wikipedia/commons/b/b9/Sieve_of_Eratosthenes_animation.gif)

The algorithm follows a set of specific steps.
Firstly, start by listing all natural numbers from `2` to `N`.
Next, identify the smallest prime number, p, among the remaining unprocessed numbers.
Then, proceed to eliminate all multiples of `p` from the remaining numbers, excluding `p` itself.
Finally, repeat steps 2 and 3 until there are no more numbers left to process
Here is an example of code implementing this algorithm:

```ts
const sieve = (n: number): boolean => {
  const SIZE: number = n + 1;
  let arr: boolean[] = new Array(SIZE).fill(true);
  arr[0] = false;
  arr[1] = false;

  let p = 2;
  while (p < SIZE) {
    if (arr[p]) {
      for (let i = p + p; i < SIZE; i += p) {
        arr[i] = false;
      }
    }

    p += 1;
  }

  return arr[n];
};
```

The Sieve of Eratosthenes algorithm has a time complexity of `O(n log log n)`.

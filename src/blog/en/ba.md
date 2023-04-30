---
title: 'Primality Test'
posttitle: 'Primality Test'
date: '2023-04-03 06:45:00'
uid: 'ba'
---

## Prime Number

A prime number is a number that can only be divided by 1 and itself without resulting in a fraction or decimal.

For example, 2, 3, 5, 7, 11, 13, 17, 19, 23, and 29 are the first ten prime numbers. 2 is the only even prime number.

There are several ways to implement an algorithm to test if a given number is prime or not. Let's start with a simple algorithm.

## Naive Approach

One way to check if a number is prime is to traverse from `2` to `n-1` and try dividing `n` by each number. If there is a number that divides `n` without a remainder, then `n` is not prime.

The following code implements this algorithm in TypeScript:

```ts
const isPrime = (n: number): boolean => {
    for(let i=2; i<n; ++i) {
        if(n%i === 0) {
            return false;
        }
    }

    return true;
}
```

The time complexity of this algorithm is `O(N)`, which is not too bad, but we can optimize it further.

One way to reduce the number of operations is to exclude even numbers, as all prime numbers (except 2) are odd.

The code with this optimization applied would be as follows.

```ts
const isPrime = (n: number): boolean => {
    if(n === 2) return true;
    if(n % 2 === 0) return false;

    for(let i=3; i<n; i += 2) {
        if(n%i === 0) {
            return false;
        }
    }

    return true;
}
```

While we have reduced the number of operations, it is worth noting that this algorithm still has a linear time complexity.[^1]

[^1]: O(N/2) → O(N)

Is it possible to improve upon the linear time complexity of this algorithm?

Yes.

## Square Root

To achieve a more efficient primality test algorithm, we can limit our checks to numbers up to the square root of `n`.

If `n` is not a prime number, it can be represented as a product of two factors, `p` and `q`. And at least one of these factors will be less than or equal to the square root of `n`.

By taking advantage of this fact, we can rewrite our algorithm like this:

```ts
const isPrime = (n: number): boolean => {
    if(n === 2) return true;
    if(n % 2 === 0) return false;
    const UPPER_BOUND = Math.sqrt(n);

    for(let i=3; i<=UPPER_BOUND; i += 2) {
        if(n%i === 0) {
            return false;
        }
    }

    return true;
}
```

The time complexity of this algorithm is `O(sqrt(N))`.

We can further reduce the number of operations by utilizing the properties of `6k - 1` and `6k + 1`.

## 6k ± 1

All prime numbers can be expressed in the form of `6k - 1` or `6k + 1`, except for 2 and 3.

- 6k
- 6k + 1 & 6k - 1
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

From these values, we can see that `6k`, `6k ± 2`, `6k + 3`, and `6k + 4` are all divisible by 2 or 3, and thus cannot be prime. This leaves us with `6k ± 1`.

Therefore, we can optimize our algorithm by only checking the values of 6k - 1 and 6k + 1.

```ts
const isPrime = (k: number): boolean => {
    if (k <= 1) 
        return false; // 0 and 1 are not prime
    if (k === 2 || k === 3) 
        return true; // 2 and 3 are prime
        
    if (k % 2 === 0 || k % 3 === 0) 
        return false; // // factors of 2 and 3 are not prime
        
    for (let i = 5; i * i <= k; i += 6) {  // check numbers from 5 to sqrt(k)
        if (k % i === 0 || k % (i + 2) === 0) 
            return false; // if k is divisible by 6k-1 or 6k+1, it's not a prime
    }

    return true; 
}
```

The time complexity of this optimize algorithm is `O(sqrt(N))`이다.[^2]

[^2]: O(sqrt(N) / 6) → O(sqrt(N))

## Sieve of Eratosthenes

The Sieve of Eratosthenes is an algorithm for finding all prime numbers up to `N`. The algorithm starts by creating a list of numbers from `2` to `N`, and then iteratively marking the multiples of each prime number as composite (not prime). At the end of the algorithm, the numbers that have not been marked as composite are the prime numbers.

[^src1]
![sieve](https://upload.wikimedia.org/wikipedia/commons/b/b9/Sieve_of_Eratosthenes_animation.gif)

[^src1]: [Sieve of Eratosthenes Animation](https://ko.wikipedia.org/wiki/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98_%EC%B2%B4#/media/%ED%8C%8C%EC%9D%BC:Sieve_of_Eratosthenes_animation.gif)

The specific steps of the algorithm are as follows:

1. List all natural numbers from `2` to `N`.
2. Find the smallest prime number `p` that has not been processed among the remaining numbers.
3. Remove all multiples of `p` among the remaining numbers (except for `p` itself).
4. Repeat steps 2 and 3 until there are no more numbers left to process.

The code with this algorithm is as follows:

```ts
const sieve = (n: number): boolean => {
    const SIZE: number = n+1;
    // ⑴
    let arr: boolean[] = new Array(SIZE).fill(true);
    arr[0] = false;
    arr[1] = false;

    let p = 2;
    // ⑷
    while(p < SIZE) {
        if(arr[p]) { // ⑵
            for(let i=p+p ;i < SIZE; i += p) {
                // ⑶
                arr[i] = false;
            }
        }

        p += 1;
    }

    return arr[n];
}
```

The time complexity of the Sieve of Eratosthenes algorithm is `O(n log log n)`.[^3]

[^3]: n/2, n/3, n/5, n/7, ... n/p → integral of 1/ln(x) from 2 to n → ln(ln(n)) + O(1) → O(n*log(log(n))) ([참고](https://www.geeksforgeeks.org/how-is-the-time-complexity-of-sieve-of-eratosthenes-is-nloglogn/))
---
title: '🍰 933. Number of Recent Calls'
date: '2023-09-22 09:15:00'
lang: 'en'
type: 'ps'
---

- Difficulty: 🍰 Easy
- [Problem Link](https://leetcode.com/problems/number-of-recent-calls/description/?envType=study-plan-v2&envId=leetcode-75)

### Problem

You have a `RecentCounter` class which counts the number of recent requests within a certain time frame.

Implement the `RecentCounter` class:

- `RecentCounter()` Initializes the counter with zero recent requests.
- `int ping(int t)` Adds a new request at time `t`, where `t` represents some time in milliseconds, and returns the number of requests that has happened in the past `3000` milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range `[t - 3000, t]`.

It is **guaranteed** that every call to `ping` uses a strictly larger value of `t` than the previous call.

---

### Solution

I created an array that will act as a queue, `q`. As a new request at a time `t` is added to our queue, we check our queue and dequeue every _time_ that is outside of the time frame `[t-3000, t]`. Lastly, we return the size of the queue because that's the number of recent requests within the time frame.

The time complexity is `O(N)`, where `N` is the size of the array.

```ts
class RecentCounter {
  private q: number[] = []
  constructor(public counter: number) {}

  ping(t: number): number {
    this.q.push(t)
    let lb = t - 3000
    let ub = t

    while (this.q[0] < lb || this.q[0] > ub) {
      this.q.shift()
    }

    return this.q.length
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
```

---
title: 'Simulating a fixed array in JavaScript'
posttitle: 'Simulating a fixed array in JavaScript'
date: '2023-07-30 10:49:00'
published: '2023-07-30 11:31:00'
---

Arrays in JavaScript are dynamic in nature, which means that the length of the array can be modified at runtime.
This posed a problem during my data structure study, as we were attempting to implement a stack and queue using a fixed-size array.

```js
let arr = new Array(2)

arr[0] = 1
arr[1] = 2
arr.push(3) // we want an error: "The array is full"
arr.push(4) // but it works fine

console.log(arr)
// [1, 2, 3, 4]
```

There are two ways to prevent JavaScript from modifying the array: `Object.seal()` and `Object.freeze()`. However, _freezing_ is not a good option here because it will make your object read-only.

> "A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned"

By _sealing_ the array object, we can modify the existing array and prevent a user from inserting an additional data beyond the given size.

```js
let arr = new Array(2)

arr.fill(undefined)
Object.seal(arr)

arr[0] = 1
arr[1] = 2
arr[2] = 3 // doesn't work
console.log(arr)
// [1, 2]

arr.push(4) // error
console.log(arr)
// [1, 2]
```

It's important to note that you cannot modify an empty array. Therefore, before sealing it, I filled the array with `undefined`, but you can use any other values for filling.

Now, with `Object.seal()`, I can create a fixed-size stack and queue.

```js
export class StackArray<T> {
  ...

  constructor(size: number) {
    this.stack = new Array<T>(size);

    if (Object.seal) {
      this.stack.fill(undefined);
      Object.seal(this.stack);
    }
  }
}
```

```js
export class Queue<T> {
  ...

  constructor(size: number) {
    this.queue = new Array<T>(size);

    if (Object.seal) {
      this.queue.fill(undefined);
      Object.seal(this.queue);
    }
  }
}
```

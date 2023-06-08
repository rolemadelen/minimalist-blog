---
title: '[JavaScript] process.stdout.write vs. console.log'
posttitle: 'process.stdout.write vs. console.log'
date: '2023-05-24 21:58:00'
uid: 'fb'
---

From the Node.js documentation for [Console](https://nodejs.org/api/console.html#console), it states the following:

> "A global `console` instance is configured to write to `process.stdout` and `process.stderr`. The global `console` can be used without calling `require('node:console')`."

So it seems that `console.log` essentially invokes `process.stdout.write` in a formatted manner, adding a newline at the end. Therefore, `console` acts as a wrapper for `process.stdout.write` in some sense... perhaps?

I also discovered that only strings can be passed to `process.stdout.write`:

```sh
test.ts:3:22 - error TS2769: No overload matches this call.
  Overload 1 of 2, '(buffer: string | Uint8Array, cb?: (err?: Error) => void): boolean', gave the following error.
    Argument of type 'number' is not assignable to parameter of type 'string | Uint8Array'.
  Overload 2 of 2, '(str: string | Uint8Array, encoding?: BufferEncoding, cb?: (err?: Error) => void): boolean', gave the following error.
    Argument of type 'number' is not assignable to parameter of type 'string | Uint8Array'.

3 process.stdout.write(1);
```

However, with `console.log`, I can display any type of value:

```js
console.log(undefined);
console.log(null);
console.log(17);
console.log("hello world");
console.log(true);
console.log(false);
```

We can observe that `console.log` applies some formatting to the passed argument(s) and displays them with a newline.
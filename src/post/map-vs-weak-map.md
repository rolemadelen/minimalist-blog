---
title: "Map vs. Weak Map"
posttitle: "Map vs. Weak Map"
date: "2023-07-12 11:21:00"
published: "2023-07-12 12:14:00"
---

JavaScript provides two different types of Map data structures: one that stores the key (_Map_) and the other
that stores a reference to the key (_Weak Map_).

## Map

A map is an unordered list of key-value pairs. A key can be of any type, such as number, boolean, string, object, etc.

```text
Map(5) {
  1 => 'one',
  true => 'true',
  { x: 0, y: 0 } => 'mouse position',
  [Function: foo] => 'function',
  [ 1, 2, 3 ] => 'array'
}
```

## Weak Map

A WeakMap is similar to Map in that it stores key-value pairs. However, a WeakMap only allows objects
and functions to be used as keys. WeakMaps are primarily used to store weak object references, and you'll
encounter an error if you try to store other data types. Additionally, it's not possible to iterate through
a WeakMap.

```js
const weakMap = new WeakMap();

const foo = function () {
  console.log("hello");
};
const mouseObj = { x: 0, y: 0 };

weakMap.set(mouseObj, "mouse position");
weakMap.set(foo, "hello world function");

// output: WeakMap { <items unknown> }
console.log(weakMap);

// output: hello world function
console.log(weakMap.get(foo));

// output: mouse position
console.log(weakMap.get(mouseObj));

// TypeError: Invalid value used as weak map key
weakMap.set("test", "whoops");
```

## Garbage Collector

The keys stored in a WeakMap are weakly referenced, which means that the garbage collector can remove the key pointer from the WeakMap
and subsequently remove the key from memory. In contrast, in a regular map, the keys remain in memory
unless the Map itself is explictily removed.

---

### Sidenote

If you come from another programming language where you use bracket notation to insert data into a map,
you need to be careful when using JavaScript because in this case, you're adding a property,
not an entry.

```js
const weakMap = new WeakMap();
weakMap["test"] = "whoops";

// output: whoops
console.log(weakMap["test"]);
// output: whoops
console.log(weakMap.test);
```

Don't make the above error (_like myself_) and think, "Oh, I can use a string as a key in WeakMap".
If you use a regular Map and attempt the same operation, you will realize
that the entry length is still zero.

```js
const map = new Map();
map["test"] = "whoops";

// output: 0
console.log(map.size);
```

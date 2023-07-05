---
title: "Mobs are attacking you (feat. Linked List)"
posttitle: "Mobs are attacking you (feat. Linked List)"
date: "2023-07-05 09:00:00"
published: ""
---

Linked List is a linear data structure composed of nodes where each node contains a data field and a reference to the next and/or previous node in the list. Unlike Arrays, the order of nodes in the list is NOT given by their physical placement in memory.

We're going to create a simple game utilizing a linked list. Let's imagine you have a mob class defined as follows. A mob has a `name` and deals a certain amount of `damage` when attacking the player.

```ts
class Mob {
  constructor(
    //
    readonly name: string,
    readonly damage: number
  ) {}

  attack(player: Player) {
    player.damaged.pushBack(this.damage);
  }
}
```

In this imaginary game scenario, when mobs attack the player, the system accumulates the
damage inflicted by each attack until the player is `ready` to face the consequences.
Speaking of a player, here's the definition of the `Player` class.

```ts
class Player {
  private level = 1;
  private hp = 25;
  readonly damaged: SinglyLinkedList<number>;

  constructor(public readonly name: string) {
    this.damaged = new SinglyLinkedList<number>();
  }

  ready() {
    while (!this.damaged.isEmpty()) {
      const dmg = this.damaged.popFront();
      this.hp -= dmg.value;
    }
  }
}
```

`damaged` is a singly linked list with a tail pointer that implements the following interface. Let's go through and implement each of the functions listed below; except the _empty_ function because it's trivial.

```ts
interface ILinkedList<T> {
  isEmpty(): boolean;
  pushFront(data: T): void;
  pushBack(data: T): void;
  popFront(): NodeType<T>;
  popBack(): NodeType<T>;
}
```

## Implementation

### pushFront

Inserting a node at the beginning of the linked list is a straightforward process. If the list already exists, we can simply link the new node with the existing head and update the head pointer. If the list is empty, we can set the new node as the head of the list.

```ts
  pushFront(data: T) {
    const newNode = new Node<T>(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;
  }
```

### pushBack

If we didn't tracked the last node in the list using a tail pointer, inserting a node at the end would require iterating through the list from the head until reaching the last node. Then, we would link the new node at the end. However, since we have a tail pointer, the process becomes similar to `pushFront`. If the list is empty, we set the new node as both the tail and head pointer. If the list is not empty, we can link the new node with our tail node and update the tail pointer.

```ts
  pushBack(data: T) {
    const newNode = new Node<T>(data);

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }
```

### popFront

When removing a node from the linked list, the first step is to check if the list is empty. If it is empty, there are no nodes to remove, so we can return `null` to indicate that no removal took place.

If the list is not empty, we can simply move the current head pointer to the next node. In order to return the removed node, we can store the current head in a separate variable before updating it. This way, we can safely return the saved variable, which represents the removed node.

```ts
  popFront(): NodeType<T> {
    if (this.isEmpty()) return null;

    let removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removedNode;
    }

    this.head = this.head && this.head.next;
    this.length -= 1;

    return removedNode;
  }
```

### popBack

Removing a node at the end of the list is a bit more complex. We need to access the node just before the tail pointer in order to disconnect the link and update the tail. To accomplish this, we have no choice but to iterate through the list from the beginning until we reach the second-to-last node[^1]. This operation will have a linear time complexity due to the traversal of the list.

[^1]: By using a doubly linked list with references to the next and previous nodes, we can achive constant time complexity for removing node at the end of the list.

```ts
  popBack(): NodeType<T> {
    if (this.isEmpty()) return null;
    let removedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removedNode;
    }

    let curr = this.head;
    while (curr && curr.next != this.tail) {
      curr = curr.next;
    }

    removedNode = this.tail;
    if (curr) {
      curr.next = null;
      this.tail = curr;
      this.length -= 1;
    }

    return removedNode;
  }
```

## Am I going to survive?

Let's see if our player can survive after enduring 50 attacks from our colorful snails.

```ts
const greenSnail = new Mob("Green Snail", 1);
const blueSnail = new Mob("Blue Snail", 3);
const redSnail = new Mob("Red Snail", 5);

const madelen = new Player("madelen");

let turn = Math.floor(Math.random() * 50) + 1;
while (turn) {
  switch (Math.floor(Math.random() * 3) + 1) {
    case 1:
      greenSnail.attack(madelen);
      break;
    case 2:
      blueSnail.attack(madelen);
      break;
    case 3:
      redSnail.attack(madelen);
  }
  turn -= 1;
}

madelen.ready();
```

![mob](/images/mob.gif)

---
title: '[Algorithm] 선형 탐색 (Linear Search)'
posttitle: '선형 탐색 (Linear Search)'
date: '2022-10-23 12:00:00'
uid: 'bb'
---

'선형'이란 이름에서도 알 수 있듯이, 해당 알고리즘은 리스트의 모든 요소를 하나하나 확인하며 값이 존재하는지 확인한다. 그렇기 때문에 리스트의 정렬 여부가 알고리즘 성능에 영향을 끼치지 못한다.

## 복잡도

리스트의 크기가 `n`일 때, `[0]` 요소부터 `[n-1]`까지 탐색하기 때문에 시간복잡도는 `O(N)`이 된다.

탐색하는 과정에서 추가로 메모리를 할당하거나 하는 과정이 없기 때문에 공간복잡도는 `O(1)`이다.

| 시간 복잡도 | 공간 복잡도 |
| :---------: | :---------: |
|    O(N)     |    O(1)     |

## 의사코드

```text
LinearSearch(T[] arr, int len, T target) → number
    Pre: arr is the array of type T
         len is the total size
         target is the value we'll look for from the list
    Post: we know the exact position of the value in the list; -1 if not in the list.

    i ← 0
    WHILE (i < len)
        IF (arr[i] == value)
            return i
        END IF

        i ← i + 1
    END WHILE

    return -1
END LinearSearch
```

## 구현

```ts
interface Array<T> {
    linearSearch(target: number): number;
}

Array.prototype.linearSearch = (target) => {
    const length = arr.length;

    for (let i = 0; i < length; ++i) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
};

console.log(arr.linearSearch(1)); // 0
console.log(arr.linearSearch(5)); // 4
console.log(arr.linearSearch(10)); // -1
```

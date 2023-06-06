---
title: '이진 탐색 (Binary Search) 알고리즘'
posttitle: '이진 탐색 (Binary Search)'
date: '2022-10-23 12:50:00'
uid: 'da'
---

검색 범위를 줄여 나가면서 원하는 데이터를 검색하는 알고리즘.

리스트를 동일한 크기의 부분 리스트로 나누어 필요한 부분에서만 검색한다. 이를 위해서 리스트가 정렬되어 있어야 한다.

---

예를 들어 리스트 `[1,2,3,4,5]`가 있고, `2`를 찾고자 한다. 과정은 아래와 같다.

-   [1,2,3,4,5] → `3`과 비교. `3 > 2`이므로 `3` 이후에 있는 요소들은 검색 범위에서 제외.
-   [1,2] → `1`과 비교. `1 < 2` 이므로 `1`이전에 있는 요소들을 검색 범위에서 제외.
-   [2] → `2`와 비교. `2 == 2` 값을 찾았으므로 인덱스를 반환.

## 복잡도

검색 범위가 매회 절반으로 줄어들기 때문에 시간 복잡도는 O(logN)이 된다.
검색하는 과정에서 추가로 공간이 필요하지 않기 때문에 공간 복잡도는 O(1)이 된다.

| 시간 복잡도 | 공간 복잡도 |
| :---------: | :---------: |
|   O(logN)   |    O(1)     |

## 의사코드

```text
BinarySearch(arr, len, value) → number
    Pre: arr is a sorted array
         len is the total size
         value is the target to look for in the array
    Post: we know the index of the value in the list; -1 if DNE

    low  ← 0
    high ← n-1

    WHILE (low <= high)
        mid ← low + ((high - low) / 2)

        IF (arr[mid] == value)
            return mid
        ELSE IF (arr[mid] < value)
            low ← mid + 1
        ELSE
            high ← mid - 1
        END IF
    END WHILE

    return -1
END BinarySearch
```

## 구현

```ts
interface Array<T> {
    binarySearch(target: number): number;
}

Array.prototype.binarySearch = function (target) {
    let low = 0;
    let high = this.length - 1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (this[mid] === target) {
            return mid;
        }

        if (this[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr.binarySearch(3));
```

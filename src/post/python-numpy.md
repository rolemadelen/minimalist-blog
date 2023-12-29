---
title:  "Python for Data Analysis - Numpy"
date:   "2022-01-31 07:00:00"
lang: 'ko'
---

# Numpy 준비하기

[Anaconda](https://www.anaconda.com/products/individual) 환경이라면 `conda`, 그렇지 않다면 `pip`를 사용하여 `numpy`를 설치해준다.
```shell
$ conda install numpy
 or
 $ pip install numpy
```

제대로 설치가 되었다면 파이썬 interactive shell에서 `import` 해보자.
```py
>>> import numpy as np
```

# Numpy 배열

## 파이썬 리스트에서 numpy 배열 만들기

```py
mylist = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 np.array(mylist)
  array([  1,   2,   3,   4,   5,   6,   7,   8,   9])

 mylist2 = [[1,2,3], [4,5,6], [7,8,9]]
 np.array(mylist)
  array([[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]])

```

## numpy built-in 메소드 사용

```py
np.arange(1, 10)
  array([1, 2, 3, 4, 5, 6, 7, 8, 9])
 
 np.arange(1, 101)
  array([1, 2, 3, ..., 98, 99, 100])
```

## zeroes() & ones()
`zeros`와 `ones`는 각각 `0`과 `1`의 배열을 만들때 사용하는 메소드이다.

```py
np.zeros(3)  array([0., 0., 0.])
 np.ones(3)  array([1., 1., 1.])
```

## linspace()

문법: `numpy.linspace(start, stop, n)` -- `start`와 `stop`사이를 `n`개의 균일한 간격으로 나눠주는 함수.

```py
np.linspace(0, 10, 3)
  array([ 0.,  5., 10.])
 
 np.linspace(0, 10, 4)
  array([ 0.        ,  3.33333333,  6.66666667, 10.        ])
```

## eye()
단위 행렬(Identity Matrix)를 만들 때 사용하는 함수

```py
np.eye(3)
  array([[1., 0., 0.],
        [0., 1., 0.],
        [0., 0., 1.]])
```

# 난수 (Random)

## rand()

`rand(n)` 함수는 [0, 1) 범위의 균일한 분포로부터 샘플링된 `n`개의 난수를 반환한다.

```py
np.random.rand(2)
  array([0.60813646, 0.02227888])
 
 np.random.rand(5) 
  array([0.78071868, 0.41576468, 0.12461101, 0.35558746, 0.41081693])
```

## randn()
`randn(n)`은 `rand`와는 다르게 표준 정규 분포(standard normal distribution)로부터 샘플링된 난수를 반환한다.
```py
np.random.randn(2)
  array([-2.70796513, -0.81136033])
 
 np.random.randn(5)
  array([ 0.47264387, -0.96997734,  0.30014722,  0.73124038, -1.67470256])
```

## randint()
문법: `randint(low, high, n)` -- `[low, high)` 사이의 정수형 난수를 `n`개 반환한다. `high`는 포함되지 않는다.
  
```py
np.random.randint(0, 10, 1) 
  0 부터 9까지의 숫자 중 하나가 출력 됨
```

`randint()`를 사용해서 임의의 값을 가진 배열을 만들 수 있다.
```py
arr = np.arange(10)
 randarr = np.random.randint(0, 50, 10)
 
 print(arr)      array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
 print(randarr)  array([40, 32,  1,  2, 22, 31, 37, 18,  7,  8])
```

## 최대값 & 최소값 (max & min)

- `max`함수는 최대값, `min`함수는 최소값을 구할 때 사용된다. 
- `argmax()`와 `argmin()`을 사용하여 최대값과 최소값의 위치를 인덱스로 받아 올 수 있다.

```py
arr = np.random.randint(0, 10, 10)
print(arr)
 array([9, 9, 6, 3, 9, 5, 5, 6, 0, 6])

arr.max()  9
arr.min()  0

arr.argmax()  0
arr.argmin()  8

print(arr[arr.argmax()] == arr.max())  True
print(arr[arr.argmin()] == arr.min())  True
```


# 구조 재배열 (Reshape)
`reshape`함수는 배열과 차원을 변형할 때 사용되는 함수이다. `arr.reshape(row, col)`과 같이 사용하며 `row`열과 `col`행의 구조로 변형된다.

`row` * `col`이 본래의 배열 요소의 개수와 일치해야 한다. 1차원 배열은 `1 * col`과 같기 때문.
  
```py
arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
 print(arr)
  array([ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10])

 arr.reshape(2,5)
  array([[ 1,  2,  3,  4,  5],
         [ 6,  7,  8,  9, 10]])
 
 arr.reshape(5,2)
  array([[ 1,  2],
         [ 3,  4],
         [ 5,  6],
         [ 7,  8],
         [ 9, 10]])

 arr.reshape(3,3)
  Traceback (most recent call last):
   File "<stdin>", line 1, in <module>
  ValueError: cannot reshape array of size 10 into shape (3,3)
```

# 배열 속성

## shape

`shape`은 메소드가 아닌 배열의 속성으로써 현 배열의 구조를 파악하는데 도움을 준다.

```py
arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
 arr.shape  (10,)
 
 arr.reshape(2, 5).shape  (2, 5)
 arr.reshape(10, 1).shape  (10, 1)
 arr.reshape(1, 10).shape  (1, 10)
```

## dtype

`dtype` 속성을 사용하여 배열의 자료형을 파악할 수 있다.

```py
arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
 arr.dtype  dtype('int64')
 
 arr = np.random.rand(10)
 arr.dtype  dtype('float64')
 
 arr = np.array([True, False])
 arr.dtype  dtype('bool')
```

---

# Numpy 인덱싱 & 선택 영역 (Indexing & Selection)

## 첨자(`[]`) 연산자 (Subscript Operator)
Numpy의 배열도 파이썬의 일반 배열처럼 `[]`연산을 사용하여 요소에 접근할 수 있다.

```py
arr = np.arange(10)
 
 print(arr)  [0 1 2 3 4 5 6 7 8 9]
 print(arr[0])  0
 print(arr[-1])  9
 
 print(arr[:5])  [0 1 2 3 4]
 print(arr[5:])  [5 6 7 8 9]
 
 print(arr[0:3])  [0 1 2]
 print(arr[3:6])  [3 4 5]
```

## 브로드캐스팅 (Broadcasting)

`[0, 2, 6]`과 같은 배열이 있고 모든 요소에 `3`을 추가하기 위해서는 보통 반복문을 사용해서 각 요소에 값을 더해줘야 한다.
아래와 같은 연산은 불가능하다.
```py
arr = [0, 2, 6]
 print(arr)  [0, 2, 6]
 arr[:] += 3
  Traceback (most recent call last):
   File "<stdin>", line 1, in <module>
  TypeError: 'int' object is not iterable
```

하지만 Numpy 배열에는 브로드캐스팅(broadcasting)이라는 기능이 있어, 이와 같은 연산이 가능하다.

```py
arr = np.array([0, 2, 6])
 print(arr)  [0 2 6]
 
 arr[:] += 3
 print(arr)  [3, 5, 9]
```

브로드캐스팅으로 바뀐 값들은 단순 복사된 모드 개체들에 영향을 끼친다.
```py
arr = np.arange(10)
 print(arr)  [0 1 2 3 4 5 6 7 8 9]
 
 copy_arr = arr[:3]
 print(copy_arr)  [0 1 2]
 
 copy_arr[:] = 99
 print(copy_arr)  [99 99 99]

 print(arr)  [99 99 99 3 4 5 6 7 8 9]
```

이는 메모리 문제를 예방하기 위한 것으로, 만약 전체 복사(deep copy)를 하고 싶다면 `copy()` 함수를 사용해서 배열을 복제한 후, 브로드캐스팅을 하면 본래의 배열에는 영향이 가지않는다.

## 2차원 배열 인덱싱 (Indexing 2D Arrays)

아래와 같은 배열이 있다.
```py
arr = np.arange(1,10).reshape(3,3)
 print(arr)
  [[1 2 3]
   [4 5 6]
   [7 8 9]]
```

일반 파이썬과 같이 `[row][col]`으로 접근이 가능하다.
```py
print(arr[0])  [1 2 3]
 print(arr[0]0])  1
 print(arr[-1][0])  7
```

하지만 Numpy 배열은 훨씬 편한 방법을 제공한다.
```py
print(arr[0, 0])  1
 print(arr[-1, 0])  7
```

## 2차원 배열 슬라이싱 (Slicing 2D Arrays)

위와 동일한 2차원 배열이 있다.
```py
arr = np.arange(1,10).reshape(3,3)
 print(arr)
  [[1 2 3]
   [4 5 6]
   [7 8 9]]
```

`arr[r1:r2, c1:c2]`과 같은 형식으로 원하는 열과 행을 가져올 수 있다.

```py
print(arr[1:,])
  [[4 5 6]
   [7 8 9]]

 print(arr[1:, :2])
  [[4 5]
   [7 8]]

 print(arr[1:, :1])
  [[4]
   [7]]

 print(arr[:, :1])
  [[1]
   [4]
   [7]]
```

## 선택 영역 (Selection)

Numpy 배열과 논리 연산을 수행하여 해당 논리에 `True`값이 나오는 요소들만 선택해서 반환할 수 있다.

예를들어 0~10의 배열에서 짝수와 홀수를 따로 추려내고 싶다면 아래와 같은 연산이 가능하다.
```py
arr = np.arange(10)  [0 1 2 3 4 5 6 7 8 9]
arr[arr % 2 == 0]  [0 2 4 6 8]
arr[arr % 2 != 0]  [1 3 5 7 9]
```

# 범용 함수 (Universal Functions)
위에서 `max()`, `min()`과 같은 기본 내장 함수들을 살짝살짝 소개했었는데, 이 외에도 numpy는 수많은 [범용 함수](https://numpy.org/doc/stable/reference/ufuncs.html)들을 지원한다.

수학 관련 함수 몇 개만 소개하자면 아래와 같은 것들이 있다. 어떤 동작을 하는지 모르겠다면 범용 함수 문서를 살펴보도록 하자.
```py
arr = np.arange(1, 11)

np.sqrt(arr)
np.exp(arr)
np.std(arr)

np.sin(arr)
np.cos(arr)

np.log(arr)
```
---
title:  "Python Fundamentals"
date:   "2022-01-30 07:00:00"
lang: 'ko'
---

# 정수형 (Integer)

```py
a = 2
 b = 5
 
 print(a+b)   2+5 = 7 
 print(a*b)   2*5 = 10
 print(a**b)  2^5 = 32
 print(b**a)  5^2 = 25
 print(b%a)   5%2 = 1
 print(b//a)  5/2 = 2
```

# 실수형 (Float)

```py
a = 2.5
 b = 5.
 c = a/b   2.5 / 5.0 = 0.5
 
 print(c)  0.5
 print(d)  0
```

# 문자열 (Strings)

```py
str1 = 'hello'
 str2 = "world" 

 print(str1)  hello
 print(str2)  world

 print(str1 + " " + str2)  hello world

 print("{} {}".format(str1, str2))  hello world
 print("{a} {b}".format(a=str1, b="Blue"))  hello Blue

 print("{} {a} {}".format(str1, str2, a="..."))  hello ... world
```

# 문자열 자르기

`문자열[start:end)` - `start`인덱스에서 `end`까지의 문자들을 가져온다. 
```py
s = "My_name_is_Blue"

 print(s[0:])  My_name_is_Blue
 print(s[0:2])  My
 print(s[3:7])  name
```

# 리스트 (Lists)

간단한 리스트 (1차원)
```py
a = [1,2,3]
 print(a)  [1, 2, 3]
 print(a[0])  1
 print(a[1])  2
 
 a.append(4)
 print(a)  [1, 2, 3, 4]
 print(a[0:2])  [1, 2]
```

리스트의 리스트.. (n차원)
```py
b = [1, [2, 3], 'hello']
 print(b[1])  [2, 3]
 print(b[1][0])  2
 print(b[2])  'hello'

 b[1] = 5
 print(p)  [1, 5, 'hello']
 
 c = [1, [2, [3]]]
 print(c[1])  [2, [3]]
 print(c[1][1])  [3]
 print(c[1][1][0])  3
```

- 리스트는 **mutable**이므로 **값의 변경이 가능**하다.

# 딕셔너리 (Dictionary)

```py
d = {
     'name': 'Blue',
     'age' : 20,
     'langs': ['en', 'ko']
 }
 
 print(d)  {'name': 'Blue', 'age': 20, 'langs': ['en', 'ko'] }
 print(d['name'])  'Blue'
 print(d['age'])   20
 print(d['langs'])  ['en', 'ko']
 print(d['langs'][0])  'en'
```

# 불리언 (Boolean)

```py
print(0 == 0)  True
 print(0 == 1)  False

 print(not True)  False
 print(not False)  True
```

참(`True`)과 거짓(`False`)을 나타내는 자료형.

```py
age = 20

 if(age == 20):
     print("20살 입니다.")
 else:
     print("20살이 아닙니다.")

  참이므로 '20살 입니다."를 출력
```

# 튜플 (Tuples)

```py
t = (1,2)
 print(t)  (1, 2)
 print(t[1])  2
 
 t[0] = 3  TypeError: 'tuple' object does not support item assignment
```

- 튜플은 **immutable**이므로 **값의 변경이 불가능**하다.

# 집합 (Sets)

```py
days = {"monday, monday, tuesday, wednesday, tuesday"}
 print(days)  {'wednesday', 'tuesday', 'monday'} 

 days.add('friday')
 print(days)  {'wednesday', 'friday', 'tuesday', 'monday'}
```

# 비교 연산자 (Comparison Operators)

```py
print(1 < 2)    True
 print(1 > 2)   False
 print(2 <= 2)  True
 print(2 >= 2)  True

 print("abc" == "def")  False
 print("abc" != "def")  True 
```

# 논리 연산자 (Logical Operators)

- `and`는 조건이 **모두** 참이어야 `True`
- `or`은 조건 중 **하나**만 참이면 `True`
  
```py
print(True and True)  True
 print(True and False)  False

 print(True or True)  True
 print(True or False)  True
 print(False or False)  False
```

# 조건문 (Coditional Statements)

```py
score = 75

if score >= 90:
    printf("A")
elif score >= 80:
    printf("B")
elif score >= 70:
    print("C")
elif score >= 60:
    print("D")
else:
    print("Fail")

 'C'가 출력된다
```

# 반복문 (Loops)

`for` 반복문
```py
colors = ["Blue", "Pink", "Purple"]

for color in colors:
    print(color)

 Blue
 Pink
 Purple
```

`while` 반복문
```py
sum = 0
num = 1
while num < 101:
    num += 1
    sum += num

print("1부토 100까지 더한 값은: {}".format(sum))  1부터 100까지 더한 값은: 5050
```

`range()` 범위 지정
```py
for i in range(0, 100):
    print(i)
     0, 1, 2, ..., 98, 99 

for i in range(0, 100, 2):
    print(i)
     0, 2, 4, ..., 94, 96, 98 
```

`list`와 `range()`를 사용하여 원하는 범위의 리스트를 만들 수 있다.
```py
list(range(10, 21))  [10, 11, ...., 19, 20]
```


# 함수 (Functions)

짝수인지 홀수인지 판별해주는 함수
```py
def isEven(number):
    return number % 2 == 0

print("2: {}".format(isEven(2)))  2: True
print("1: {}".format(isEven(1)))  1: False
print("0: {}".format(isEven(0)))  0: True
```

인사하는 함수. `hello()`함수를 인자 없이 호출하면 디폴트 값인 `Blue`가 출력된다. 
```py
def hello(name = "Blue"):
    print("Hello {}".format(name))

hello()  Hello Blue
hello('James')  Hello James
```

# 람다식 (Lambda Expression)

위에서 작성한 `isEven(number)`함수를 람다식으로 작성하면 아래와 같다.

```py
def isEven(n):
    return n % 2 == 0

 lambda expression
isEven = lambda n: n % 2 == 0
```

람다식을 `map` 또는 `filter`와 같은 구조에 가져다 사용할 수 있다.

# 맵 (Map)

위에서 만든 람다식으로 0부터 10의 숫자들이 각각 짝수인지 홀수인지 확인해보자. 짝수면 `True` 홀수면 `False`이다.
```py
isEven = lambda n: n % 2 == 0
nums = list(range(0, 11))  [0, 1, 2, ..., 8, 9, 10]

list(map(isEven, nums))  [True, False, True, ..., True, False, True]
```

`map`에서 직접 람다식을 작성해도 된다.
```py
list(map(lambda n: n*2, nums))  [0, 2, 4, ..., 16, 18, 20]
```

# 필터링 (Filter)
`map`이 각 원소에 해당 람다식을 적용시킨 것이라면, `filter`는 람다식 조건에 부합하는 값들만 추려서 반환한다.

```py
isEven = lambda n: n % 2 == 0
nums = list(range(0, 11))  [0, 1, 2, ..., 8, 9, 10]

list(filter(isEven, nums))  [0, 2, 4, 6, 8, 10]
list(filter(lambda n: n > 5, nums))  [6, 7, 8, 9, 10]
```
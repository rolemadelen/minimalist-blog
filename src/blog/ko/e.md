---
title: '소수를 구하는 여러 가지 방법'
posttitle: '소수를 구하는 여러 가지 방법'
date: '2023-04-03 06:45:00'
uid: 'e'
---

## 소수(Prime Number)란

소수(素數)는 1보다 큰 자연수 중에서 1과 자기 자신만을 약수로 가지는 수를 말한다. 즉, 2, 3, 5, 7, 11, 13, 17, ... 등이 소수다. 반대로, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, ... 등은 소수가 아니다.

## 일반적인 방법

`2`부터 `n-1`까지 순회하여 `n`을 나누어보는 방법은 가장 간단한 방법의 하나이다. 만약 `n`을 나누어떨어지게 하는 수가 있다면, 해당 숫자는 소수가 아니다.

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

이 알고리즘의 시간 복잡도는 `O(N)`로 비효율적이다. 

짝수인 소수는 `2`가 유일하기 때문에 `2`를 먼저 확인하고, 홀수만 확인하는 방법으로 연산 횟수를 조금 줄일수있다. 

이를 적용한 코드는 다음과 같다.

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

연산횟수를 줄였지만, 여전히 `O(N)`의 시간복잡도를 가진다. [^1]

[^1]: O(N/2) → O(N)

## 제곱근

제곱근을 활용한 소수 찾기 방법은 더 효율적인 알고리즘 중 하나이다.

`n`이 소수가 아니라면 `n`은 두 개의 자연수 `p`와 `q`의 곱으로 표현될 수 있다. 이때, `p`와 `q` 중 하나는 반드시 `n`의 제곱근 이하의 값이 된다.

이 사실을 이용하여 알고리즘을 구현할 경우, `2`부터 `Math.sqrt(n)`까지의 수로 `n`을 나누어떨어지게 하는지 검사하면 된다.

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

이 알고리즘의 시간복잡도는 `O(sqrt(N))`으로 `O(N)`보다 효율적이다. 

여기서 조금 더 연산횟수를 줄일 수 있다.

## 6K ± 1

소수는 2와 3을 제외하면 반드시 `6K-1` 또는 `6K+1`의 형태를 갖는다. 

- 6K
- 6K + 1 & 6K - 1
- 6K + 2 & 6K - 2
- 6K + 3 & 6K - 3
- 6K + 4 & 6K - 4
- 6K + 5 & 6K - 5

`K = 1`의 경우 아래의 값을 가진다.

- 6K → 6
- 6K ± 1 → 7 & 5
- 6K ± 2 → 8 & 4
- 6K + 3 → 9
- 6K + 4 → 10

`6K`, `6K±2`, `6K+3`, `6K+4`은 전부 `2`와 `3`의 배수이므로 소수가 아니다. 남는 것은 `6K ± 1`  뿐이다.

따라서, 우리는 `6K-1`과 `6K+1`의 값만 검사하면 된다.

```ts
const isPrime = (k: number): boolean => {
    if (k <= 1) 
        return false; // 0과 1은 소수가 아니다
    if (k === 2 || k === 3) 
        return true; // 2와 3은 소수이다
        
    if (k % 2 === 0 || k % 3 === 0) 
        return false; // // 2와 3의 배수는 소수가 아니다
        
    for (let i = 5; i * i <= k; i += 6) {  // 5부터 sqrt(k)까지 확인
        if (k % i === 0 || k % (i + 2) === 0) 
            return false; // 6K-1과 6K+1 중 하나로 나누어 떨어지면 소수가 아니다
    }

    return true;  // 나누어 떨어지지 않으면 소수이다
}
```

연산횟수가 줄어들었지만, 이 알고리즘 역시 제곱근을 이용하기 때문에 시간복잡도는 `O(sqrt(N))`이다.[^2]

[^2]: O(sqrt(N) / 6) → O(sqrt(N))

## 에라토스테네스의 체

에라토스테네스의 체(Sieve of Eratosthenes) 알고리즘은 2부터 시작하여 차례대로 배수를 지워가는 방식으로 소수를 찾는 방법이다.

알고리즘의 구체적인 방법은 다음과 같다.

1. `2`부터 `n`까지의 모든 자연수를 나열한다.
2. 남은 수 중에서 아직 처리하지 않은 가장 작은 수 `p`를 찾는다. `p`는 소수이다.
3. 남은 수 중에서 `p`의 배수를 모두 제거한다 (`p`는 제거하지 않는다).
4. 더 이상 반복할 수 없을 때까지 2번과 3번 과정을 반복한다.

[^src1]
![sieve](https://upload.wikimedia.org/wikipedia/commons/b/b9/Sieve_of_Eratosthenes_animation.gif)

[^src1]: [Sieve of Eratosthenes Animation](https://ko.wikipedia.org/wiki/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98_%EC%B2%B4#/media/%ED%8C%8C%EC%9D%BC:Sieve_of_Eratosthenes_animation.gif)


위 알고리즘을 코드로 표현하면 다음과 같다.

```ts
const sieve = (n: number): boolean => {
    const SIZE: number = n+1;
    // 1) 2부터 n까지의 모든 자연수를 나열한다.
    let arr: boolean[] = new Array(SIZE).fill(true);
    arr[0] = false;
    arr[1] = false;

    let p = 2;
    // 4) 더 이상 반복할 수 없을 때까지 2번과 3번 과정을 반복한다.
    while(p < SIZE) {
        if(arr[p]) { // 2) 남은 수 중에서 아직 처리하지 않은 가장 작은 수 p를 찾는다
            for(let i=p+p ;i < SIZE; i += p) {
                // 3) 남은 수 중에서 p의 배수를 모두 제거한다
                arr[i] = false;
            }
        }

        p += 1;
    }

    return arr[n];
}
```

에라토스테네스의 체 알고리즘의 시간복잡도는 `O(n log log n)`이다.[^3]

[^3]: n/2, n/3, n/5, n/7, ... n/p → integral of 1/ln(x) from 2 to n → ln(ln(n)) + O(1) → O(n*log(log(n))) ([참고](https://www.geeksforgeeks.org/how-is-the-time-complexity-of-sieve-of-eratosthenes-is-nloglogn/))
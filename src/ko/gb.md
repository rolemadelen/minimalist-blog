---
title: 'Regular Expression: 언어 구분하기'
posttitle: 'Regular Expression: 언어 구분하기'
date: '2022-12-19 17:00:00'
uid: 'gb'
---

사용자의 이름이 일본어인 경우 `<성> <이름>` 순으로 표기하고, 그렇지 않다면 `<이름> <성>`순으로 표기하고 싶은데 가능할까?

한 가지 방법으로는 정규 표현식(Regular Expression)이 있다.

정규 표현식 또는 정규식은 문자열에서 특정 문자 조합을 찾기 위한 패턴이다. 패턴을 사용해서 특정 문자열이 원하는 조합으로 이루어진 문자열인지 판단할 수 있다.

---

아래는 문자열이 카나(かな)와 한자(漢字)의 조합인지 검사하는 정규 표현식 패턴이다.

```js
const isJapanese = /^[一-龠ぁ-ゔァ-ヴー々〆〤]*$/;
```

이를 사용해서 특정 문자열이 일본어인지 확인할 수 있다. 일본어인 경우 `<성> <이름>`으로 출력하고 그렇지 않다면 다른 순으로 출력하면 된다.

```js
const isJapanese = /^[一-龠ぁ-ゔァ-ヴー々〆〤]*$/;

let firstName = 'たくや';
let lastName = '伊藤';

if (isJapanese.test(firstName) && isJapanese.test(lastName)) {
    // 일본어인 경우
} else {
    // 일본어가 아닌 경우
}
```

---

아래는 아스키 코드 32부터 255까지의 문자를 포함한 패턴으로, 웬만한 외국 이름에 들어가는 문자는 전부 포함되어 있다. [여기](https://grad.ucla.edu/gasaa/etd/specialcharacters.pdf)의 리스트를 참고했다.

```js
const approvedCharaters = /^[ -ÿ]*$/;
```

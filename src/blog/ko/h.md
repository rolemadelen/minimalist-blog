---
title: '<li> 태그 ::marker와 counter'
posttitle: '<li> 태그 ::marker와 counter'
date: '2023-01-12 07:00:00'
updated: '2023-03-02 07:00:00'
uid: 'h'
---

리스트 아이템(`list-item`)은 모두 `::marker` 의사 요소(pseudo-element)를 가진다. 리스트라 하면 `li` 태그만을 의미하는 것은 아니고 `display`가 `list-item`으로 설정된 모든 태그를 의미한다.

예를 들면 `h1` 태그도 리스트 아이템이 될 수 있다.

```html
<style>
    h1 {
        display: list-item;
    }
    h1::marker {
        content: '👋🏼 ';
    }
</style>

<h1>Hello</h1>
<h1>World</h1>
<h1>::marker</h1>
```

![h1 marker](/images/f/h1-marker.webp)

`list-item`으로 설정하면 해당 요소는 마커 박스(marker box)를 가지게 되며 `::marker`를 본문과 `:before`보다 앞에 추가한다.

```html
<style>
    li::marker {
        content: '👋';
    }

    li:before {
        content: 'before';
        border-radius: 5px;
        background-color: #ccc;
        padding: 2px 5px;
        margin-left: 5px;
    }
</style>
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>
```

![marker box](/images/f/marker-box.webp)

`list-item`은 `::marker`를 지니는 것 외에 한 가지 더 하는 일이 있다. 바로 리스트 아이템의 counter를 증가시키는 것이다.

아래의 코드를 살펴보자.

```html
<div class="example">
    <ul>
        <li>item One</li>
        <li>item Two</li>
        <li>item Three</li>
    </ul>
    <ol>
        <li>item One</li>
        <li>item Two</li>
        <li>item Three</li>
    </ol>
</div>
```

`ol` 리스트는 ordered list의 약자로 순서가 있는 리스트이다. 만약 카운터가 없다면 목록의 개수를 알 수 없기 때문에 1, 2, 3,... 을 제대로 표시할 수 없다.

![ul and ol list](/images/f/ul-ol.webp)

그렇다면 카운터는 `ol` 리스트인 경우에만 존재하는 것일까?

그렇지 않다. list-item이라면 모두 카운터를 가진다. `ul` 리스트의 `list-style-type`을 `number`로 바꿔보자.[^a]

---

`::marker`와 `counter`를 사용해 리스트의 기호를 원하는 대로 수정할 수 있다.

예를 들면 `ul` 리스트의 기본 형태인 `1.`과 형식을 `(1)`와 같이 표기되도록 바꿀 수 있다.

```html
<style>
    li::marker {
        content: '(' counter(list-item) ')  ';
    }
</style>

<ol>
    <li>item One</li>
    <li>item Two</li>
    <li>item Three</li>
    <li>item Four</li>
</ol>
```

![parenthesis around list-item](/images/f/format1.webp)

또는 리스트마다 기호의 색상이나 표기 형식을 다르게 설정할 수도 있다.

```html
<style>
    ul > li::marker {
        color: green;
        content: 'Note ' counter(list-item) ':  ';
    }

    ul > ol > li::marker {
        color: blue;
        content: counter(list-item, katakana) '   ';
    }
</style>

<ul>
    <li>Item One</li>
    <li>Item Two</li>
    <li>Item Three</li>
    <ol>
        <li>Nested Item 1</li>
        <li>Nested Item 2</li>
        <li>Nested Item 3</li>
    </ol>
    <li>List item Four</li>
</ul>
```

![different format per list](/images/f/format2.webp)

---

`counter()`는 블록 스코프(block scope)를 가지기 때문에, 지정된 리스트 외에는 `counter()`로 설정한 형식이 적용되지 않는다.

위 예제에서 중첩된 리스트 `ul > ol li::marker`에 지정한 포맷을 지우면, 부모 리스트에서 지정한 `Note x`가 아닌 기본 기호가 출력된다.

![singular - counter()](/images/f/format3.webp)

리스트 전체 트리의 기호를 설정하고 싶다면 `counter()`의 복수형, `counters()`를 사용하면 된다.

```html
<style>
    ol li::marker {
        content: counters(list-item, '.') ': ';
    }
</style>

<ol>
    <li>Item One</li>
    <li>Item Two</li>
    <ol>
        <li>Nested 1</li>
        <li>Nested 2</li>
        <li>Nested 3</li>
        <ol>
            <li>Nested Nested A</li>
            <li>Nested Nested B</li>
            <li>Nested Nested C</li>
        </ol>
    </ol>
</ol>
```

![plural - counters()](/images/f/format4.webp)

---

### Source

-   https://www.w3.org/TR/css-lists-3/#declaring-a-list-item

[^a]: 사용 가능한 list-style-type의 목록: https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type

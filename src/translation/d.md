---
title: '[CSS] 입력폼 클릭시 생기는 푸른 테두리 없애기'
posttitle: '입력폼 클릭시 생기는 푸른 테두리 없애기'
date: '2023-05-20 11:25:00'
uid: 'd'
---

[🇺🇸 Read this post in English](../blog/d)

폼에서 input, button, textarea, 등등 클릭시 푸른 테두리가 생긴다.

![blue outline](/images/blue-outline.webp)

CSS를 이용해서 테두리를 없앨수있다.

```css
input:focus {
    outline: none;
}
```

다른 스타일에 의해 `outline`이 덮어 쓰인다면 `!important`로 해당 스타일을 강제할 수 있다.

```css
input:focus {
    outline: none !important;
}
```

## Source

- <https://stackoverflow.com/questions/7648898/how-to-get-rid-of-blue-outer-border-when-clicking-on-a-form-input-field>

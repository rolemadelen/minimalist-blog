---
title: 'unicode-range: 언어별 다른 폰트 설정하기'
posttitle: 'unicode-range: 언어별 다른 폰트 설정하기'
date: '2023-01-13 05:00:00'
uid: 'i'
---

팀 디자이너분이 영어와 일본어에 각기 다른 폰트 스타일을 적용한 디자인을 넘겨주었다.

언어별로 페이지가 있는 거면 몰라도 같은 페이지, 같은 문장 안에 언어가 혼용되어 있으면 `font-family`를 다르게 줄 수 있나? 하는 의문이 들었지만 내가 모르는 거지 불가능 한게 아니라 생각해서 일단 찾아봤고, 역시나 방법은 있었다.

## :lang 의사 클래스

첫 번째로 `:lang` 의사 클래스를 사용하는 방법이 있다.

```css
body {
    font-family: 'your font', sans-serif;
}
:lang(ja) {
    font-family: 'Klee-Medium', 'Noto Sans JP';
}
```

태그의 요소로 `lang='ja'`을 추가하면, `:lang(ja)`으로 해당 태그를 지정할 수 있게 된다.

하지만 위 방법을 사용할 시, 일본어가 나올 때마다 `<span lang="ja"></spean>`을 중간중간 추가해야 하는데 너무 비효율적이다.

다른 방법으로는 unicode-range를 사용하는 방법이 있다.

## unicode-range

MDN은 `unicode-range`를 아래와 같이 설명하고 있다.

> "The unicode-range CSS descriptor sets the specific range of characters to be used from a font defined by @font-face and made available for use on the current page. If the page doesn't use any character in this range, the font is not downloaded; if it uses at least one, the whole font is downloaded."

`@font-face`로 폰트를 정의할 때, 해당 폰트를 적용할 문자의 범위를 설정할 수 있다. 범위안에 문자를 찾을 수 없으면 해당 폰트는 로드되지 않지만, 페이지 내 단 하나의 문자라도 범위안에 속하면 폰트 전체가 로드된다고 한다.

[Unicode Character Ranges](https://jrgraphix.net/r/Unicode/)에 의하면 일본어의 카나(かな)와 한자(漢字)의 범위는 아래와 같다.

```text
3040 — 309F  	Hiragana
30A0 — 30FF  	Katakana
4E00 — 9FFF  	CJK Unified Ideographs
```

이 범위를 `@font-face`에 지정해주면 된다.

```css
h1 {
    font-family: 'Klee-Medium', sans-serif;
}

// for Japanese
@font-face {
    font-family: 'Klee-Medium';
    src: local('Klee-Medium');
    unicode-range: U+3040-309F, U+30A0-30FF, U+4E00-9FFF;
}
```

만약 `h1` 태그안에 위에서 지정한 범위의 문자가 포함되어 있다면 `Klee-Medium` 폰트[^a]를 적용하게 된다.

```html
<h1>This is a paragraph in English.</h1>
<h1>これは日本語のパラグラフです。</h1>
<h1>Hello おはよう</h1>
```

일본어에만 해당 폰트가 적용된 것을 확인할 수 있다.

## ![unicode-range example](/images/unicode-range.webp)

[^a]: macOS Sierra에서 기본으로 제공하는 일본어 폰트 [리스트](https://wakufactory.jp/densho/font/osx_sierra.html)

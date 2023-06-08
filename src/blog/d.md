---
title: '[CSS] How to get rid of blue outline on an input field?'
posttitle: 'How to get rid of blue outline on an input field?'
date: '2023-05-20 10:00:00'
uid: 'd'
---

[🇰🇷 한국어로 읽기](../ko/d)

When you click on an input field in a form, it becomes highlighted with a blue outer border line.

![blue outline](/images/blue-outline.webp)

You can disable this highlighting effect by using the `outline` style attribute.

```css
input:focus {
    outline: none;
}
```

To ensure that this rule takes precedence over other styles, you can append `!important` at the end.

```css
input:focus {
    outline: none !important;
}
```

## Source

- <https://stackoverflow.com/questions/7648898/how-to-get-rid-of-blue-outer-border-when-clicking-on-a-form-input-field>

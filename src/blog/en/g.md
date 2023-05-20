---
title: 'How to get rid of blue outline on an input field?'
posttitle: 'How to get rid of blue outline on an input field?'
date: '2023-05-20 10:00:00'
uid: 'g'
---

When you click on an input field in a form, it highlights the field by surrounding it with a blue outer border line.

![blue outline](/images/blue-outline.webp)

You can disable this with `outline` style attribute.

```css
input:focus {
    outline: none;
}
```

If you want to be sure that this rule is not overridden by other styles, you can attach `!important` at the end.

```css
input:focus {
    outline: none !important;
}
```

## Source

- <https://stackoverflow.com/questions/7648898/how-to-get-rid-of-blue-outer-border-when-clicking-on-a-form-input-field>

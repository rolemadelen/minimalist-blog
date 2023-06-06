---
title: 'Change tab size in Vim'
posttitle: 'Change tab size in Vim'
date: '2023-05-29 17:17:17'
uid: 'q'
---

You can use `tabstop` and `shiftwidth` to change the tab size in Vim.

```text
# ~/.vimrc
set tabstop=4
set shiftwidth=4
```

If you prefer to use 4 spaces instead of a tab, you can enable `expandtab`.

```text
# ~/.vimrc
set tabstop=4
set shiftwidth=4
set expandtab
```
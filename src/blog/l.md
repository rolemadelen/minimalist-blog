---
title: 'rustup in fish shell'
posttitle: 'rustup in fish shell'
date: '2023-06-15 20:00:00'
uid: 'l'
---

You can install rustup by executing the following command:

```sh
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

...
 stable-x86_64-apple-darwin installed - rustc 1.63.0 (4b91a6ea7 2022-08-08)


Rust is installed now. Great!

To get started you may need to restart your current shell.
This would reload your PATH environment variable to include
Cargo's bin directory ($HOME/.cargo/bin).

source "$HOME/.cargo/env"
```

If you're using a POSIX-compatible shell like bash, zsh, ksh, etc., simply run the following command:

```sh
$ source "$HOME/.cargo/env"
```
However, in the fish shell, you'll encounter the following error:

![rustup error in fish](/images/rustup-error-in-fish.png)

This error occurs due to different syntax in the fish shell. 
To resolve it, you need to update the code to run in the fish shell or export the path using the fish syntax:

```sh 
$ set --export PATH $HOME/.cargo/bin $PATH
```

Now you'll be able to run rustup or cargo.

However, the path you added will be removed once you close the shell because it's a 
temporarily exported path.

To make the path universally available, use the following command instead:

```sh 
set -U fish_user_paths $HOME/.cargo/bin $fish_user_paths
```

---
title: '[Rust] Getting Started'
posttitle: 'Getting Started'
date: '2022-08-12 17:42:00'
uid: 'e'
---

[🇰🇷 한국어로 읽기](../ko/e)

The official documentation recommends using `rustup` to install or upgrade Rust on your device.

If you have installed Rust without `rustup`, you can remove it from your machine by executing the following command:

```shell
$ /usr/local/lib/rustlib/uninstall.sh
install: uninstalling component 'rustc'
install: uninstalling component 'rust-std-x86_64-apple-darwin'
install: uninstalling component 'cargo'
install: uninstalling component 'rust-docs'

    Rust Documentation is uninstalled.
```

## Installation

You can install `rustup` by executing the following command:

```shell
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

...
 stable-x86_64-apple-darwin installed - rustc 1.63.0 (4b91a6ea7 2022-08-08)


Rust is installed now. Great!

To get started you may need to restart your current shell.
This would reload your PATH environment variable to include
Cargo's bin directory ($HOME/.cargo/bin).
```

To check the version, run the following command:

```shell
$ rustc --version
rustc 1.63.0 (4b91a6ea7 2022-08-08)
```

## Hello World

We'll use `cargo` to create a new project.

```shell
$ cargo new hello_world
     Created binary (application) `hello_world` package
```

Move to the `hello_world` directory and try running the code.

```shell
$ cd hello_world

$ cargo run 
   Compiling hello_world v0.1.0 (/hello_world)
    Finished dev [unoptimized + debuginfo] target(s) in 1.05s
     Running `target/debug/hello_world`
Hello, world!
```

You can find the source code of `hello_world` in the `src/` directory.

```rust
// main.rs file
fn main() {
    println!("Hello, world!");
}
```

To check for any errors in your code without actually running it, you can use the `cargo check` command.

```shell
$ cargo check 
    Checking hello_world v0.1.0 (/Users/rolemadelen/Documents/rust/hello_world)
    Finished dev [unoptimized + debuginfo] target(s) in 0.10s
```

## Source

- [https://www.rust-lang.org/tools/install](https://www.rust-lang.org/tools/install)

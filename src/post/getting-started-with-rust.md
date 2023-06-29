---
title: "Getting started with Rust"
posttitle: "Getting started with Rust"
date: "2022-08-12 17:42:00"
---

The official documentation recommends using `rustup` to install or upgrade Rust on your device.
If you have installed Rust without `rustup`, you can remove it from your machine by executing the following command:

```text
/usr/local/lib/rustlib/uninstall.sh
```

You can install `rustup` by executing the following command:

```text
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

### Hello World

We're going use Rust package manager called **Cargo** to create a new package or a project.
Cargo will generate a directory and number of files to get you start with.

```text
$ cargo new hello_world
     Created binary (application) `hello_world` package
```

Move to the `hello_world` directory and try running the code.

```text
$ cd hello_world
$ cargo run
   Compiling hello_world v0.1.0 (/hello_world)
    Finished dev [unoptimized + debuginfo] target(s) in 1.05s
     Running `target/debug/hello_world`
Hello, world!
```

You can find the source code of `hello_world` in the `src/` directory.

```rust
fn main() {
    println!("Hello, world!");
}
```

To check for any errors in your code without actually running it, you can use the `cargo check` command.

### Reference

- <https://doc.rust-lang.org/cargo/getting-started/index.html>

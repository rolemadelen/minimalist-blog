---
title: 'Rust 설치하기'
posttitle: 'Rust 설치하기'
date: '2022-08-12 17:42:00'
uid: 'f'
---

공식 문서에서는 기기에 Rust를 설치하거나 업그레이드하기 위해 `rustup`을 사용하는 것을 권장한다.

`rustup` 없이 Rust를 설치한 경우 다음 명령어를 실행하여 기기에서 제거할 수 있다:

```shell
$ /usr/local/lib/rustlib/uninstall.sh
install: uninstalling component 'rustc'
install: uninstalling component 'rust-std-x86_64-apple-darwin'
install: uninstalling component 'cargo'
install: uninstalling component 'rust-docs'

    Rust Documentation is uninstalled.
```

## 설치

아래의 명령어를 실행하여 `rustup`을 설치한다.

```shell
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

...
 stable-x86_64-apple-darwin installed - rustc 1.63.0 (4b91a6ea7 2022-08-08)


Rust is installed now. Great!

To get started you may need to restart your current shell.
This would reload your PATH environment variable to include
Cargo's bin directory ($HOME/.cargo/bin).
```

제대로 설치되었다면 `rustc` 명령어를 사용할 수 있다. 버전을 확인해보자.

```shell
$ rustc --version
rustc 1.63.0 (4b91a6ea7 2022-08-08)
```

## Hello World

`cargo` 명령어를 사용해서 새로운 러스트 프로젝트를 생성한다. 프로젝트 이름은 뭐든 상관없다. 여기서는 `hello_word`를 사용한다.

```shell
$ cargo new hello_world
     Created binary (application) `hello_world` package
```

만들어진 프로젝트 디렉토리로 이동해서 프로젝트를 컴파일하고 실행해보자.

```shell
$ cd hello_world

$ cargo run 
   Compiling hello_world v0.1.0 (/hello_world)
    Finished dev [unoptimized + debuginfo] target(s) in 1.05s
     Running `target/debug/hello_world`
Hello, world!
```

프로젝트가 실행하는 `main.rs` 파일은 해당 프로젝트의 `src/` 디렉토리에서 확인할 수 있다.

```rust
// main.rs file
fn main() {
    println!("Hello, world!");
}
```

코드를 실행하지 않고 오류의 여부만 확인하고 싶다면 `cargo check` 명령어를 사용하면 된다.

```shell
$ cargo check 
    Checking hello_world v0.1.0 (/Users/rolemadelen/Documents/rust/hello_world)
    Finished dev [unoptimized + debuginfo] target(s) in 0.10s
```

## Source

- [https://www.rust-lang.org/tools/install](https://www.rust-lang.org/tools/install)

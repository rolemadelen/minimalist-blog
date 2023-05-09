---
title: 'Mac에서 GPG key 생성하기'
posttitle: 'Mac에서 GPG key 생성하기'
date: '2022-12-28 05:29:00'
uid: 'j'
---

먼저 `gnupg`가 있어야한다. [여기](https://www.gnupg.org/download/)에서 다운받거나 `brew`를 사용한다.

```sh
$ brew install gnupg
```

버전에 따라 사용하는 커맨드가 달라지기 때문에 gpg의 버전을 확인하자.

```sh
$ gpg --version

gpg (GnuPG) 2.3.8
```

gpg의 버전이 2.1.17보다 낮은 경우 아래의 커맨드를 사용한다.

```sh
$ gpg --default-new-key-algo rsa4096 --gen-key
```

반대의 경우는 아래를 실행한다.

```sh
$ gpg --full-generate-key
```

커맨드를 실행하면 키를 생성하는 과정에 돌입하게 된다.

```sh
gpg (GnuPG) 2.4.0; Copyright (C) 2021 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Please select what kind of key you want:
   (1) RSA and RSA
   (2) DSA and Elgamal
   (3) DSA (sign only)
   (4) RSA (sign only)
   (9) ECC (sign and encrypt) *default*
  (10) ECC (sign only)
  (14) Existing key from card
Your selection?
```

본인에게 필요한 부분을 선택하며 진행하면 된다 (디폴트의 경우 그냥 엔터를 입력). 마지막에 secure passphrase를 입력하면 끝이다.

---

지금 생성한 GPG 키를 확인해보자.

```sh
$ gpg --list-secret-keys --keyid-format=long

/Users/user/.gnupg/pubring.kbx
------------------------------------
sec   4096R/3AA5C34371567BD2 2022-12-27 [SC]
uid                      Name <email@example.com>
ssb   4096R/4BB6D45482678BE3 2022-12-27
```

위 예제의 경우, 나의 GPG ID는 `3AA5C34371567BD2`가 된다.

나중에 GPG key를 본인 계정에 추가해야 할 때 (e.g. 깃허브), GPG ID를 사용해 public key를 생성하면된다.

```sh
$ gpg --armor --export 3AA5C34371567BD2

-----BEGIN PGP PUBLIC KEY BLOCK-----
...
...
...
-----END PGP PUBLIC KEY BLOCK-----
```

`BEGIN`에서 `END`부분까지 전부 복사한 다음 필요한 곳에 붙여넣으면 된다.

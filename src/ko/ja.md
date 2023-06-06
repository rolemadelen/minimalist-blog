---
title: 'gpg: signing failed: No pinentry 오류 해결'
posttitle: 'gpg: signing failed: No pinentry 오류 해결'
date: '2023-02-05 12:00:00'
uid: 'ja'
---

나는 깃허브에 GPG key를 추가해서 커밋에 서명을 하고 있다.

언제나와 같이 커밋을 하려고 하는데 아래와 같은 오류가 발생했다.

```sh
❯ git commit -m "커밋 내용"
error: gpg failed to sign the data
fatal: failed to write commit object
```

`echo "test" | gpg --clearsign`를 실행하면 gpg키가 제대로 등록되어 있는지 확인 할 수 있다고 해서 입력해봤다.

```sh
❯ echo "test" | gpg --clearsign
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256

test
gpg: signing failed: No pinentry
  1 pinentry-program /usr/local/bin/pinentry-mac
gpg: [stdin]: clear-sign failed: No pinentry
```

No pinentry라고 나오지만 `pinentry`는 설치되어 있다. `~/.gnupg/gpg-agent.conf`를 확인해보니 경로도 제대로 되어있다.

좀 더 알아보니 설정에 문제는 없었고, 간단히 아래의 커맨드로 해결할 수 있었다.

```sh
>  gpgconf --kill gpg-agent
```

---

### Source

-   https://superuser.com/questions/1628782/gpg-signing-failed-no-pinentry

---
title: 'gpg: signing failed: Inappropriate ioctl for device'
posttitle: 'gpg: signing failed: Inappropriate ioctl for device'
date: '2023-06-05 19:15:00'
uid: 'i'
---

On macOS, I encountered the following error:

```sh
git commit -m "test"
error: gpg failed to sign the data
gpg: signing failed: Inappropriate ioctl for device
```

Here are the steps I took to resolve this error:

1. Add the following line to `~/.gnupg/gpg.conf`
    ```conf
    use-agent
    pinentry-mode loopback
    ```
2. Create or modify the `~/.gnupg/gpg-agent.conf`
    ```conf
    allow-loopback-pinentry
    ```
3. Restart the GPG agent
    ```sh
    echo RELOADAGENT | gpg-connect-agent
    ```
4. (optional) You might need to set the `GPG-TTY`
    ```sh
    export GPG_TTY=$(tty)
    ```

### Reference
- [chiark.greenend.org.uk](https://www.chiark.greenend.org.uk/pipermail/sgo-software-discuss/2020/000690.html)
- [gist.github.com](https://gist.github.com/repodevs/a18c7bb42b2ab293155aca889d447f1b)
---
title: "Setting environment variables in fish shell (feat. rustup)"
posttitle: "Setting environment variables in fish shell (feat. rustup)"
date: '2023-06-15 20:00:00'
updated: '2023-06-15 20:00:00'
---

You can install rustup by executing the following command:

```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

If you're using a POSIX-compatible shell like bash, zsh, ksh, etc., you can simply run 
source `$HOME/.cargo/env` to reload your PATH environment variable and include Cargo's bin 
directory. However, if you're using the fish shell, you'll encounter the following error:

![rustup error in fish](/images/rustup-error-in-fish.png)

This error occurs due to different syntax in the fish shell. 
To resolve it, you need to update the code to be compatible with the fish shell 
or export the path using the fish syntax:

```shell
set --export PATH $HOME/.cargo/bin $PATH
```

Now you'll be able to run rustup or cargo. However, please note that the path you added 
will be removed once you close the shell because it's a temporarily exported path. 
If you want to make the path permanently available, use the following command instead:

```shell
set -U fish_user_paths $HOME/.cargo/bin $fish_user_paths
```

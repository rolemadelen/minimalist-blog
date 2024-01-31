---
title: 'Why should I know about the .DS_Store'
date: '2023-09-24 11:11'
lang: 'en'
---

`.DS_Store` file stands for _Desktop Services Store file_. This file is automatically created by the Mac operating system whenever you visit any directory with the _Finder_ application. Once created, this file will follow you even when you zip or compress the files in the same directory.

You may wonder what information is stored in the `.DS_Store` file and why we should know about it. This file stores information and metadata about the current directory and existing files around it. If developers were careless about the file and uploaded to the server or pushed it to their remote repository, you are potentially in danger of leaking your data.

There was a case where hackers exploited the `.DS_Store` file and used to gain access to an admin portal back in 2015. So, it's not just a theory that it can be dangerous. It actually is.

So how do we address this issue? We can simply remove it using the command `rm .DS_Store` whenever you find it in your project, or we can completely turnoff the automated creation of this file.

Open up the terminal and enter the following command:

```bash
defaults write com.apple.desktopservices DSDontWriteNetworkStores true
```

This will disable the OS from creating a `.DS_Store` file on network shares. If you want to do the same for the removable shares, change `DSDontWriteNetworkStores` to `DSDontWriteUSBStores`.

To re-enable the automated creation of `.DS_Store` file, simply invert the boolean from `true` to `false` and re-run the command.

If you prefer not to tinker with system settings and just want to avoid uploading the `.DS_Store` file in your project, you can use `.gitignore`. Simply add `.DS_Store` to your `.gitignore` file to prevent it from being uploaded to the server, and you're all set.

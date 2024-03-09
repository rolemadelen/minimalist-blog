---
title: "Apache & Nginx Basic Authentication"
date: "2021-06-21 07:00:00"
lang: 'en'
---

# Apache

For Apache, we need these two files _.htaccess_ and _.htpasswd_.

## .htaccess

```txt
AuthType Basic  
AuthName "Restricted Area"  
AuthUserFile /path/to/the/directory/you/are/protecting/.htpasswd  
require valid-user
```
Be careful with the `AuthUserFile`. We need to have the **exact** path for the _.htpasswd_ otherwise it wont work.


If you're not sure about the exact path, take a look at this [post](https://hostingcanada.org/full-path-to-file-using-php) written by _Gary Stevens_. He introduces a simple PHP script to display the full path to your current directory.


Once you have that ready, we need to create a _.htpasswd_ file which stores the username and a password in a key:value pair.

## .htpasswd
```text
user-name:csmBH6tTLNZBE
```

The syntax is `[USER NAME]:[PASSWORD]`.


The password must be encrypted (_bcrypt, SHA1, or crpyt()_). You can use '[.htpasswd Username & Password Generator](https://davidwalsh.name/web-development-tools)' created by _David Walsh_. 

Or if you have `htpasswd` command:
```shell
 -c : creates a passwd file
$ htpasswd -c .htpasswd USER_NAME

 NEW PASSWORD: 
 Retype: 
```

This will generate a .htpasswd in your current directory with encrypted password.


You may need to restart your apache server.

# Nginx
For Nginx, we need to configure the _nginx.conf_ file.

## htpasswd

First we need to create a user:passwd file similar to Apache. I recommend installing `httpd-tools` or `apache2-utils` to use the `htpasswd` command.

```shell
 -c : creates a passwd file
$ htpasswd -c .htpasswd USER_NAME
 NEW PASSWORD: 
 Retype: 
```


This will generate a .htpasswd in your current directory.

## nginx.conf

Add these lines under the nginx.conf:
```txt
location / {
    auth_basic "Restricted Area";
    auth_basic_user_file /path/to/the/directory/you/are/protecting/.htpasswd;
}
```


This will password protect the **root** server. If you want to password protect a sub-directory, change the root(`/`) to the sub-directory:
```txt
location /test { 
    ...
}
```


Restart the nginx and it should work.

## Issues

The _location_ directive must be under a _server_ directive. My `nginx.conf` did not have a server directive. But I found that nginx.conf was including (importing) other *.conf files.


It was including the `bitnami.conf` file which had a server directive in it. So I added my `location` directive there and it worked fine.


# Reference
- [Apache - Easily Password Protect a Website or Subdirectory](https://css-tricks.com/easily-password-protect-a-website-or-subdirectory/)
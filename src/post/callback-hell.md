---
title: "Callback Hell"
posttitle: "Callback Hell"
date: "2023-06-28 07:30:00"
published: "2023-06-28 11:20:00"
---

Okay. It's a little shameful, but I have to admit that I didn't knew about this
thing called _Callback Hell_. So, what is it? Take a look at the code below.

```js
userStorage.loginUser {
  user,
  password,
  loggiedInUser => {
    userStorage.getRoles(
      loggedInUser,
      user => {
        userStorage.getHistory(
          user,
          history => {
            userStorage.getComments(
              history,
              comments => {
                userStorage.getDates(
                  comments,
                  dates => {
                    /* do something */
                  },
                  error => {
                    alert(error);
                  }
                )
              }, error => {
                alert(error);
              });
          }, error => {
            alert(error);
          }
        );
      }, error => {
        alert(error);
      }
    );
  }, error => {
    alert(error)
  }
}
```

Yipes! Nesting callbacks within callbacks within callbacks creating
a pyramid shape. This coding style should be avoided as it
significantly impacts the readability and maintainability of the code.

Does this mean that we should never call other callbacks within a
function to avoid the pyramid? Of course not.
We can maintain the same structure but enhance it by utilizing
Promises and/or async/await.
This approach improves the overall readability and maintainability of the code.

For example, by using Promises, the code becomes much easier to read, as shown below.

```js
userStorage
  .loginUser(user, password)
  .then(userStorage.getRoles)
  .then(userStorage.getHistory)
  .then(userStorage.getComments)
  .then(userStorage.getDates)
  .then(/* do something */)
  .catch(console.log);
```

### Reference

- https://www.youtube.com/watch?v=s1vpVCrT8f4

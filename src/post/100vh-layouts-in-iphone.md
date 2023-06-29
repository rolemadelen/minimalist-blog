---
title: '100vh Layouts in iPhone'
posttitle: '100vh Layouts in iPhone'
date: '2023-06-26 18:04:00'
---

I was frustrated when I discovered that the top and bottom portions of my portfolio 
were blocked by the iOS address bar on my iPhone XR. Surprisingly, it appeared perfectly 
fine on my SE and 2nd gen iPad Air, but only on the iPhone XR did the status and address bar 
overlapped and hid my name from my own portfolio.

![div100vh](/images/div100vh-1.webp)

One quick solution to address this issue is by utilizing CSS media queries.
By targetting the specific device dimensions of the iPhone XR, I can make adjustments to 
ensure the optimal display of my portfolio on this particular device.

```text
@media only screen 
    and (device-width : 414px) 
    and (device-height : 896px) 
    and (-webkit-device-pixel-ratio : 2) { 
    
    // set height
}
```

But this is not efficient. What if the same issue occurs on other iPhone devices as well?
Creating multiple media queries to cover every iOS device could result in bloated code 
that lacks elegance. We value aesthetics in code, don't we (´･ω･`)?

Anyway, if you're using npm, you know npm is a vast ecosystem with numerous 
packages to explore. I came across a particularly useful npm package called [react-div-100vh](https://www.npmjs.com/package/react-div-100vh).
This package provides a straightforward solution for achieving a consistent 100vh layout across different devices.

By simply wrapping the elements in 100vh layout with `<Div100vh></Div100vh>`, this package 
takes care of accurately calculating the correct height and ensures that your content is displayed 
correctly on all devices. It's a convenient and efficient way to handle responsive layouts 
without the need for manual adjustments or complex media queries.

![div100vh](/images/div100vh-2.webp)

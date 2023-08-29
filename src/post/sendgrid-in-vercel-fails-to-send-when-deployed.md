---
title: 'Sendgrid in Vercel fails to send and email when deployed'
date: '2023-08-15 11:36:00'
---

I've created a contact form for my recent side project, which sends an email to a designated account. To facilitate email delivery, I utilized a third-party mail service called [SendGrid](https://sendgrid.com/).

The documentation provided by SendGrid was solid and easy to follow, making the integration process feel like a breeze.

Below is a code snippet for the integration, as provided on the website.

```js
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'test@example.com', // Change to your recipient
  from: 'test@example.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
```

I made modifications to the code and tested it locally, and it worked perfectly.

![contact form](/images/contact-form.png)

![contact form received](/images/contact-form-received.png)

After configuring SendGrid, I deployed the app to Vercel and tested the form. While there were no errors upon submission, unfortunately, the email didn't arrive. Despite testing multiple times, the outcome remained consistent. Interestingly, when I retried it in the local environment, it worked as expected. Hence, there appears to be an issue with my app in the production environment, particularly on Vercel.

---

I found the solution on Stack Overflow.

> The issue lies in how vercel handles serverless functions:
>
> - If you're on free tier, each request must resolve in 10 seconds (for pro its 60)
> - Vercel seems to instantly terminate a serverless function once a response is returned, aka side effects that are not finished will cease to run.

Essentially, the problem arose because Vercel wasn't waiting for SendGrid to fulfill its promise before proceeding. To address this, I made modifications to the code as shown below.

```js
try {
  await sgMail.send(msg)
  return { success: true }
} catch (err) {
  return { success: false }
}
```

---

- https://stackoverflow.com/questions/73725033/sendgrid-emails-wont-send-when-deployed-to-vercel
- https://github.com/orgs/vercel/discussions/116

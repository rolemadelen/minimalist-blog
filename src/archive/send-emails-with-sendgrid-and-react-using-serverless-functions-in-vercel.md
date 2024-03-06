---
title: 'Build a Contact Form Using Serverless Functions in Vercel'
date: '2023-09-22 10:00'
lang: 'en'
---

# Install Dependencies

```sh
$ pnpm install @sendgrid/mail
```

# Create a Serverless API Route

Vercel will turn all code inside the `api` directory into serverless functions.

Navigate to `/api` directory or create one in your root directory and create a file called `sendgrid.js`. We'll be able to call this API through `/api/sendgrid` route.

```js
// sendgrid.js
import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: 'rolemadelen@tuta.io',
      from: 'rolemadelen@tuta.io',
      subject: "You've got a mail!",
      html: '<div>Hello, World!</div>',
    })
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default sendEmail
```

SendGrid requires us to initialize a `sendgrid` object with the API key using `setApiKey` method. Then we can send emails using `send` method.

The SendGrid `send` method requires these fields: `to`, `from`, `subject`, and `html`.

- `from` - your SendGrid email that you used for Sender Identity Verification.
- `to` - the email address where you want your email to get delivered

Since I'm sending myself an email through the contact form, both the `to` and `from` fields will be the same.

```js
// sendgrid.js
import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: 'rolemadelen@tuta.io',
      from: 'rolemadelen@tuta.io',
      subject: `[Portfolio] '${req.body.name}' contacted you!`,
      html: `
      <body>
        <div>
          <p><b>Name:</b> ${req.body.name}</p>
        </div>
        <div>
          <p><b>Email:</b> ${req.body.email}</p>
        </div>
        <div>
          <p><b>Message:</b></p>
          <pre>${req.body.message}</pre>
        </div>
      </body>
      `,
    })
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}
```

# Call the API and Handle Responses

I have a contact form on my page, similar to the one below. When a viewer fills out all the form inputs and submits the form, the `handleSubmit` function takes over, allowing us to call the API.

```ts
<form className="contact-form" onSubmit={handleSubmit}>
    <label htmlFor="name">Name</label>
    <input type="text" name="name" />

    <label htmlFor="name">Email</label>
    <input type="text" name="email" />

    <label htmlFor="name">Message</label>
    <textarea name="message" />

    <button type="submit">Send</button>
</form>
```

We make this API call using `fetch`, provided by React. The API can respond with either success or failure. If it's a success, the email is delivered; otherwise, it's not.

```ts
const handleSubmit = async (e: BaseSyntheticEvent) => {
  e.preventDefault()

  const res = await fetch('/api/sendgrid', {
    body: JSON.stringify({
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })

  const { error } = await res.json()
  if (error) {
    console.log(error)
    return
  }
}
```

However, the end-user cannot know whether the email was successfully sent because we lack a UI to distinguish between these two states. To address this, I'm going to use a toast message.

# React Hot Toast

I'm going to use [react-hot-toast](https://github.com/timolins/react-hot-toast), a lightweight library that allows you to create notification messages in a React project.

First, install the dependency.

```sh
$ pnpm install react-hot-toast
```

Now, we can use `toast.success('message')` and `toast.error('message')` to notify viewers whether they were able submit the form or not.

```ts
import toast, { Toaster } from 'react-hot-toast'

const handleSubmit = async (e: BaseSyntheticEvent) => {
  e.preventDefault()

  const res = await fetch('/api/sendgrid', {
    body: JSON.stringify({
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })

  const { error } = await res.json()
  if (error) {
    toast.error('Message sending failed. Please try again.')
    return
  }

  const formInputs = [nameRef, emailRef, messageRef]

  for (const fieldRef of formInputs) {
    if (fieldRef.current) {
      fieldRef.current.value = ''
    }
  }

  if (messageRef.current)
    messageRef.current.value =
      'Thank you for getting in touch! Your message has been sent successfully.'

  toast.success('Message sent successfully!')
}
```

![toast success](/images/toast-success.gif)

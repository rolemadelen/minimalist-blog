---
title: "Things I Want"
posttitle: "Things I Want"
date: "2023-07-09 11:08:00"
published: "2023-07-09 13:45:00"
---

I've started working on a side project called 'Things I Want' and have made significant progress,
although it's still in a somewhat unfinished state. I've implemented all the features I initially planned,
but I'm eager to add something more to enhance the project. But I'm facing a creative block at the moment, so ...
we'll see.

![demo](/images/things-i-want/demo.gif)

Anyway, let me tell you more about this project. As the name suggests, 'Things I Want' is a website that
showcases a collection of items I aspire to own in the future. This diverse collection encompassess
everything from keyboards, monitors, and laptops to taiko drums and AR glasses. Currently, there are
approximately 20 items listed, but I envision the list growing as time goes on and my desirs evolve.
The website serves a a personal catalog and a source of inspiration.

## Design

Below is the original design of the project that I created using Figma. I aimed for a minimalistic style,
with a prominent grid line serving as the key visual element in the layout. However, due to my limited
knowledge and skills, I encountered difficulties implementing the grid lines that spanned across the entire
page. My initial approach worked, however, it wasn't idea for achieving a responsive user interface, as it only
worked for specific dimensions.

![originial design](/images/things-i-want/original-design.png)

I updated the design so that each cell now occupies the entire space without any gaps.
I ended up liking the design more than the initial one. It reminds me of Mondrian's artwork with
its geometric compositions.

![new design](/images/things-i-want/new-design.jpeg)

## Tech Stack

As I'm currently learning [Svelte](https://svelte.dev/), I decided to utilize it for the frontend of my project. Although
I acknowledge that my project structure may not be optimial and that I may not have fully utilized all
the language's capabilities, I believe that practicing and learning go hand in hand. Embracing the learning
process allows me to continously improve and refine my skills in Svelte.

![svelte structure](/images/things-i-want/svelte-structure.png)

For the backend, I opted to utilize [Supabase](https://supabase.com/), an open-source alternative to Firebase.
Supabase offers a seamless experience by allowing easy creation of database tables and providing a
straightforward API that can be accessed through the Supabase client. One of the standout features of
Supabase is that even in the free tier, there are no limits on API calls.
Additionally, Supabase offers a convenient file storage solution where static file like
images can be stored, allowing easy retrieval of URLs — a perfect fit for this particular project.

![supabase bucket](/images/things-i-want/supabase-bucket.png)

I utilized [netlify](https://www.netlify.com/) to swiftly deploy the app. And I configured a custom domain to provide personalized and memorable web address for the application.

---

I'm planning to create a similar website called 'Things I Own'. I'm not sure whether I should utilize the same
format and simply modify the wording and images, or embark on a new project with an entirely different design.

Anyway, you said you want to send me a gift for no reason? Just a second. I'll provide you with a link.

[want.jiieu.com](https://want.jiieu.com)

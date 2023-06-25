---
title: '神経衰弱 pt.1 - Project Setup & Card UI'
posttitle: 'Shinkei Suijaku - Project Setup & Card UI'
date: '2023-06-12 22:00:00'
updated: '2023-06-12 22:00:00'
---

Shinkei Suijaku (神経衰弱) is a memory game in which the objective is to find two 
matching cards. It i also commonly referred to as Concentration or Pairs. 
I have chosen to create my own version of this game using Pokémon cards, and I will document my progress 
by writing a blog post.

![poke card](/images/card-ui.gif)

## Project Setup

I'm going to use Vite to quickly set up a React project with TypeScript.
When prompted, select `React` as the framework and `TypeScript` as the variant.

```bash
pnpm create vite@latest bashinkei-suijaku -- --template react
```

Once executed, a directory named `bashinkei-suijaku` will be created, containing all the necessary dependencies to run React and TypeScript.
Then, navigate to the project directory and install the project dependencies.

```bash
$ cd bashinkei-suijaku
$ pnpm install

dependencies:
+ react 18.2.0
+ react-dom 18.2.0

devDependencies:
+ @types/react 18.0.37 (18.2.11 is available)
+ @types/react-dom 18.0.11 (18.2.4 is available)
+ @typescript-eslint/eslint-plugin 5.59.0 (5.59.9 is available)
+ @typescript-eslint/parser 5.59.0 (5.59.9 is available)
+ @vitejs/plugin-react 4.0.0
+ eslint 8.38.0 (8.42.0 is available)
+ eslint-plugin-react-hooks 4.6.0
+ eslint-plugin-react-refrebash 0.3.4 (0.4.1 is available)
+ typescript 5.0.2 (5.1.3 is available)
+ vite 4.3.9

Done in 6s
```

## Tailwind CSS and Daisy UI

I'm going to install Tailwind CSS and other necessary libraries to use Daisy UI. Then, I'll need to create two
configuration files: `tailwind.config.cjs` and `postcss.config.cjs`, to propery setup tailwind and
daisy UI.

```bash
pnpm install -D tailwindcss postcss autoprefixer daisyui
pnpx tailwindcss init -p # this will create tailwind and postcss.config.cjs
```

You wont need to modify anything in postcss configuration file. 
But you'll need to modify `tailwind.config.cjs` like the below.

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
```

Now we're going to add tailwind directives to our CSS file. This will add basic style configurations
for tailwind css. So, I removed all default stylings in the `./src/index.css` file and added the following three directives at the top:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Let's run Vite server by running the command, `pnpm run dev`, and make sure everything is installed correctly.

![vite + react](/images/vite-react.jpg)

I'm ready to write some code.

## Validation Check

Let's see if Daisy UI is working properly or not. Copy the code below and 
refresh or build the server again.

```tsx
import './App.css'

function App() {
  return (
    <>
      <div>
        <kbd className={'kbd'}>H</kbd>
        <kbd className={'kbd'}>E</kbd>
        <kbd className={'kbd'}>L</kbd>
        <kbd className={'kbd'}>L</kbd>
        <kbd className={'kbd'}>O</kbd>
      </div>
      <div>
        <kbd className={'kbd'}>W</kbd>
        <kbd className={'kbd'}>O</kbd>
        <kbd className={'kbd'}>R</kbd>
        <kbd className={'kbd'}>L</kbd>
        <kbd className={'kbd'}>D</kbd>
      </div>
    </>
  )
}

export default App
```

![kbd](/images/daisyui-hello-world.jpg)

## Card Component

Now that we're done with the setup. Let's go ahead and create a card which is going to be the 
base of our card game. I created a component called `Card` that accepts two values: the Pokémon name and the image.

```tsx
<Card name={POKEMON_NAME} image={POKEMON_IMG_PATH} />
```

```tsx
/* Card.tsx */

interface PokeCard {
  name: string
  image: string
};

const Card: React.FC = (card: PokeCard) => {
  return (
    <>
      <div className={'rm-card flex items-center justify-center min-w-[10rem] w-44 min-h-[15.3rem] m-4 overflow-hidden rounded bashadow-xl hover:cursor-pointer hover:rotate-[5deg] duration-150'}>
        {/*    This is a front side - pokemon      */}
        <figure>
          <img src={card.image} alt={card.name} />
        </figure>
      </div>
    </>
  )
};

export default Card;
```
As a temporary measure, I downloaded a sample Pokémon card image, which happened to be a Charizard.
Now, let's use this image and render our `Card` component. Please note that `Pokeball` is only being used temporarily to visualize the back side of a card.

```tsx
/* App.tsx */

import './App.css'
import Card from './Card'

const App: React.FC = () => {
  return (
    <>
      <Card name={'Charizard'} image={'/src/assets/charizard.png'}/>
      <Card name={'Pokeball'} image={'/src/assets/pokeball.png'}/> 
    </>
  )
}

export default App
```

![poke card](/images/card-ui.gif)


## Reflection (o´▽`o)

It didn't take too long to create the basic structure of the component.
However, I spent a lot of time setting up the project. 
Although I knew I wanted to use React, I didn't want to use `create-react-app` since it's deprecated(?) 
or no longer supported. And `create-next-app` was definitely not it since I'm not using Next.js.

So I started setting up the React project manually, but I encountered numerous errors 
when integrating Tailwind CSS. 
Luckily, I came across Vite, and everything went smoothly from there.

Next, I plan to implement a card flip animation. 
Players will be able to click on a card to reveal its Pokémon.

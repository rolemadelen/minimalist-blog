---
title: '[神経衰弱] Project Setup & Card UI'
posttitle: '[神経衰弱] Project Setup & Card UI'
date: '2023-06-12 22:00:00'
uid: 'k'
---

# Shinkei Suijaku (神経衰弱)

Shinkei Suijaku (神経衰弱) is a memory game in which the objective is to find two 
matching cards. It is also commonly referred to as Concentration or Pairs.

I have chosen to create my own version of this game using Pokémon cards, 
and I will document my progress by writing a blog post.

![poke card](/images/card-ui.gif)

## Set Up Project

### Create Project Folder

I'm going to use Vite to quickly set up a React project with TypeScript.

```sh
pnpm create vite@latest shinkei-suijaku -- --template react
```

When prompted, select `React` as the framework and `TypeScript` as the variant.

Once executed, a directory named `shinkei-suijaku` will be created, 
containing all the necessary dependencies to run React and TypeScript.

Next, navigate to the project directory and install the project dependencies.

```sh
$ cd shinkei-suijaku
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
+ eslint-plugin-react-refresh 0.3.4 (0.4.1 is available)
+ typescript 5.0.2 (5.1.3 is available)
+ vite 4.3.9

Done in 6s
```

### Install TailwindCSS and DaisyUI

I'm going to use DaisyUI which requires TailwindCSS.

```sh
pnpm install -D tailwindcss postcss autoprefixer daisyui
```

- `tailwindcss` - the tailwind framework.
- `postcss` - provides plugins to perform different functionalities like prefixes in Vanilla CSS.
- `autoprefixer` - PostCSS plugin to parse CSS and add vendor prefixes to CSS rules.
- `daisyui` - tailwind css plugin.


### Generate Configuration Files

Below command will generate `tailwind.config.cjs` and `postcss.config.cjs` configuration files.

```sh
pnpx tailwindcss init -p
```


### Configure Source Paths

Modify `tailwind.config.cjs` like the below.

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

### Add Tailwind Directives to CSS

I removed all default stylings in the `./src/index.css` file and added the following three directives at the top:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Run Vite Server

Run `pnpm run dev` to build and make sure everything works.

```sh
  VITE v4.3.9  ready in 428 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

![vite + react](/images/vite-react.jpg)

I'm ready to write some code.

### Test DaisyUI

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

Sweet. Everything is installed correctly.

![kbd](/images/daisyui-hello-world.jpg)

---

## Creating a Card UI

I created a component called `Card` that accepts two values: the Pokemon name and the image.

```tsx
<Card name={POKEMON_NAME} image={POKEMON_IMG_PATH} />
```

Here's a implementation of `Card` component.

```tsx
/* Card.tsx */

interface IPokeCard {
  name: string
  image: string
};

const Card = (card: IPokeCard) => {
  return (
    <>
      <div className={'rm-card flex items-center justify-center min-w-[10rem] w-44 min-h-[15.3rem] m-4 overflow-hidden rounded shadow-xl hover:cursor-pointer hover:rotate-[5deg] duration-150'}>
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
As a temporary measure, I downloaded a sample Pokemon card image, which happened to be a Charizard.

Now, let's use this image and render our `Card` component

```tsx
/* App.tsx */

import './App.css'
import Card from './Card'

function App() {
  return (
    <>
      <Card name={'Charizard'} image={'/src/assets/charizard.png'}/>
      <Card name={'Pokeball'} image={'/src/assets/pokeball.png'}/> 
    </>
  )
}

export default App
```
Please note that `Pokeball` is only being used temporarily to visualize the back side of a card.

![poke card](/images/card-ui.gif)


---

## Reflection

It didn't take too long to create the basic structure of the component.

However, I spent a lot of time setting up the project. 
Although I knew I wanted to use React, I didn't want to use create-next-app. 
I wasn't sure if that was the right approach for creating a React project without Next.js.

So I started setting up the React project manually, but I encountered numerous errors 
when integrating Tailwind CSS. 
Luckily, I came across Vite, and everything went smoothly from there.

Next, I plan to implement a card flip animation. 
Players will be able to click on a card to reveal its pokemon.

---
title: '神経衰弱 pt.2 - Flipping Cards'
posttitle: 'Shinkei Suijaku - Flipping Cards'
date: '2023-06-13 22:00:00'
---

[Previously](./shinkei-suijaku-project-setup), I have implemented the component for the card.
Today, I'm going to add a flipping motion to a Pokémon card when clicked.

---

## Motion

Whenever I click a card, I toggle a class called `flip`, which rotates the card along 
the y-axis by 180 degrees. To achieve this, I have added an `onClick` event to the card.

```tsx
const Card: React.FC = (card: PokeCard) => {
    const handleOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.currentTarget.classList.toggle('flip');
    }

    return (
    <>
        <div className={'rm-card ...'} onClick={handleOnClick}>
    </>
    )
}
```

```css
.rm-card:hover {
  transform: rotateZ(5deg);
}

.flip {
  transform: rotateY(180deg);
}

.flip:hover {
  transform: rotateY(180deg) rotateZ(5deg);
}
```

![flip card](/images/pokecard-flip.gif)

Now, let's add some logic to display the actual Pokémon rather than the duplicate image of the back.

## Logic

First, I added my Charizard to the card and included an additional `<figure>` element 
in the component to show both the front and back of the card.

```tsx
  return (
    <>
      <div 
        className={'rm-card ...'}
        onClick={handleOnClick}>

        <figure className={'front'}>
          <img src={card.image} alt={card.name} />
        </figure>
        
        <figure className={'back flex justify-center items-center'}>
          <img src="/src/assets/pokeball.png" alt="back"/>
        </figure>
      </div>
    </>
  )
```

![flip card](/images/pokecard-flip-2.gif)

Now, the card is showing both images at the same time, which isn't intended. 
To address this, I will hide the Pokémon image and reveal it only when clicked. 
Let's add a `hidden` class to the `front` figure.

```tsx
<figure className={'front hidden'}>
  <img src={card.image} alt={card.name} />
</figure>

<figure className={'back flex justify-center items-center'}>
  <img src="/src/assets/pokeball.png" alt="back"/>
</figure>
```

And when I click the card, I simply toggle the `hidden` class on both figure elements

```tsx
const handleOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const currentTarget = e.currentTarget;
  currentTarget.classList.toggle('flip');

  const cardFront = currentTarget.children[0];
  const cardBack = currentTarget.children[1];

  cardFront.classList.toggle('hidden');
  cardBack.classList.toggle('hidden');
}
```

![flip card](/images/pokecard-flip-3.gif)

## Reflection ･ω･ﾉﾉﾞ

The flipping motion was easier than I expected. I'm fairly certain there's room for 
improvement, but for now, I'm satisfied with the result.

Next, I'm going to attempt integrating a Pokémon API to fetch data and display various 
Pokémon other than Charizard.

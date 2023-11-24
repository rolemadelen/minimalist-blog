---
title: 'Datamuse API: Creating a Simple Dictionary'
date: '2023-11-24 15:50:00'
---

# Datamuse API

Datamuse API is a word-finding query engine. It allows you to look up words that match a given set of constraints.

Sample queries:
- `words?sl=jirraf` - words that sound like _jirraf_
- `words?rel_syn=yellow` - words that are synonymous to _yellow_
- `words?rel_jjb=ocean` - adjectives that are often used to describe _ocean_

Using this API, I'm going to create a simple dictionary.

# Creating a Dictionary


## Features

This dictionary, while simple, will have several key features:
- Word search functionality,
- Definition display,
- Synonym display,
- Antonym display,
- Clickable synonyms/antonyms for easy word search.

![dictionary gif](/images/play-with-datamuse-api/dictionary.gif)

### Word Search: Text Input

The word input is quite straightforward. It consists of a form where the user can enter a word. Upon submission, the `handleFetchData` function is triggered, fetching all the necessary data from the API.

```tsx
<form
  className={style.form}
  onSubmit={handleFetchData}>
  <label htmlFor='wordInput'></label>
  <input
    id='wordInput'
    type='text'
    onChange={(e) => setWord(e.target.value)}
    placeholder='Enter a word'
    value={word}
  />
  <button type='submit'></button>
</form>
```

### Fetch Data

Here's my implementation for `handleFetchData` function.


```tsx
const handleFetchData = (e: React.FormEvent) => {
  e.preventDefault();
  fetchWordData(word);
  setCurrentWord(word);
};
```

The `e.preventDefault()` method is used to prevent the form from being submitted and the page from being refreshed. The `fetchWordData` function is then called to retrieve all the necessary data. The `setCurrentWord` function is used to set the current word, which is then displayed.

Let's take a look at the `fetchWordData` function.

```tsx
// config.ts
export const config: Config = {
  BASE_URL: "https://api.datamuse.com"
}

// App.tsx
const fetchWordData = (newWord: string) => {
  const querySynonym = `/words?rel_syn=${newWord}`;
  const queryAntonym = `/words?rel_ant=${newWord}`;
  const queryDefinition = `/words?sp=${newWord}&md=d`;

  Promise.all([
    fetch(config.BASE_URL + querySynonym),
    fetch(config.BASE_URL + queryAntonym),
    fetch(config.BASE_URL + queryDefinition),
  ])
    .then((responses) => {
      return Promise.all(responses.map((response) => response.json()));
    })
    .then(([synonymData, antonymData, definitionsData]) => {
      setSynonyms(synonymData);
      setAntonyms(antonymData);
      setDefinitions(definitionsData[0].defs.slice(0, 3));
    });
};
```

I've broken down the queries into separate variables for better readability and maintainability. These queries are used to fetch synonyms, antonyms, and definitions. To optimize performance, I've used `Promise.all` to execute these fetch requests concurrently.

`Promise.all` returns a Promise that resolves to an array of responses. I've used the `map` function to iterate over each response, converting them to JSON, and then assigning the data to the corresponding variables: `synonymData`, `antonymData`, and `definitionsData`.

The API often returns multiple definitions for a single word. To keep our data manageable, I've limited the number of definitions to three by slicing the array from index 0 to 3 (note that the end index is not included).

Now that we have our data, all we need to do is display them.

### Display Definitions

```tsx
<div>
  <h1>{currentWord}</h1>
  <ul>
    {definitions?.map((def) => (
      <li key={def}>{def.replace('\t', '. ')}</li>
    ))}
  </ul>
</div>
```

### Display Synonyms and Antonyms
Since the code for displaying synonyms and antonyms are identical, I'll explain with synonyms only.

```tsx
<div>
  {synonyms.length > 0 && (
    <div>
      <h3>
        Synonyms for '
        <span>{currentWord}</span>'
      </h3>
      <ul>
        {synonyms.map((synonym) => (
          <li
            key={synonym.word}
            onClick={() => handleWordClicked(synonym.word)}>
            {synonym.word}
          </li>
        ))}
      </ul>
    </div>
  )}
</div>
```

I've included a check for the length of the array to ensure that synonyms/antonyms are only displayed when they exist.
If they do exist, I've utilized a `map` function to iterate over each synonym/antonym and present it in a list format.
Each synonym/antonym is used as a `key` for the list, given the uniqueness of each word.

The `handleWordClicked` function, as the name implies, is triggered when a synonym or an antonym is clicked.

### Clickable Synonyms/Antonyms

The `handleWordClicked` function operates in a manner akin to the `handleFetchData` function.

```tsx
const handleWordClicked = (newWord: string) => {
  setWord(newWord);
  setCurrentWord(newWord);
  fetchWordData(newWord);
};
```

This function operates by initially setting the word (which is displayed in the input field) to the word that was clicked. Following this, it executes another fetch operation with the new word, which subsequently displays its definitions, synonyms, and antonyms.

## Styling

I used a CSS module to define styles.
You can find the code for styling in my GitHub [repository](https://github.com/rolemadelen/play-with-datamuse/blob/main/src/App.module.css).

## Entire Code

```tsx
function App() {
  const [word, setWord] = useState('');
  const [currentWord, setCurrentWord] = useState('');
  const [antonyms, setAntonyms] = useState<Antonym[]>([]);
  const [synonyms, setSynonyms] = useState<Synonym[]>([]);
  const [definitions, setDefinitions] = useState<string[]>();

  const fetchWordData = (newWord: string) => {
    const querySynonym = `/words?rel_syn=${newWord}`;
    const queryAntonym = `/words?rel_ant=${newWord}`;
    const queryDefinition = `/words?sp=${newWord}&md=d`;

    Promise.all([
      fetch(config.BASE_URL + querySynonym),
      fetch(config.BASE_URL + queryAntonym),
      fetch(config.BASE_URL + queryDefinition),
    ])
      .then((responses) => {
        return Promise.all(responses.map((response) => response.json()));
      })
      .then(([synonymData, antonymData, definitionsData]) => {
        setSynonyms(synonymData);
        setAntonyms(antonymData);
        setDefinitions(definitionsData[0].defs.slice(0, 3));
      });
  };

  const handleFetchData = (e: React.FormEvent) => {
    e.preventDefault();
    fetchWordData(word);
    setCurrentWord(word);
  };

  const handleWordClicked = (newWord: string) => {
    setWord(newWord);
    setCurrentWord(newWord);
    fetchWordData(newWord);
  };

  return (
    <>
      <form
        className={style.form}
        onSubmit={handleFetchData}>
        <label htmlFor='wordInput'></label>
        <input
          id='wordInput'
          type='text'
          onChange={(e) => setWord(e.target.value)}
          placeholder='Enter a word'
          value={word}
        />
        <button type='submit'></button>
      </form>

      <div className={style.definitions}>
        <h1 className={style.currentWord}>{currentWord}</h1>
        <ul>
          {definitions?.map((def) => (
            <li key={def}>{def.replace('\t', '. ')}</li>
          ))}
        </ul>
      </div>
      <div className={style.displayWords}>
        {synonyms.length > 0 && (
          <div className={style.synonyms}>
            <h3>
              Synonyms for '
              <span className={style.currentWordSmall}>{currentWord}</span>'
            </h3>
            <ul>
              {synonyms.map((synonym) => (
                <li
                  key={synonym.word}
                  onClick={() => handleWordClicked(synonym.word)}>
                  {synonym.word}
                </li>
              ))}
            </ul>
          </div>
        )}
        {antonyms.length > 0 && (
          <div className={style.antonyms}>
            <h3>
              Antonyms for '
              <span className={style.currentWordSmall}>{currentWord}</span>'
            </h3>
            <ul>
              {antonyms.map((antonym) => (
                <li
                  key={antonym.word}
                  onClick={() => handleWordClicked(antonym.word)}>
                  {antonym.word}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
```
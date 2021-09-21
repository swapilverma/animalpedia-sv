import React, { useState } from "react";
import "./styles.css";

var animalDictionary = {
  "🐕": "dog",
  "🦍": "gorilla",
  "🦝": "racoon",
  "🐎": "horse",
  "🐄": "cow",
  "🐪": "camel",
  "🐐": "goat"
};
var animalWeKnow = Object.keys(animalDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function animalInputHandler(event) {
    var userInput = event.target.value;
    var meaning = animalDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this is our database";
      setMeaning(meaning);
    } else {
      setMeaning(meaning);
    }
  }
  function clickHandler(animal) {
    var meaning = animalDictionary[animal];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1
        style={{
          margin: "5rem 5rem 3rem 5rem",
          fontSize: "2.5rem"
        }}
      >
        {" "}
        <span>🦁</span> Animalpedia!!
      </h1>

      <input
        onChange={animalInputHandler}
        style={{
          padding: "1rem",
          width: "75%"
        }}
      />

      <h2>{meaning}</h2>
      <h3
        style={{
          fontSize: "1.2rem"
        }}
      >
        Animals we know
      </h3>
      {animalWeKnow.map(function (animal) {
        return (
          <span
            id="animallist"
            onClick={() => clickHandler(animal)}
            style={{
              cursor: "pointer",
              fontSize: "2.5rem",
              padding: "0.5rem"
            }}
            key={animal}
          >
            {animal}
          </span>
        );
      })}
    </div>
  );
}

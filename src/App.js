import React from "react";

const FruitList = [
  { id: 1, name: "Peach", emoji: "🍑" },
  { id: 2, name: "Orange", emoji: "🍊" },
  { id: 3, name: "Kiwi", emoji: "🥝" },
  { id: 4, name: "Banana", emoji: "🍌" },
];

function Fruit({ name, emoji }) {
  return (
    <div>
      <h3>
        I love {name} {emoji}
      </h3>
    </div>
  );
}

function App() {
  return (
    <div>
      {FruitList.map((piece) => (
        <Fruit key={piece.id} name={piece.name} emoji={piece.emoji} />
      ))}
    </div>
  );
}

export default App;

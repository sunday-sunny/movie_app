import React from "react";
import PropTypes from "prop-types";

const FruitList = [
  { id: 1, name: "Peach", emoji: "🍑", number: 5 },
  { id: 2, name: "Orange", emoji: "🍊", number: 3 },
  { id: 3, name: "Kiwi", emoji: "🥝", number: 2 },
  { id: 4, name: "Banana", emoji: "🍌", number: 4 },
];

function Fruit({ name, emoji, number }) {
  return (
    <div>
      <h3>
        I love {name} {emoji} 👉stock {number}
      </h3>
    </div>
  );
}

Fruit.propTypes = {
  name: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

function App() {
  return (
    <div>
      {FruitList.map((piece) => (
        <Fruit
          key={piece.id}
          name={piece.name}
          emoji={piece.emoji}
          number={piece.number}
        />
      ))}
    </div>
  );
}

export default App;

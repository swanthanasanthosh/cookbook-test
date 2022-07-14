import React, { useState } from "react";

function MyRecipe() {
  const [isClicked, setIsClicked] = useState(false);
  const [selected, setSelected] = useState([{}]);

  const recipes = [
    {
      id: 1,
      author: "Mike Wheeler",
      name: "Chicken Curry",
      description: "Delicious Spicy Chicken Curry!",
      image: "http://localhost:3000/chickencurry.png",
      time: "50 min",
    },
    {
      id: 2,
      author: "Will Byers",
      name: "Hamburger",
      description: "Juicy Chicken Burger With Soft Bun!",
      image: "http://localhost:3000/burger.png",
      time: "15 min",
    },
    {
      id: 3,
      author: "Lucas Sinclair",
      name: "Vanilla Ice Cream",
      description: "An Ice cream A Day Keeps The Stress Away!",
      image: "http://localhost:3000/ice.png",
      time: "20min",
    },
    {
      id: 4,
      author: "Dustin Henderson",
      name: "Chocolate Cake",
      description: "Make Life Extra Sweet With Rich Chocolate Cake!",
      image: "http://localhost:3000/cake.png",
      time: "45 min",
    },
  ];

  const handleClick = (id, e) => {
    e.preventDefault();
    const filtered = recipes.filter((item) => {
      return item.id === id;
    });

    setIsClicked(true);
    setSelected(filtered);
  };
  return (
    <div className="Recipe">
      <div className="sidenav">
        <ol>
          {recipes.map((item) => (
            <li key={item.id}>
              <button
                className="button"
                onClick={(e) => handleClick(item.id, e)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div className="recipecontent">
        {!isClicked && <h4>Please select a dish from the left...</h4>}
        {isClicked && (
          <div>
            <img
              className="image"
              src={selected[0].image}
              width="300"
              height="250"
              alt="Not Available"
            ></img>
            <span className="span">Name Of Dish: {selected[0].name}</span>
            <span className="span">Author: {selected[0].author}</span>
            <span className="span">Description: {selected[0].description}</span>
            <span className="span">Preperation Time: {selected[0].time}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyRecipe;

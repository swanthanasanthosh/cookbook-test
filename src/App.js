import React from "react";
import "./styles.css";
import MyHeader from "./components/Header";
import MyFooter from "./components/Footer";
import MyRecipe from "./components/Recipe";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: "url(http://localhost:3000/wallpaper.png)",
        backgroundRepeat: "no-repeat",
      }}
    >
      <MyHeader />
      <MyRecipe />
      <MyFooter />
    </div>
  );
}

export default App;

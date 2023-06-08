import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import TileList from "./TileList";

function App() {
  const [wasClicked, setClick] = useState(false);
  const [hogsArray, setHogs] = useState(hogs);

  console.log(hogsArray);

  function handleClick(e) {
    setClick(() => !wasClicked);
    hogsArray.map((hog) => {
      if (hog.name === e.target.parentNode.id) {
      }
    });
  }

  return (
    <div className="App">
      <Nav />
      <TileList
        hogs={hogsArray}
        handleClick={handleClick}
        wasClicked={wasClicked}
      />
    </div>
  );
}

export default App;

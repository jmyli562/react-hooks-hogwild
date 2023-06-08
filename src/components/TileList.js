import React from "react";
import Tile from "./Tile";

function TileList({ hogs, handleClick, wasClicked, currPig }) {
  const tileElement = hogs.map((hog) => {
    return (
      <Tile
        key={hog.name}
        name={hog.name}
        image={hog.image}
        specialty={hog.specialty}
        weight={hog.weight}
        greased={hog.greased}
        medal={hog["highest medal achieved"]}
        hogs={hogs}
        handleClick={handleClick}
        wasClicked={wasClicked}
      ></Tile>
    );
  });
  return <div className="pigList">{tileElement}</div>;
}

export default TileList;

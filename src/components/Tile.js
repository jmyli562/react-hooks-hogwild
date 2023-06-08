import React from "react";
import TileInfo from "./TileInfo";

function Tile({
  name,
  image,
  specialty,
  weight,
  greased,
  medal,
  hogs,
  handleClick,
  wasClicked,
  currPig,
}) {
  return (
    <ul className="pigTile" id={name}>
      <h3>{name}</h3>
      <img src={image} height="300px" width="300px" onClick={handleClick}></img>
      {wasClicked ? (
        <TileInfo
          specialty={specialty}
          weight={weight}
          greased={greased}
          medal={medal}
        ></TileInfo>
      ) : null}
    </ul>
  );
}
export default Tile;

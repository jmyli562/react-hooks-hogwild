import React from "react";

function TileInfo({ specialty, weight, greased, medal }) {
  return (
    <>
      <p>Specialty: {specialty}</p>
      <p>Weight: {weight}</p>
      <p>Greased:{greased === true ? "True" : "False"}</p>
      <p>Highest medal earned: {medal}</p>
    </>
  );
}

export default TileInfo;

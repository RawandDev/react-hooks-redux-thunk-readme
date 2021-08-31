import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAstronauts } from "./astronautsSlice";

function Astronauts() {
  const dispatch = useDispatch();

  const astronauts = useSelector((state) => state.astronauts.entities);

  const status = useSelector((state) => state.astronauts.status);

  function handleClick() {
    // dispatch the action creator (see below!)
    dispatch(fetchAstronauts());
  }

  console.log("Astronauts.jsx: astronauts", astronauts);

  const astronautsList = astronauts.map((astro) => (
    <li key={astro.id}>{astro.name}</li>
  ));

  return (
    <div>
      <button onClick={handleClick}>Get Astronauts</button>
      {astronautsList}
      {status === "loading" && <p>Loading...</p>}
    </div>
  );
}

export default Astronauts;

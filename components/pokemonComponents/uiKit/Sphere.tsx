import React from "react";

interface SphereProps {
  type: string;
}

const colours = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

const Sphere: React.FC<SphereProps> = ({ type }) => {
  const code: string = colours[type as keyof typeof colours];
  const style = { backgroundColor: code };
  return (
    <div
      className="mx-2 my-2 w-4 h-4  text-center rounded-full"
      style={style}
    ></div>
  );
};

export default Sphere;

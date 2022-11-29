import { useEffect, useState } from "react";
import data from "../data.json";

export const PetList = ({ pet }) => {
  return (
    <aside className="pets-list">
      {pet.length > 0 ? (
        pet.map((p) => <li style={{ listStyleType: "none" }}>{p.name}</li>)
      ) : (
        <p>No pets listed for this employee.</p>
      )}
    </aside>
  );
};

export default PetList;

import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

export const Employee = ({
  firstName,
  lastName,
  prefix,
  postfix,
  title,
  id,
}) => {
  const [toggle, setToggle] = useState(false);

  function handleButton() {
    setToggle(!toggle);
  }

  return (
    <article key={id} className="employee">
      <h3>
        {prefix + " " + firstName + " " + lastName}
        {postfix ? ", " + postfix : ""}
      </h3>
      <h4>{title}</h4>
      <button onClick={handleButton}>{!toggle ? "Show" : "Hide"} Pets</button>
      {toggle ? <PetList id={id} /> : null}
    </article>
  );
};

export default Employee;

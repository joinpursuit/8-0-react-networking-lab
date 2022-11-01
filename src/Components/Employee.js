import PetList from "./PetList";
import "./Employee.css";
import React, { useState } from "react";

export const Employee = ({
  id,
  firstName,
  lastName,
  prefix,
  postfix,
  title,
}) => {
  const [show, setShow] = useState(false);

  return (
    <article className="employee">
      <h3>
        {prefix} {firstName} {lastName}, {postfix}
      </h3>
      <h4>{title}</h4>
      <button onClick={() => setShow(true)}>Show Pets</button>
      {show && <PetList id={id} />}
    </article>
  );
};

export default Employee;

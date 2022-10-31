import PetList from "./PetList";
import "./Employee.css";
import React, { useState, useEffect } from "react";

export const Employee = () => {
  let empList = [];
  const [currEmployees, setEmployees] = useState([]);
  const [cid, setID] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetch("https://vet-resource-api-9-2.herokuapp.com/api/employees", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  empList = currEmployees.map((employee) => {
    const { firstName, lastName, prefix, postfix, title, id } = employee;
    let name = `${prefix || ""} ${firstName} ${lastName}${
      postfix ? ", " + postfix : ""
    }`;
    return (
      <article className="employee">
        <h3>{name}</h3>
        <h4>{title || ""}</h4>
        <button
          onClick={() => {
            setToggle(!toggle);
            setID(id);
          }}
        >
          Show Pets
        </button>
        <PetList id={id} toggle={toggle} setToggle={setToggle} cid={cid} />
      </article>
    );
  });

  return <>{empList}</>;
};

export default Employee;

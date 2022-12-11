import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

const Employee = ({ employee, pets }) => {

  const [toggle, setToggle] = useState(false);

  function handleOnclick(e) {
    setToggle(!toggle);
  }


  return (
    <article className="employee">
      <h3>{employee.prefix} {employee.firstName} {employee.lastName}{employee.postfix && ", " + employee.postfix}</h3>
      <h4>{employee.title}</h4>
      <article>
        <button onClick={handleOnclick}>Show Pets</button>
      </article>
      {toggle && <PetList employee={employee} pets={pets} />}
    </article>
  );
};

export default Employee;

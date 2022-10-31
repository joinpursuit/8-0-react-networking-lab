import PetList from "./PetList";
import "./Employee.css";
import { useState} from "react";

export const Employee = ({ el, pets }) => {
  const [show, setShow] = useState(false);

  // fecth API

  return (
    <article className="employee">
      <h3>
        {el.prefix + " " + el.firstName + " " + el.lastName + ", " + el.postfix}
      </h3>
      <h4>{el.title}</h4>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Show Pets" : "Hide Pets"}
      </button>
      {show ? <PetList show={show} employeeID={el.id} />: null}

      {/* <PetList show={show} employeeID={el.id} /> */}
    </article>
  );
};

export default Employee;

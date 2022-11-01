import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";


export const Employee = ({prefix, postfix, firstName, lastName, title, id}) => {
  const [hide, setHide] = useState(false)
  //Set hour to see why couldn't map here
  function toggle(){
    setHide(!hide)
  }
    return (
      <article className="employee">
      <h3>{prefix ? prefix : null} {firstName} {lastName} {postfix ? `, ${postfix}` : null}</h3>
      <h4>{title}</h4>
      <button onClick={toggle()}>Show Pets</button>
      {setHide ? <PetList id={id}/>: null}
    </article>
  );
};

export default Employee;

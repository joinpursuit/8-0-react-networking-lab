import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";


export const Employee = ({employee}) => {
  const {id,firstName,lastName,prefix,title,postfix} = employee;
  const [petDisplayState, updatePetDisplay] = useState(false);
  
  let name = `${firstName} ${lastName}`;
  name = prefix==""?name:`${prefix} `+name;
  name = postfix==""?name:name+`, ${postfix}`;

  return (
    <article className="employee">
      <h3>{name}</h3>
      <h4>{title}</h4>
      <button onClick={()=>{updatePetDisplay(pv=>!pv)}}>{!petDisplayState?"Show":"Hide"} Pets</button>
      {petDisplayState?<PetList employee_id={id}/>:""}
    </article>
  );
};

export default Employee;

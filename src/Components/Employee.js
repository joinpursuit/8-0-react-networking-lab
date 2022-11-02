import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

export const Employee = ({ firstName, id, lastName, postfix, prefix, title }) => {
  // let docName = 
  
  // function staff(){
   
  //   if (prefix) {
  //     return(
  //       docName = '{prefix}{firstName}{lastName}'
  //     )
    
  //   }
  // }

  const [petDetails, setPetDetails] = useState(false)

  function toggleShowMore(e) {
    e.preventDefault();
    setPetDetails(!petDetails);
  }


  return (
    <article className="employee">
      <h3>{prefix ? prefix +' '+firstName +' '+lastName : postfix ? firstName+' '+lastName+', '+postfix : firstName+ ' ' + lastName}</h3>
      <h4>{title}</h4>
      <button onClick={(e) => toggleShowMore(e)}> {!petDetails ? <strong>Show Pets</strong>: <strong>Hide Pets</strong>}</button>
      <div> {petDetails ? <PetList id={id}/> : null}</div>
      
    </article>
  );
};

export default Employee;

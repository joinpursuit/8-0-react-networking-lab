import React, {useEffect, useState} from "react";
import PetList from "./PetList";
import "./Employee.css";


const Employee = (id, firstName, lastName, prefix, postfix, title) => {
  /*constructor(props) {
    super(props)
    this.state = {
      showPets: false,
    }
  }*/

  /*const [showPets, setShowPets] = useState(false);
  getPrefix = (firstName, lastName, prefix, postfix) => {
    let fullName = "";
   if (prefix !== "") {
     fullName = `${prefix} ${firstName} ${lastName}`;
   } else if (postfix !== "") {
     fullName = `${firstName} ${lastName}, ${postfix}`;
   } else {
     fullName = `${firstName} ${lastName}`;
   }
   return fullName;
  }*/

  const [showPets, setShowPets] = useState({showPets:false});
  const getPrefix = () => {
    let fullName = "";
   if (prefix !== "") {
     fullName = `${prefix} ${firstName} ${lastName}`;
   } else if (postfix !== "") {
     fullName = `${firstName} ${lastName}, ${postfix}`;
   } else {
     fullName = `${firstName} ${lastName}`;
   }
   return fullName;
  }
  //render(){
  //  const {id, firstName, lastName, prefix, postfix, title} = this.props.worker
  return (
    <article className="employee">
      <h3>{getPrefix()}</h3>
      <h4>{title}</h4>
      <button 
        onClick={() => setShowPets({showPets:!showPets})}>Show Pets</button>
        <PetList id={id} showPets={showPets}/>
    </article>
  );
//};
}
export default Employee;

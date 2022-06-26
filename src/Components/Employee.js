import PetList from "./PetList";
import "./Employee.css";
import React from "react";

class Employee extends React.Component{
 constructor(){
   super();
   this.state ={
     displayPets: true, 
   }
 }

 display = () =>{
   this.setState({ displayPets: this.state.displayPets, 
 })
}
render(){
  let{
    id,
    firstName,
    lastName,
    prefix,
    postfix,
    title,
  } = this.props.info
  let marker = [
    prefix,
    firstName,
    lastName,
  ].join(" ") + (postfix ? ', ' + postfix : '')
  let {displayPets} = this.state

  return (
    <article className="employee">
      <h3>{marker}</h3>
      <h4>{title}</h4>
      <button onClick={this.display}>Show Pets</button>
      <PetList employeeID={id} displayPets={displayPets}/>
    </article>
  );
}
};

export default Employee;
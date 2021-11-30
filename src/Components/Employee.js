import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";

class Employee extends Component  {
 

  render(){  
    const { firstName, lastName, prefix, postfix, id, title } = this.props.e
    
  return (
    <article className="employee">
      <h3>{prefix} {firstName} {lastName}, {postfix}</h3>
      <h4>{title}</h4>
      <PetList id={id}/>
    </article>
   
    );
  }
};

export default Employee;

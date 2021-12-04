import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";

class Employee extends Component {
  constructor(){
    super();
  }

  render(){
   const {prefix, firstName , lastName , postfix, title, id} = this.props.person
  return (
    <article className="employee">
      <h3>'{prefix} {firstName} {lastName}, {postfix}' </h3>
      <h4>{title}</h4>
      
      <PetList id={id}/>
    </article>
  
  );
  }
};

export default Employee;

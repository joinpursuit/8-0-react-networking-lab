import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";

class Employee extends Component {
  // constructor(){
  //   super();
  // }
  render(){
    const { firstName, lastName, postfix, prefix, title } = this.props.employee;
    // console.log(firNstame)
    // const { name } = this.props.pet;
    return (
      <article className="employee">
        <h3>{prefix}{" "}{firstName}{" "}{lastName}{", "}{postfix}</h3>
        <h4>{title}</h4>
        <button >Show Pets</button>
        <PetList />
      </article>
    );
  }
};

export default Employee;

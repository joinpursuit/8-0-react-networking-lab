import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";

class Employee extends Component {
  render(){
    return(
      <article className="employee">
        <h3>Staff Member Name{this.props.staffMemberName}</h3>
        <h4>Staff Member Title{this.props.staffMemberTitle}</h4>
        <button>Show Pets</button>
        <PetList />
      </article>
    )
  }
}

export default Employee;

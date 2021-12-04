import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";

class Employee extends Component {
  // constructor() {
  //   super();
  //   this.state = {
    
  //   }
  // }

  render() {
    const { firstName, lastName, prefix, postfix, title } = this.props.employee

    return (
      <article className="employee">
        <h3>{prefix} {firstName} {lastName} {postfix}</h3>
        <h4>{title}</h4>
        <button onClick={this.props.handlePetData}>Show Pets</button>
        <PetList />
      </article>
    );
  }
}

// export const Employee = () => {
//   return (
// <article className="employee">
//   <h3>Staff Member Name</h3>
//   <h4>Staff Member Title</h4>
//   <button>Show Pets</button>
//   <PetList />
// </article>
//   );
// };

export default Employee;

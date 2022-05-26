import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react/cjs/react.production.min";

// export const Employee = () => {
//   return (
//     <article className="employee">
//       <h3>Staff Member Name</h3>
//       <h4>Staff Member Title</h4>
//       <button>Show Pets</button>
//       <PetList />
//     </article>
//   );
// };

// export default Employee;

export default class Employee extends Component {
  constructor (props) {
    super (props);
    this.state = {}
  }

  render () {
    const { prefix, firstName, lastName, postfix, id} = this.props.employee
    return (
      <article className="employee">
      <h3>
        { prefix ? prefix + ' ' : null }
        { firstName + ' '} 
        { lastName }
        { postfix ? ', ' + postfix : null}
      </h3>
      <h4>Staff Member Title</h4>
      <button>Show Pets</button>
      <PetList employeeId={ id }/>
    </article>
    )
  }
}
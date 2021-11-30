import PetList from "./PetList";
import "./Employee.css";

export const Employee = (props) => {
  return (
    <article className="employee">
      <h3>
        Staff Member Name: {this.props.employees.prefix}{" "}
        {this.props.employees.firstName} {this.props.employees.lastName}
      </h3>
      <h4>Staff Member Title</h4>
      <button>Show Pets</button>
      <PetList />
    </article>
  );
};

export default Employee;

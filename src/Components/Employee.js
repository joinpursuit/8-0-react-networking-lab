import PetList from "./PetList";
import "./Employee.css";

export const Employee = (props) => {
  let { id, firstName, lastName, prefix, postfix } = props.employeeData;
  if (postfix) {
    postfix = ", " + postfix;
  }

  return (
    <article className="employee">
      <h3>{`${prefix} ${firstName} ${lastName}${postfix}`}</h3>
      <h4>Staff Member Title</h4>
      <button>Show Pets</button>
      <PetList />
    </article>
  );
};

export default Employee;

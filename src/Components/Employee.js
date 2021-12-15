import PetList from "./PetList";
import "./Employee.css";

export const Employee = (props) => {
const {prefix, firstName, lastName, title, key} = props
  
  return (
    <article className="employee">
      <h3>{prefix} {firstName} {lastName}</h3>
      <h4>{title}</h4>
      <button>Show Pets</button>
      <PetList empId={key}/>
    </article>
  );
};

export default Employee;

import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({ employee }) => {
  const { firstName, lastName, prefix, postfix, title } = employee;

  return (
    <article className="employee">
      <h3>{`${prefix}. ${firstName} ${lastName}, ${postfix}`}</h3>
      <h4>{title}</h4>
      <button>Show Pets</button>
      <PetList />
    </article>
  );
};

export default Employee;

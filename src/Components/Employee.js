import PetList from "./PetList";
import "./Employee.css";

const Employee = (props) => {
  const { firstName, lastName, id, prefix, postfix, title } = props.person

  return (
    <article className="employee">
      <h3> {prefix && prefix} {firstName} {lastName}{postfix && `, ${postfix}`}</h3>
      <h4>{title}</h4>
      <button>Show Pets</button>
      <PetList id={id} />
    </article>
  );
};

export default Employee;
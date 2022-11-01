import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({employee, pets}) => {
  const {id,firstName,lastName,prefix, postfix, title} = employee

  console.log(pets)
  return (
    <article className="employee">
      <h3>
      {prefix} {firstName} {lastName}{postfix === '' ? '' : `, ${postfix}`}
        </h3>
      <h4>{title}</h4>
      <button>Show Pets</button>
      <PetList id={id}/>
    </article>
  );
};

export default Employee;

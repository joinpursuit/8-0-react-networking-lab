import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({id, firstName, lastName, prefix, postfix, title, pets}) => { 
  return (
    <article className="employee">
      <h3>{firstName} {lastName}</h3>
      <h4>{title}</h4>
      <button>Show Pets</button>
  {pets.map(({id, name, kind, breed, employeeID}) => {
      return (
        <PetList id={id} name={name} kind={kind} breed={breed} employeeID={employeeID} />
      )
    })}
    </article>
  );
};

export default Employee;
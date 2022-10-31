import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({employees}) => {

  return (
    
      employees.map(({firstName, lastName, prefix, postfix, title}) => {
        return(
          <article className="employee">
      <h3>{prefix? prefix : null} {firstName} {lastName} {postfix ? `, ${postfix}` : null}</h3>
      <h4>Staff Member Title</h4>
      <button>Show Pets</button>
      <PetList />
    </article>
        )
      })
    
    // <article className="employee">
    //   <h3>Staff Member Name</h3>
    //   <h4>Staff Member Title</h4>
    //   <button>Show Pets</button>
    //   <PetList />
    // </article>
  );
};

export default Employee;

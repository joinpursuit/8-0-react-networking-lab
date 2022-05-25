import PetList from "./PetList";
import "./Employee.css";

export const Employee = (json) => {
  console.log(json)
  {json.map(x => {
    return (
      <article className="employee">
        <h3>{json.firstName} {json.lastName}</h3>
        <h4>Staff Member Title</h4>
        <button>Show Pets</button>
        <PetList />
      </article>
    );
  })}
};

export default Employee;
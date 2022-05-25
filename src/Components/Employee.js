import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react/cjs/react.production.min";


export default class Employee extends Component {

  render() {
    return (
      <article className="employee">
        <h3>Staff Member Name</h3>
        <h4>Staff Member Title</h4>
        <button>Show Pets</button>
        <PetList />
      </article>
    );
  }
}

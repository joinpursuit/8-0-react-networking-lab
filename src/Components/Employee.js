import { Component } from "react";
import PetList from "./PetList";
import "./Employee.css";

class Employee extends Component {
  constructor() {
    super();
    this.state = {
      petList: [],
    };
  }

  showPet = (id) => {
    fetch(`https://serene-tundra-77911.herokuapp.com/api/pets?employeeId=${id}`)
      .then((res) => res.json())
      .then((petData) => {
        this.setState({
          petList: petData,
        });
      });
  };

  formatStaffName = () => {
    const { firstName, lastName, prefix, postfix } = this.props.staff;
    const fullName = `${firstName} ${lastName}`;
    if (prefix) return `${prefix} ${fullName}`;
    else if (postfix) return `${fullName}, ${postfix}`;
    return fullName;
  };

  render() {
    return (
      <article className="employee">
        <h3>{this.formatStaffName()}</h3>
        <h4>{this.props.staff.title}</h4>
        <button onClick={() => this.showPet(this.props.staff.id)}>
          Show Pets
        </button>
        <PetList petList={this.state.petList} />
      </article>
    );
  }
}

export default Employee;

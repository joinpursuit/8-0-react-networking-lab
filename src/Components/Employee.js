import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react/cjs/react.production.min";

export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      title: this.props.title,
      prefix: this.props.prefix,
      postfix: this.props.postfix,
      id: this.props.id,
      petList: [],
      isActive: false,
    };
  }

  listPet = (id) => {
    fetch(`https://vet-lab-8-4.herokuapp.com/api/pets?employeeId=${id}`)
      .then((pets) => pets.json())
      .then((pets) => {
        this.setState({
          petList: pets,
          isActive: true,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidUpdate() {
    console.log("HOLD ON");
  }

  render() {
    return (
      <article className="employee">
        <h3>
          {this.state.prefix} {this.state.firstName} {this.state.lastName}
          {this.state.postfix ? `, ${this.state.postfix}` : null}
        </h3>
        <h4>{this.state.title}</h4>
        <button onClick={(e) => this.listPet(this.state.id)}>Show Pets</button>
        {this.state.isActive ? <PetList pets={this.state.petList} /> : null}
      </article>
    );
  }
}

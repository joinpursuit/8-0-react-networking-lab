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
    };
    //console.log(props);
    //console.log(this.state.petList)
  }

  listPet = (id) => {
    fetch(`https://vet-lab-8-4.herokuapp.com/api/pets?employeeId=${id}`)
      .then((pets) => pets.json())
      .then((pets) => {
        console.log(id);
        console.log(pets);
        // this.setState({
        //   petList: pets,
        // });
        //console.log(this.state.petList)
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <article className="employee">
        <h3>
          {this.state.prefix} {this.state.firstName} {this.state.lastName}{" "}
          {this.state.postfix}
        </h3>
        <h4>{this.state.title}</h4>
        <h4>{this.state.id}</h4>
        {/* <h3>Person's name and title go here</h3>
        <h4>Actually just their title will go here</h4> */}
        <button onClick={e => this.listPet(this.state.id)}>Show Pets</button>
        <PetList pets={this.state.petList} />
      </article>
    );
  }
}

// For line 30:

// Fetch and map through pets, assigning pets based on the passed through id prop

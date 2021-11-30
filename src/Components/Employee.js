import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";

class Employee extends Component {
  constructor(){
    super();

    this.state = {
      allPets: [],
    }
  }

  handlePetClick=()=>{
    console.log("employee id:", this.props.id);
    const id = this.props.id;

    fetch(`https://pursuit-veterinarian.herokuapp.com/api/pets?employeeId=${id}`)
      .then((res)=>{
        return res.json();
      }).then((petData)=>{
        this.setState({
          allPets: petData,
        })
    })
  }

  render(){
    const petCards = this.state.allPets.map((pet)=>{
      return (
        <PetList 
          key={pet.id}
          petId={pet.id}
          petName={pet.name}
          petKind={pet.kind}
          petBreed={pet.breed}
          petEmployeeId={pet.employeeId}
        />
      )
    })


    let fullName = `${this.props.firstName} ${this.props.lastName}`;
    if (this.props.prefix) {
      fullName = this.props.prefix + " " + fullName;
    }
    if (this.props.postfix) {
      fullName = fullName + ", " + this.props.postfix;
    }

    return(
      <article className="employee">
        <h3>
          {fullName}
        </h3>
        <h4>{this.props.title}</h4>
        <button onClick={this.handlePetClick}>Show Pets</button>
        {petCards}
      </article>
    )
  }
}

export default Employee;

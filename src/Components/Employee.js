import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";

class Employee extends Component {
  constructor(){
    super();
    this.state = {
      petList: [],
    }
  }

  getPetList = () => {
    
    const { id } = this.props.employee
    const { employeeId } = this.props.pet

    if(id !== employeeId){
      this.petData(employeeId)
    }
  }

  petData = () => {
    fetch("https://pursuit-veterinarian.herokuapp.com/api/pets")
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{

      let filterPetList = data.filter((pet) => pet.employeeId === this.props.employee.id);
    
      this.setState({
        petList: filterPetList,
      })
    })
  }

  render(){
    const { firstName, lastName, postfix, prefix, title } = this.props.employee;
    let petList = this.state.petList.map((pet) => {
        return `${pet.name}, `
    })
    
    return (
      <article className="employee">
        <h3>{prefix} {firstName} {lastName}{postfix === "" ? "" : `, ${postfix}`}</h3>
        <h4>{title}</h4>
        <button type="submit" onClick={this.petData}>Show Pets</button>
        <PetList petList={petList}/>
      </article>
    );
  }
};

export default Employee;
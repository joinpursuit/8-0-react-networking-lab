import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";

class Employee extends Component {
  constructor(){
    super();
    this.state = {
      petList: [],
      employeeCredentials: ""
    }
  }

  getPetList = () => {
    const { id } = this.props.employee
    const { employeeId } = this.props.pet
    if(id !== employeeId){
      this.handlePetData(employeeId)
    }
  }

  handlePetData = () => {
    fetch("https://pursuit-veterinarian.herokuapp.com/api/pets")
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      console.log("pet data", data);
      console.log("employee:", this.props.employee.id)
      let filterPetList = data.filter((pet) => pet.employeeId === this.props.employee.id);
      console.log("filter:", filterPetList)
      this.setState({
        petList: filterPetList,
      })
    })
  }

  render(){
    const { firstName, lastName, postfix, prefix, title } = this.props.employee;
    // console.log(firNstame)
    let petElArr = this.state.petList.map((pet) => {
        return `${pet.name}, `
    })
    // console.log("pet name", petElArr)
    return (
      <article className="employee">
        <h3>{prefix} {firstName} {lastName}{postfix === "" ? "" : `, ${postfix}`}</h3>
        <h4>{title}</h4>
        <button type="submit" onClick={this.handlePetData}>Show Pets</button>
        <PetList petElArr={petElArr}/>
      </article>
    );
  }
};

export default Employee;

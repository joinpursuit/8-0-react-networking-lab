import PetList from "./PetList";
import "./Employee.css";
import React from "react";

class Employee extends React.Component {
  constructor(){
    super()
    this.state = {
      allPetsList: [],
      showPets: [],
      havePets: false,
    }
  }

  componentDidMount(){
    fetch("https://pursuit-veterinarian.herokuapp.com/api/pets")
      .then((res)=> res.json())
      .then((petInfo)=>{
        this.setState({
          allPetsList: petInfo,
        })
      })
  }

  handleShowPets =(id)=> {     
  
      this.setState ({
        showPets: this.state.allPetsList.filter(petObj => petObj.employeeId === id).map(pet => pet.name),
        havePets: true,
      })
    
  }
  render(){
 
      let {firstName, lastName, prefix, postfix, title, id} = this.props.staff;

    return (
      <article className="employee">
        <h3>{prefix} {firstName} {lastName}, {postfix}</h3>
        <h4>{title}</h4>
        <button onClick={()=>this.handleShowPets(id)}>Show Pets</button>
        <PetList showPets={this.state.showPets} havePets={this.state.havePets}/>
      </article>
    );
  }
  
};

export default Employee;

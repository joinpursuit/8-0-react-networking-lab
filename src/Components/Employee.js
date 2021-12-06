import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";

class Employee extends Component{
  constructor(){
    super();
    this.state={
      petsArr: [],
      dogNames: "",
      hasPet: false
    }
  }

formatName = (lastName, firstName, postfix, prefix)=>{
  let name = `${firstName} ${lastName}`; 
  if(prefix) name = `${prefix} ${name}`;
  if(postfix) name = `${name}, ${postfix}`;
  return name;
}

  componentDidMount(){
    fetch("https://pursuit-veterinarian.herokuapp.com/api/pets")
      .then((res)=>{
        return res.json();
      }).then((data)=>{
        this.setState({
          petsArr:data
        })
        // console.log(data);
      })
  }

  handlePets=(id)=>{
    let dogNames = this.state.petsArr.filter(pet => pet.employeeId === id).map(pet=>pet.name).join(", ");
    this.setState({
      dogNames: dogNames,
      hasPet: true
    })
  }

  

   render(){
     let {firstName, lastName, postfix, prefix, title, id} = this.props.employee;
    return (
      <div>
        <article className="employee">
          <h3>{this.formatName(lastName,firstName, postfix, prefix)}</h3>
          <h4>{title}</h4>
          <button onClick={()=> this.handlePets(id)}>Show Pets</button>
          <PetList dogNames={this.state.dogNames} hasPets={this.state.hasPet}/>
        </article>
      </div>
      
    );
   }
};

export default Employee;

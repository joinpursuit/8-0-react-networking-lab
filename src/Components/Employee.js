import PetList from "./PetList";
import "./Employee.css";
import React from "react";

class Employee extends React.Component {
  constructor(){
    super();
    this.state={
      pets:[],
      employeePets:[],
      show:false
      
    }
  }
  componentDidMount=()=>{
    fetch("https://pursuit-veterinarian.herokuapp.com/api/pets")
       .then(res=> res.json())
          .then(data=> this.setState({pets:data}))
          .catch(e=> console.log(e));
  }
  
  handlePetList=(id)=>{
    this.setState({
      employeePets:this.state.pets.filter(pet=>pet.employeeId===id).map(animal=> animal.name),
      show:true
    })
    
  }
  
  
  nameFormatter=(fName,lName,pref,postf)=>{
    let name=`${fName} ${lName}`;
    if(pref) name =`${pref} ${name}`;
    return !postf? name : `${name}, ${postf}`;
  }
  
 


  render(){
    const {firstName,lastName,prefix, postfix,title,id}=this.props.employee;
    
    return (
      <article className="employee">
        <h3>{this.nameFormatter(firstName,lastName,prefix,postfix)}</h3>
        <h4>{title}</h4>
        <button onClick={()=>this.handlePetList(id)}>Show Pets</button>
        <PetList employeePets={this.state.employeePets} show={this.state.show}/>
      </article>
    );
  }
};

export default Employee;

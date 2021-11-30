import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";

class Employee extends Component  {
  constructor(){
    super()
    this.state={
      employeeData: []
    }


  }

  componentDidMount(){
    this.handleEmployeeData()
  }
  
  handleEmployeeData = () => {
    fetch("https://pursuit-veterinarian.herokuapp.com/api/employees")
    .then((res)=>{
      return res.json();
    }).then((data)=>{
      this.setState({
        employeeData: data
      });
    });
    
  }


  handleShowPets = () =>{
    return(
      console.log("Trigger")
      )
    }
    
    render(){
      
      
      let employeeDisplay = this.state.employeeData.map((employee)=>{
        const { firstName, lastName, prefix, postfix, title, id} = employee
        return (
          <article className="employee">
          <h3>{prefix} {firstName} {lastName}, {postfix}</h3>
          <h4>{title}</h4>
          <button onClick={this.handleShowPets}>Show Pets</button>
          {/* <PetList id={id} handleShowPets={this.handleShowPets}/> */}
        </article>
      )
    })
    
    
    return (
      <div>
        {employeeDisplay}
      </div> 
    );
  }
};

export default Employee;

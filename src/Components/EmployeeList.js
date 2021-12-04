import { Component } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends Component{
  constructor(){
    super();
    this.state={
     employeeArr:[]
    }
  }


  componentDidMount(){
  this.handlerNewEmployees()
  }

handlerNewEmployees=()=>{
  fetch("https://pursuit-veterinarian.herokuapp.com/api/employees")
  .then((res)=>{
    return res.json();
  }).then((data)=>{
    this.setState({
      employeeArr: data
    })
  })
}
render(){
  return (
    <main> 
      <h2>All Staff</h2>
      <section className="employee-list">
        {this.state.employeeArr.map(person=><Employee key= {person.id} person={person}/>)}
      </section>
    </main>
  );
}
};

export default EmployeeList;

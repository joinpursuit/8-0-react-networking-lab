import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends React.Component {
  constructor(){
    super();
    this.state={
      allEmployees:[]
    }
  }
  componentDidMount=()=>{
    fetch("https://pursuit-veterinarian.herokuapp.com/api/employees")
       .then(res=> res.json())
          .then(data=> this.setState({allEmployees:data}))
          .catch(e=> console.log(e));
  }

  render(){
    const {allEmployees}=this.state;
    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {allEmployees.map(employee=> <Employee key={employee.id} employee={employee}/>)}
        </section>
      </main>
    );
  }
};

export default EmployeeList;

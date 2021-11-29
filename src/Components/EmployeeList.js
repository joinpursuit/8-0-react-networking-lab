import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends React.Component{
  constructor (){
    super();
    this.state={
      employee: [],
    }
  }
  
  
  componentDidMount() {
  fetch("https://vet-api-8-1.herokuapp.com/api/employees").then((response)=>{
    return response.json()
  }).then((info)=> {
    this.setState({employee:info})
  })
  }
  render(){
   let {employee} = this.state;
    return (
      <main>
    <h2>All Staff</h2>
    <section className="employee-list">
    {employee.map((e) =>(
    <Employee info={e}/>
    ))}
    </section>
    </main>
    );
  };
}

  
export default EmployeeList;

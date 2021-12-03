import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends React.Component {
  constructor(){
    super();
    this.state={
      staffList: [],
    }
  }

  componentDidMount(){
    fetch("https://pursuit-veterinarian.herokuapp.com/api/employees")
      .then((res)=>{
        return res.json()
      }).then((data)=>{
        console.log(data)
        this.setState({
          staffList: data,
        })
      })
  }


  render(){

    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {this.state.staffList.map(staff=><Employee key={staff.id} staff={staff} />)}
        </section>
      </main>
    );
  }
  
};

export default EmployeeList;

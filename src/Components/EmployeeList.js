import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      staffList: [],
    }
  }


  async componentDidMount() {
    try {
      const response = await fetch("https://vet-api-8-1.herokuapp.com/api/employees")
      const data = await response.json();
        this.setState({
          staffList: data,
        })
    } catch(err) {
      console.log("Employee not found.")
    }
  };


  render() {
    const {staffList} = this.state;
    const employees = staffList.map((employeeInfo) => {
      return <Employee info={employeeInfo} key={employeeInfo.id}/>
    })
    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {employees}
        </section>
      </main>
    );
  };
};

export default EmployeeList;

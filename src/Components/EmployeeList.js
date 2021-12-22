import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends React.Component {
  constructor (){
    super();
    this.state = {
      employees: []
    }
  }

  componentDidMount () {
    this.handleEmployeeFetch();
  }

  handleEmployeeFetch = () => {
    fetch("https://vet-api-8-1.herokuapp.com/api/pets")
      .then((res)=> {
        return res.json();
      }).then((data)=> {
        console.log(data)
        this.setState({
          employees: data
        })
      }).catch((err)=>{
        console.log(err)
      })
  }

  render() {
    let employeeCards = this.state.employees.map((el, i)=> <Employee i={i} employeeData={el}/>)
    return (
      <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employeeCards}
      </section>
    </main>
    )
  }
}


export default EmployeeList;

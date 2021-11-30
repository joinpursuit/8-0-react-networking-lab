import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends React.Component {
  constructor(){
    super()
    this.state = {
      people: [],
    }
  }

  componentDidMount(){
    fetch('https://vet-api-8-1.herokuapp.com/api/employees').then((reponse) => {
      return Response.json()
    }).then((data) => {
      setTimeout(() => {
        console.log('Component Did Mount')
        this.setState({people: data})
      }, 3000)
    })
  }

  render(){
    const eachPersons = this.state.people.map(eachPersons =>{
      return <Employee eachPersons={eachPersons}
    })

  return (
    <main>
      <h2>All Staff</h2>
        {/* {props.employees &&
          props.employees.map((employee) => { */}
            //   <Employee
            //     key={employee.id}
            //     firstName={employee.firstName}
            //     lastName={employee.lastName}
            //     prefix={employee.prefix}
            //     title={employee.title}
            //   />
            // );
          <section className="employee-list">

          {eachPerson}
      </section>

    </main>
    );
  );
}

export default EmployeeList;

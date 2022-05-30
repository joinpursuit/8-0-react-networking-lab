import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

class App extends React.Component {
  constructor() {
  super()
  this.state = {
    workers: []
  }
}
getEmployees=()=>{
  fetch("https://vet-lab-8-4.herokuapp.com/api/employees")
  .then(data => data.json())// returns a promise and we pass data
  .then(json => {
    this.setState({
      workers: json
    })
  })
}

//this fires the first time the component renders
componentDidMount() {
  this.getEmployees()
}


render() {
  return (
    <>
    <NavBar />
    <EmployeeList workers = {this.state.workers}
   />
    </>
  )
}
}

export default App;

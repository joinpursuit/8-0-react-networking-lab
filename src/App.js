import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      workers: []
    }
  }
  getEmployees = () => {
    fetch("https://vet-lab-8-4.herokuapp.com/api/employees")
      .then(data => data.json())//returns a promise & return Data
      .then(json => {
        this.setState({
          workers: json
        })
      })
  }

  componentDidMount(){//will effect the codeblock to run should if the info is correct
    this.getEmployees()
  }

  render() {
    // {console.log(this.state.workers, "Sam is da bomb!!")}
    return (
      <div>
        <NavBar />
        <EmployeeList workers={this.state.workers}/>
      </div >
    )
  }
};

 

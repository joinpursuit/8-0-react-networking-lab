import { Component } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends Component {

    constructor() {
      super()
      this.state = {
        person: null,
      }
      console.log("Under Construction")
    }

    componentDidMount(){

      fetch("https://vet-api-8-1.herokuapp.com/api/employees").then((response) => response.json()).then((data) => {

      this.setState({
        person: data
      })  

      }).catch(console.log)

    }

    render() {
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        <Employee person = {this.state.person}/>

      </section>
    </main>
  );
    }
};

export default EmployeeList;

import React, {Component} from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export default class EmployeeList extends Component {
  constructor(props){
    super(props);
  }

  //this is our container
  //this is where we map through our workers props and funnel that information to Employee

  render(){
    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {this.props.workers.map(worker => <Employee worker={worker}/> )}
        </section>
      </main>
    );
  }
};


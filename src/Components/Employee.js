import PetList from "./PetList";
import "./Employee.css";
import React from "react";


class Employee extends React.Component {

  constructor() {
    super();
    this.state = {
      class: "hidden"
    }
  }

  handleClick = () => {
    even.preventDefault();
    this.setState({
      class: ""
    });
  }

  render() {
    const { id, firstNName, lastName, prefix, postfix, title } = 
    this.props.person
  }


}

export default Employee;

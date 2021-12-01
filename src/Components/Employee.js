import PetList from "./PetList";
import "./Employee.css";
import React from "react";

class Employee extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      clicked: false,
    };
  }

  onClick = (event) => {
    event.preventDefault()
    this.setState({
      clicked: !this.state.clicked,
    });
  };
  
  render() {
    let comma = ""
    if(this.props.mango.postfix) {
      comma = ",";
    }
    
    return (
      <article className="employee">
        <h3>
          {this.props.mango.prefix} {this.props.mango.firstName} {this.props.mango.lastName}
          {comma} {this.props.mango.postfix}
        </h3>
        <h4>{this.props.mango.title}</h4>
        <button onClick={this.onClick}>Show Pets</button>
        {this.state.clicked ? <PetList id={this.props.mango.id} /> : null}
      </article>
    );
  } 
}


export default Employee;
/* 
const Employee = (props) => {
  let comma = ""
  if(props.person.postfix) {
    comma = ","
  }

  return (
    <article className="employee">
        <h3>
          {props.person.prefix} {props.person.firstName} {props.person.lastName}
          {comma} {props.person.postfix}
        </h3>
        <h4>{props.person.title}</h4>
        <button onClick={props.onClick}>Show Pets</button>
        {props.state.clicked ? <PetList id={props.person.id} /> : null}
      </article>
  )
}
*/



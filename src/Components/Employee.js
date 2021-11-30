import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";

class Employee extends Component {
  constructor(){
    super();

    this.state = {
      isClicked: false,
    }
  }
  
  render(){
    let fullName = `${this.props.firstName} ${this.props.lastName}`;
    if (this.props.prefix) {
      fullName = this.props.prefix + " " + fullName;
    }
    if (this.props.postfix) {
      fullName = fullName + ", " + this.props.postfix;
    }

    return(
      <article className="employee">
        <h3>{fullName}</h3>
        <h4>{this.props.title}</h4>
        <button onClick={()=>this.setState({isClicked: !this.state.isClicked})}>Show Pets</button>
        {this.state.isClicked ? <PetList id={this.props.id}/> : null}
      </article>
    )
  }
}

export default Employee;

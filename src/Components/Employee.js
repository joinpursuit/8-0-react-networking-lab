import { Component } from "react";
import PetList from "./PetList";
import "./Employee.css";

class Employee extends Component {
  constructor() {
    super();
      this.state = {
        willShow: "Hidden"
      };
  }

handleClick = (e) => {
  e.preventDefault();
    return <PetList id={ this.id } />
  };

  render() {
    const { title, first, last, prefix, postfix, id } = this.props;
      console.log(id);

   return (
      <article className="employee">
        <h3>{prefix} {first} {last} 
            {postfix === "" ? "" : `, ${postfix}`}</h3>
        <h4>{title}</h4>
        <button onClick={this.handleClick}>Show Pets</button>
        <PetList id={id} />
   </article>
      );
  }
}

export default Employee;



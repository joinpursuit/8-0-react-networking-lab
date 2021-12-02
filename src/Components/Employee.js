import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";

class Employee extends Component {


  handleClick = () => {
    return <PetList id={this.id} />;
  };
  
  render() {
    const { title, first, last, prefix, postfix, id } = this.props;
    
    return (
      <article className="employee">
        <h3>{prefix} {first} {last} 
        {postfix === "" ? "" : `, ${postfix}`}
        </h3>
        <h4>{title}</h4>
        <button onClick={this.handleClick}>Show Pets</button>
        <PetList id={id}/>
      </article>
    );
  }
};

export default Employee;
import React from "react";
import PetList from "./PetList";
import "./Employee.css";

class Employee extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pets: []
    }
  }
  getPets = () => {
    fetch("https://vet-lab-8-4.herokuapp.com/api/pets")
    .then(data => data.json())// returns a promise and we pass data
    .then(json => {
      this.setState({
        pets: json
      })
    })
  }
  componentDidMount() {
    this.getPets()
  }

  changeState = (id) => {
  console.log(id);
  }
  getPrefix =(firstName, lastName, prefix, postfix)=> {
    let fullName = "";
   if (prefix !== "") {
     fullName = `${prefix} ${firstName} ${lastName}`;
   } else if (postfix !== "") {
     fullName = `${firstName} ${lastName}, ${postfix}`;
   } else {
     fullName = `${firstName} ${lastName}`;
   }
   return fullName;
  }

  render(){
    const {id, firstName, lastName, prefix, postfix, title} = this.props.worker
   
  return (
    <article className="employee">
      <h3>{ this.getPrefix(firstName, lastName, prefix, postfix)}</h3>
      <h4>{title}</h4>
      <button onClick={this.changeState(id)}>Show pets</button>
      <PetList id = {id}
      pets = {this.props.pets}/>
    </article>
  );
};
}
export default Employee;

import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";

class Employee extends Component {
  constructor() {
    super();
    this.state = {
      petList: [],
    }
  }
  concatStaffName = () => {
    const {firstName, lastName, prefix, postfix} = this.props.staff;
    let fullName = `${firstName} ${lastName}`;
    if(prefix) fullName = `${prefix} ${fullName}`;
    else if(postfix) fullName = `${fullName}, ${postfix}`;
    return fullName;
  }

  showPet = (id) => {
    fetch(`https://pursuit-veterinarian.herokuapp.com/api/pets?employeeId=${id}`)
    .then(res => res.json())
    .then((petData) => {
      this.setState({
        petList: petData,
      })
    })
  }

  render() {
    return(
      <article className="employee">
       <h3>{this.concatStaffName()}</h3>
       <h4>{this.props.staff.title}</h4>
       <button onClick={()=>this.showPet(this.props.staff.id)}>Show Pets</button>
       <PetList petList = {this.state.petList} />
     </article>
    )
  }
}

export default Employee;

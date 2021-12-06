import { Component } from "react"
import PetList from "./PetList"
import "./Employee.css"

class Employee extends Component{
  constructor(){
    super()
    this.state = {
      pets:[]
    }
  }

  getPets=(id)=>{
    fetch(`https://pursuit-veterinarian.herokuapp.com/api/pets?employeeId=${id}`)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        pets: data
      })
    })
  }

  render(){
    let member = this.props.member;

    return (
      <article className="employee">
        <h3>{member.prefix} {member.firstName} {member.lastName}, {member.postfix}</h3>
        <h4>{member.title}</h4>
        <button onClick={()=>this.getPets(member.id)} >Show Pets</button>
        <PetList pets={this.state.pets} />
      </article>
    )
  }
}

export default Employee
import React, {Component, useState} from "react";
import PetList from "./PetList";
import "./Employee.css";

// export default class Employee extends Component {
//   constructor(props) {
//     super()
//     this.state = {
//         id : "",
//         showPets: false
//     }
//   }
// handleClick = () => {
// this.setState({
//     showPets: !this.state.showPets
// })
// }
// componentDidMount(){
//   this.setState({
//         id : this.props.id
//   })
// }
// render() {
//   const {employee} = this.props
//   const {pets} = this.props
//   return (
//     <article className="employee">
//      <h3>{employee.prefix} {employee.firstName} {employee.lastName} {employee.postfix}</h3>
//      <h4>{employee.title}</h4>
//      <button onClick = {this.handleClick} value={employee.id}>{this.state.showPets? 'Hide Pets': 'Show Pets'}</button>      
//      {this.state.showPets ?<PetList pets={pets} id ={employee.id}/>: null}
//     </article>
//   )
// }
// }


// Code Switched from Class Components to UseState
const Employee = ({employee, pets}) => {
  const [id, setId] = useState('')
  const [showPets, setShowPets] = useState(false)

  const handleClick = () =>{
    setShowPets(!showPets)
  }
  return(
    <article className="employee">
      <h3>{employee.prefix} {employee.firstName} {employee.lastName} {employee.postfix}</h3>
      <h4>{employee.title}</h4>
      <button onClick = {handleClick} value={employee.id}>{showPets? 'Hide Pets': 'Show Pets'}</button>      
      {showPets ? <PetList pets={pets} id ={employee.id}/>: null}
      </article>
  )
}
export default Employee
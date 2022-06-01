import PetList from "./PetList";
import React, { Component, useState } from "react";
import "./Employee.css";

// export class Employee extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showPets:false//learn this from the last project showtext
//   }
// }

// showAndHidePetList = () => {
//   this.setState({ showPets: !this.state.showPets });
// };

//   render() {
//     // return (<></>)
//     const { id, firstName, lastName, prefix, postfix, title } = this.props.employee;
//     return (
//       <article className="employee">
//        <h3>{prefix} {firstName} {lastName}, {postfix}</h3>
//        <h4>{title}</h4>
//        {/* button here --- make a function that shows it  */}
//        <button onClick={this.showAndHidePetList}> 
//        {/* depends on what the showPets is true or false show diff text */}
//        {!this.state.showPets ? 'Show Pets' : 'Hide Pets'}
//        </button>
//        {this.state.showPets && <PetList empId={id}/>}
//      </article>

//     )
//   }
// }


const Employee = (props) => {
  const [showPets,setShowPets] = useState(false);
  const { id, firstName, lastName, prefix, postfix, title } = props.employee;

  const showAndHidePetList = () => {
      setShowPets(!showPets);
    };


return (
        <article className="employee">
         <h3>{prefix} {firstName} {lastName}, {postfix}</h3>
         <h4>{title}</h4>
         {/* button here --- make a function that shows it  */}
         <button onClick={showAndHidePetList}> 
         {/* depends on what the showPets is true or false show diff text */}
         {!showPets ? 'Show Pets' : 'Hide Pets'}
         </button>
         {showPets && <PetList empId={id}/>}
       </article>




)



}

export default Employee;








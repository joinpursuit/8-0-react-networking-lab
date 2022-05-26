import PetList from "./PetList";
import React, { Component } from "react";
import "./Employee.css";

// export const Employee = () => {
//   return (
//     <article className="employee">
//       <h3>Staff Member Name</h3>
//       <h4>Staff Member Title</h4>
//       <button>Show Pets</button>
//       <PetList />
//     </article>
//   );
// };

export class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPets:false//learn this from the last project showtext
  }
}

showAndHidePetList = () => {
  this.setState({ showPets: !this.state.showPets });
};

  render() {
    // return (<></>)
    const { id, firstName, lastName, prefix, postfix, title } = this.props.employee;
    return (


      <article className="employee">
       <h3>{prefix} {firstName} {lastName}, {postfix}</h3>
       <h4>{title}</h4>
       {/* button here --- make a function that shows it  */}
       <button onClick={this.showAndHidePetList}> 
       {/* depends on what the showPets is true or false show diff text */}
       {!this.state.showPets ? 'Show Pets' : 'Hide Pets'}
       </button>
       {this.state.showPets && <PetList empId={id}/>}
     </article>

    )


    //   //   {/* <h3>Staff Member Name</h3>
    //   //  <h4>Staff Member Title</h4>
    //   //  <button>Show Pets</button> */}
    //   //   {/* <PetList /> */}
    //   // </article>
    // );
  }
}

export default Employee;

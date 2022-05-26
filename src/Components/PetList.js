
import Employee from "./Employee";
import "./EmployeeList.css";
import React, { Component } from "react";


// export const PetList = () => {
//   return (
//     <aside className="pets-list">
//       <p>No pets listed for this employee.</p>
//     </aside>
//   );
// };


export class PetList extends Component {
  constructor() {
    super();
    this.state = {
      petLists: [],
    };
  }

  PetsURL = () => {
    const { empId } = this.props;
    fetch(`http://serene-tundra-77911.herokuapp.com/api/pets?employeeId=${empId}`)
      .then((data) => data.json())
      .then((json) => {
        // if (data.status === 'success') {
        this.setState({
          petLists: [...json],
        });
        // }
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.PetsURL();
  }



render() {

  return (
    <aside className="pets-list">
     {
       this.state.petLists.length>0 ? (

        this.state.petLists.map(({ name,kind,breed }) => {
          return (
           <li>{`${kind},Called ${name}`  }</li>
            )})

       ) : ((  <p>No pets listed for this employee.</p> ))
        
        }
    </aside>
  ); 

}




}

export default PetList;

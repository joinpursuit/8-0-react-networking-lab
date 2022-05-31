import React from "react";

class PetList extends React.Component {
constructor() {
  super();
  this.state = {
    allPets: [],
  };
}

getAllPets = () => {
  // >> Making a request to the API with all the pets
  fetch('https://serene-tundra-77911.herokuapp.com/api/pets')
  .then((data) => data.json())
  .then((pets) => {
    this.setState({
      allPets: pets,
    })
  });
}

componentDidMount() {
  this.getAllPets();
}

// getStudentDetails(students, id) {
//   const studentById  = students.filter(student => student.id === id),
//         academicData = studentById.map(e => 
//     <>
    
//     </>);
// }

render() {
  //const { id } = this.props.employeeId;
  const petByEmployeeId  = (this.state.allPets).filter(pet => pet.employeeId === this.props.employeeId);
  let petList;
  if(petByEmployeeId.length !== 0){
    petList = <ul>{petByEmployeeId.map(pet => <li key={pet.id}>{pet.name}</li>)}</ul>
  } else {
    petList = <p>No pets listed for this employee.</p>;
  }
  return (
    
    <aside className="pets-list">
      {petList}
    </aside>
  );
}
};

export default PetList;

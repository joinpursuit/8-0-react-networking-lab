// export const PetList = (props) => {


  // console.log(props.employees)
  // console.log(props.pets)

  // const displayPets = props.pets !== null && props.pets.map((pet) => {

  //   return (
  //     pet.employeeId === props.each.id && <p>{pet.name}</p>
  //   )
  // })

  //     console.log(displayPets)
  //     return (
  //           <aside className="pets-list">
  //               {displayPets.every((each) => each === false) ? <p>No pets listed for this employee.</p> :<p>{displayPets}</p>}
  //           </aside>

    // props.pets === null ? <h2>test</h2> : props.pets.map((pet) => {
    //   return (pet.employeeId  === props.each.id && <aside className="pets-list">
    //   <p>{pet.employeeId  === props.each.id ? pet.name : "No pets listed for this employee."}</p>
    //    </aside>
    //   )
    // })
//   );
// };

// export default PetList;


import React from "react";

class PetList extends React.Component {
  constructor() {
    super();
    this.state = {
      pets: null,
    };
  }

  componentDidMount() {
    fetch(`https://vet-api-8-1.herokuapp.com/api/pets?employeeId=${this.props.each.id}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ 
          pets: data,
        });
      })
      .catch((error) => {
        console.log("Error fetching pets");
      });
  }


  render() {
    const displayPets = this.state.pets !== null && this.state.pets.map((pet) => {
      return <p>{pet.name}</p>
    })
    console.log(displayPets)

    return (
      <aside className="pets-list">
        {displayPets.length > 0 ? <p>{displayPets}</p> : <p>No pets listed for this employee.</p>}
      </aside>
    );
  }
}

export default PetList;
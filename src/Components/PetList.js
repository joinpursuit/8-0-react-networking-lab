import { Component } from "react";

class PetList extends Component {
  constructor() {
    super();
    this.state = {
      petList: [],
    };
  }

  componentDidMount() {
    fetch(`https://pursuit-veterinarian.herokuapp.com/api/pets`)
      .then((res) => {
        return res.json();
      })
      .then((petData) => {
        console.log(petData);
        this.setState({
          petList: petData,
        });
      });
  }

  render() {
    let displayPets = this.state.petList.map((pet) => {
      return <>{pet.name}</>;
    });
    return (
      <aside className="pets-list">
        {/* <p>{displayPets}</p> */}
      </aside>
    );
  }
}

// export const PetList = () => {
//   return (
//     <aside className="pets-list">
//       <p>No pets listed for this employee.</p>
//     </aside>
//   );
// };

export default PetList;

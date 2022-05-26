import React, { Component } from "react";
// export const PetList = () => {
//   return (
//     <aside className="pets-list">
//       <p>No pets listed for this employee.</p>
//     </aside>
//   );
// };

// export default PetList;

export default class PetList extends Component {
  constructor(props) {
    super();
    
  }
  render() {
    const { id } = this.props;
    const { pets } = this.props;
    const petPatients = pets
      .filter((pet) => pet.employeeId === id)
      .map((pet) => pet.name);

    return (
      <aside className="pets-list">
        <p>
          {petPatients.length
            ? petPatients.join(", ")
            : "No pets listed for this employee."}
        </p>
      </aside>
    );
  }
}

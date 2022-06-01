import { Component } from "react/cjs/react.production.min";
import React, { useEffect, useState } from "react";

const PetList = (props) => {
  const [petList, setpetList] = useState(props.pets);

  return (
    <aside className="petList">
      <div>
        <br></br>
        {petList.length ? (
          petList.map((pet) => {
            return (
              <>
                {pet.name}
                {petList.indexOf(pet) === petList.length - 1 ? null : ", "}
              </>
            );
          })
        ) : (
          <h4>No pets listed</h4>
        )}
      </div>
    </aside>
  );
};

export default PetList;

//export default class PetList extends Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     petList: this.props.pets,
//   };
// }

// render() {
//}
//}

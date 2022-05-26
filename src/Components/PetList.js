// export const PetList = () => {
// return (
//   <aside className="pets-list">
//     <p>No pets listed for this employee.</p>
//   </aside>
// );
// };
// export default PetList;

import { Component } from "react/cjs/react.production.min";

export default class PetList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  getPets = async () => {
    try {
      const data = await fetch(`https://vet-lab-8-4.herokuapp.com/api/pets?employeeId=${this.props.employeeId}`)
      const pets = await data.json()
      console.log(pets)
    } 
    catch (err) {
      console.log(err)
    }
  }

  componentDidMount () {
    this.getPets()
  }

  render() {
    return (
      <aside className="pets-list">
        <p>No pets listed for this employee.</p>
      </aside>
    );
  }
}

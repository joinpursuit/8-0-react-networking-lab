
import { Component } from "react";

class PetList extends Component {
  render(){
    const { petList } = this.props

    return (
      <aside className="pets-list">
        {petList.length === 0 ? "No pets listed for this employee" : petList}
      </aside>
    );
  }
};

export default PetList;
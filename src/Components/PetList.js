import { Component } from "react";

class PetList extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     petList: []
  //   }
  // }

  render(){
    const { petElArr } = this.props

    return (
      <aside className="pets-list">
        {petElArr.length === 0 ? "No pets listed for this employee" : petElArr}
      </aside>
    );
  }
};

export default PetList;

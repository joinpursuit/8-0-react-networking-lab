import { Component } from "react";

class PetList extends Component{
  constructor(){
    super();
    
  }
  

  render(){
    return (
      <aside className="pets-list">
        {this.props.hasPets===true? (this.props.dogNames === "" ? <p>No pets listed for this employee.</p>: this.props.dogNames): ""}
      </aside>
    );
  }
};

export default PetList;

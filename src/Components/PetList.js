import React from "react";

class PetList extends React.Component{
  
  
  

  render(){
    const {employeePets,show}=this.props;
    let pContent=show && employeePets.length>=1? employeePets.join(","):
                 show && !employeePets.length ? "No pets listed for this employee.":"";
    return (
      <aside className="pets-list">
        <p>{pContent}</p>
      </aside>
    );
  }
};

export default PetList;

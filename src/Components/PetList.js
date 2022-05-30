import React from "react"
class PetList extends React.Component {
  constructor(props) {
    super(props)
  }

  getPetsL = (id) => {
      return id;
  }

  render() {
    
  return (
    <>
    <aside className="pets-list">
      <p>No pets listed.</p>
    </aside>
    </>
  );
};
}

export default PetList;

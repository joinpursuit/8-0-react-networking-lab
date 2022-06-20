import React from "react";

class PetList extends React.Component {
  constructor() {
    super();
    this.state = {
      pets: [],
    };
  }
  componentDidMount() {
    const { id } = this.props;
    fetch(
      `https://serene-tundra-77911.herokuapp.com/api/pets?employeeId=${id}`
    )
      .then((response) => response.json())
      .then((obj) => {
        this.setState({ pets: [...obj] });
      })
      .catch(console.log);
  }
  render() {
    return (
      <aside className="pets-list">
        {this.state.pets.map(({ name }) => name).join(", ") || (
          <p>No pets listed</p>
        )}
      </aside>
    );
  }
}

export default PetList;

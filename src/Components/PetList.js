import React from "react";

export default class PetList extends React.Component {
  constructor() {
    super();
    this.state = {
      pets: [],
    };
  }
  componentDidMount() {
    const { eid } = this.props;
    fetch(`https://vet-api-8-1.herokuapp.com/api/pets?employeeId=${eid}`)
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
          <p>No pets listed for this employee.</p>
        )}
      </aside>
    );
  }
}



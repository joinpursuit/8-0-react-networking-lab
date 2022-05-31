import React from 'react';

class PetList extends React.Component {
  constructor() {
    super();
    this.state = {
      petsList: [],
    };
  }

  updatePetsURL = () => {
    const { employeeId } = this.props;

    fetch(
      `https://serene-tundra-77911.herokuapp.com/api/pets?employeeId=${employeeId}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ petsList: [...data] }))
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.updatePetsURL();
  }

  render() {
    return (
      <aside className='pets-list'>
        {this.state.petsList.length > 0 ? (
          this.state.petsList.map(({ name }) => name).join(', ')
        ) : (
          <p>No pets listed for this employee.</p>
        )}
      </aside>
    );
  }
}

export default PetList;

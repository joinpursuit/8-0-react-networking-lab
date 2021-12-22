import { Component } from "react";

class PetList extends Component {
  constructor() {
    super();
    this.state = {
      petInfo: [],
    };
  }

  componentDidMount = () => {
    fetch(`https://vet-api-8-1.herokuapp.com/api/pets?employeeId=${this.props.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          petInfo: data,
        });
      });
  };

  render() {
    const petName = this.state.petInfo.map((pet,id) => {
      return <div key={id}>{pet.name}</div>;
    });
    return (
      <aside>
        {petName.length > 0 ? <div>{petName}</div> : <p>No pets listed for this employee.</p>}
      </aside>
    );
  }
}

export default PetList;

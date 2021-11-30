class PetList extends react.Component {
  constructor() {
    super();
    this.state = {
      listOfPets: [],
    };
  }
  componentDidMount() {
    fetch(
      `https://vet-api-8-1.herokuapp.com/api/pets?employeeId=${this.props.id}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          console.log(“Component Did Mount”);
          this.setState({ listOfPets: data });
        }, 1);
      });
  }
  render() {
    console.log(this.state.listOfPets);
    const doctorsPet = this.state.listOfPets.map((eachPet) => {
      return <p>{eachPet.name}</p>;
    });
    console.log(doctorsPet);
    return (
      <aside className=“pets-list”>
        {doctorsPet.length > 0 ? (
          <p>{doctorsPet}</p>
        ) : (
          <p>No pets listed for this employee.</p>
        )}
      </aside>
    );
  }
}
export default PetList;

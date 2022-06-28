import { Component } from "react/cjs/react.production.min";

class PetList extends Component{
  constructor(props){
    super(props);
    this.state = {
      employeePets : [],
    }
  };

  getEmployeesPets = (id) => {
    fetch(`https://vet-lab-8-4.herokuapp.com/api/pets?employeeId=${id}`)
      .then(data => data.json())
      .then(json => {
        this.setState({
          employeePets: json,
        })
      })
  }
  componentDidMount() {
    this.getEmployeesPets(this.props.id)
    console.log(this.props.id)
    console.log(this.state.employeePets)
    }

  render(){
    // const { showPets } = this.props;
    console.log(showPets);
    return (

    <aside className="pets-list">
      {showPets ? (this.state.employeePets.length) > 0 ? this.state.employeePets.map(pet => <p>{pet.name} </p>) : <p>No pets listed for this employee</p> : null}
    </aside>
  );
    }
};

export default PetList;

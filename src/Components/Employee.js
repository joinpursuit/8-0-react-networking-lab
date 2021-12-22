import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";


class Employee extends Component {
  constructor(){
    super();
    this.state = {
      pets: [],
      displayPets: false,
    }
  }

  componentDidMount() {
    this.handlePetFetch();
  }

  handlePetDisplay = () => {
    this.setState({
      displayPets:true
    })
  }

  handlePetFetch = () => {
    fetch("https://vet-api-8-1.herokuapp.com/api/pets")
      .then((res)=> {
        return res.json();
      }).then((petsJsonResponse)=>{
          console.log(petsJsonResponse);
          this.setState({
            pets: petsJsonResponse
          });
        }).catch((err)=> console.log(err))
  }

  render () {

    const {id, firstName, lastName, prefix, postfix, title} = this.props.employeeData
  
    return (
      <article className="employee">
      <h3>{prefix} {firstName} {lastName} {postfix}</h3>
      <h4>{title}</h4>
      <button onClick={this.handlePetDisplay}>Show Pets</button>

      <PetList pets={this.state.pets} id={id} displayPets={this.state.displayPets}/>
    </article>
    )
  }
}

export default Employee;

///what do i have to do 
//when i log onto the page, i should see all of the dr card. (//this is where i load these components on componentDidMount)
//*the first time the components load 
//when i click on "show pets" button i should be able to see the pets the staff member can see

import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";


class Employee extends Component {
  constructor(){
    super();
    this.state = {
      pets: [],
    }
  }

  componentDidMount() {
    this.handlePetFetch();
  }

  handlePetFetch = () => {
    fetch("https://pursuit-veterinarian.herokuapp.com/api/pets")
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
      
      <PetList pets={this.state.pets} id={id} />
    </article>
    )
  }
}

export default Employee;

///what do i have to do 
//when i log onto the page, i should see all of the dr card. (//this is where i load these components on componentDidMount)
//*the first time the components load 
//when i click on "show pets" button i should be able to see the pets the staff member can see

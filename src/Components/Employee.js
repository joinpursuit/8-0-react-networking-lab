import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";


class Employee extends Component{
  constructor(props){
    super()
    this.state={
      petData: [],
      filteredPetData: [],
      notFound:""
    }
  }
  componentDidMount=()=>{
    fetch('https://pursuit-veterinarian.herokuapp.com/api/pets')
    .then(res=>res.json())
    .then((allPets)=>{
      this.setState({
        petData: allPets
      });
    });

  }
  handleFetchPets=()=>{
    let pets = this.state.petData.filter((pet)=>{
      return pet.employeeId === this.props.empId
    })
    if(pets.length){
      this.setState({
        filteredPetData: pets
      })  
    }else{
      this.setState({
        notFound: "No pets listed for this employee"
      })
    }
  }
  
  render(){
    const {prefix, postfix, firstName, lastName, title, empId} = this.props
    const {filteredPetData, notFound} = this.state
    return (
      <div>
        <article className="employee">
          {!postfix && <h3>{prefix} {firstName} {lastName}</h3>}
          {postfix &&  <h3>{prefix} {firstName} {lastName}, {postfix}</h3>}
          <h4>{title}</h4>
          <button type="button" onClick={this.handleFetchPets}>Show Pets</button>
          <PetList filteredPetData={filteredPetData}empId={empId} notFound={notFound}/>
        </article>
      </div>
    )
  }
}

export default Employee;

import { Component } from "react";

class PetList extends Component { 
  constructor(){
    super();

    this.state = {
      allPets: [],
    }
  }

  componentDidMount(){
    const { id } = this.props;
 
    fetch(`https://pursuit-veterinarian.herokuapp.com/api/pets?employeeId=${id}`)
     .then((res)=>{
       return res.json();
     }).then((data)=>{
       this.setState({
         allPets: data,
       })
     })
   }

  render(){
    const petCards = this.state.allPets.map((pet)=>{
      return pet.name;
    }).join(", ");
    
    return(
      <aside className="pets-list">
        {petCards.length > 0 ? <p>{petCards}</p> : <p>No pets listed for this employee.</p>}
      </aside>
    )
  }
}

export default PetList;

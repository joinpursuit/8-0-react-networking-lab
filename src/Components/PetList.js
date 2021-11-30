import { Component } from "react";


class PetList extends Component {
  constructor(){
    super()
    this.state={
      petArr:[],
      displayPet: false
    }
  }


  componentDidMount(){
    fetch("https://pursuit-veterinarian.herokuapp.com/api/pets")
    .then((res)=>{
      return res.json();
    }).then((data)=>{
      this.setState({
        petArr: data,
      })
    })
  }

  handlePetDisplay = () =>{
    this.setState({
      displayPet: true
    })
     
    }



  render(){
    console.log(this.props.id)

    let petDisplay = this.state.petArr.map((pet)=>{
      if(pet.employeeId === this.props.id){
        return (
        <p>{pet.name}</p>
        )
      }
    });
   
    
    return (
      <>
        <button onClick={this.handlePetDisplay}>Show Pets</button>
      <aside className="pets-list" style={{display: this.state.displayPet ? "block" : "none"}}>
        <p>{petDisplay}</p>
      </aside> 
      </>
    );
  }
};

export default PetList;

import { Component } from "react";


class PetList extends Component {
  constructor(){
    super()
    this.state={
      petArr:[],
      displayPet: false,
    }
  }


  componentDidMount(){
    fetch("https://pursuit-veterinarian.herokuapp.com/api/pets")
    .then((res)=>{
      return res.json();
    }).then((data)=>{
      this.setState({
        petArr: data,
      }).catch((error)=>{
        console.error("Error", error)
      })
    })
  }

  handlePetDisplay = () =>{
    this.setState({
      displayPet: true
    })
     
  }



  render(){

    let petDisplay = this.state.petArr.filter((pet)=>pet.employeeId === this.props.id).map((pet)=>{
      return(
        <p>{pet.name},</p>
      )
    })
       
       
     
      
      
 

  console.log(petDisplay)

    // let petDisplay = this.state.petArr.filter((pet)=> pet.employeeId === this.props.id)
   
    
    return (
      <>
      <button onClick={this.handlePetDisplay}>Show Pets</button>
      <aside className="pets-list" style={{display: this.state.displayPet ? "block" : "none"}}>
        {petDisplay.length ? petDisplay: "No pets listed for this employee" }
      </aside> 
      </>
    );
  }
};

export default PetList;

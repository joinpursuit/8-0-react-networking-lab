import { Component } from "react";

class PetList extends Component{
  constructor(){
    super();
    this.state={
     petsArr:[],
     petDisplay:false
    }
  }


  componentDidMount(){
  this.handlerPets()
  }

handlerPets=()=>{
  fetch("https://pursuit-veterinarian.herokuapp.com/api/pets")
  .then((res)=>{
    return res.json();
  }).then((data)=>{
    this.setState({
     petsArr: data
    })
  })
}
handlePetdisplay=()=>{
  this.setState({
    petDisplay:true
  })
}
  
  render(){
    
    let pName = this.state.petsArr.filter((pet)=>pet.employeeId=== this.props.id).map((pet)=>{
      return pet.name
    })
  return (
    <>
    <button onClick={this.handlePetdisplay}>Show Pets</button>
    <aside className="pets-list" style={{display:this.state.petDisplay? "block":"none"}}>
      
      {pName.length?pName:"No pets listed for this employee"} 
    </aside>
    </>
  );
  }
};
// <> this means no styling 
export default PetList;

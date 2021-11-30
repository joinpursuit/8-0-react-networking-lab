import { Component } from "react";





class PetList extends Component {
  constructor(){
    super()
    this.state={
      petArr:[]
    }
  }
  componentDidMount(){
    fetch("https://pursuit-veterinarian.herokuapp.com/api/pets")
    .then((res)=>{
      return res.json();
    }).then((data)=>{
      this.setState({
        petArr: data
      })
    })
  }


handlePetDisplay=()=>{
  this.state.petArr.forEach((pet)=>{
    if(pet.employeeId === this.props.id){
      return (
        <p>{pet.name}</p> 
      )
    };
  });
}


  render(){
    console.log(this.props.id)

    let petDisplay = this.state.petArr.map((pet)=>{
      if(pet.employeeId === this.props.id){
        return (
          <p>{pet.name},</p>
        )
      }
    });
    
    return (
      <aside className="pets-list">
          {petDisplay}
        </aside> 
    );
  }
};

export default PetList;

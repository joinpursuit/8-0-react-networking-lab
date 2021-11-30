import { Component } from "react";

class PetList extends Component {
  constructor(){
    super();
    this.state = {
      petList: []
    }
  }

  componentDidMount(){
    // console.log("Trigger: On Update");
    this.handlePetData();
  }

  componentDidUpdate(){
    
  }

  handlePetData = () => {
    fetch("https://pursuit-veterinarian.herokuapp.com/api/pets")
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      console.log("pet data", data);
      this.setState({
        petList: data,
      })
    })
  }

  render(){

    let petElArr = this.state.petList.map((pet) => {
      return (
        <p 
        key={pet.id}
        >
          {pet.name} 
        </p>
      )
    })
    console.log("pet name", petElArr)

    return (
      <aside className="pets-list">
        {petElArr}
      </aside>
    );
  }
};

export default PetList;

import React, {useEffect,useState} from "react"
const PetList =(id, showPets) => {
    /*constructor(props){
      super(props);
      this.state = {
        pets : [],
      }
    };*/
    const [pets,setPets] = useState({}); 

  
   const getEmployeesPets = (id) => {
      fetch(`https://vet-lab-8-4.herokuapp.com/api/pets?employeeId=${id}`)
        .then(data => data.json())
        .then(json => { 
          setPets(
            {json}
          )
        })
    }
   /* componentDidMount() {
      this.getEmployeesPets(this.props.id)
      console.log(this.prhops.id)
      console.log(this.state.pets)
    }*/

    useEffect(() => {
      getEmployeesPets(id)
      return () => {
        console.log("This component unmounted duh!")
      }
    }, {pets})
    
  
   /* render(){
      const { showPets } = this.props;
      console.log(showPets);
      return (
  
      <aside className="pets-list">
        <p>No pets listed for this employee.</p>
        {showPets ? (this.state.pets.length) > 0 ? this.state.pets.map(pet => <p>{pet.name} </p>) : <p>No pets listed</p> : null}
      </aside>
    );
    }*/
      console.log(showPets);
      return (
  
      <aside className="pets-list">
        <p>No pets listed for this employee.</p>
        {showPets ? (pets.length) > 0 ? pets.map(pet => <p>{pet.name} </p>) : <p>No pets listed</p> : null}
      </aside>
    );
  
  };
  
  export default PetList;
  

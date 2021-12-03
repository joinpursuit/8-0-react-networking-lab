import PetList from "./PetList";
import "./Employee.css";
import { Component } from "react";

export class Employee extends Component {
  constructor(){
    super();
    this.state = {
      petList: [],
      // showPets: false,
      hasPets: false
    }
  }

  componentDidMount(){
    // this.handleShowPetsButton()
  }

  handleShowPetsButton = (id) => {
    // this.setState({
    //   showPets: true
    // })

    fetch(`https://pursuit-veterinarian.herokuapp.com/api/pets?employeeId=${id}`)
      .then((res) => {
        return res.json();
      }).then((data) => {
        this.setState({
          petList: data
        })
        // if(this.state.petList.length > 0){
        //   let petArr = this.state.petList.map(pet => {
        //     return pet.name
        //   })
        //   console.log(petArr)
        // } else {
        //   return <PetList />
        // }
        if(data.length > 0){
          this.setState({
            hasPets: true
          })
        } else {
          this.setState({
            hasPets: false
          })
        }
      })


  }

  // Pass in the id

  render(){
    
    let petArr = this.state.petList.map(pet => {
      return pet.name;
    })

    const hasPets = this.state.hasPets;
    let pets;
    if(hasPets){
      pets = petArr.join(", ");
    } else {
      pets = <PetList />
    }

    let employeeArr = this.props.employeeData.map(employee => {
        if(employee.postfix){
          return (
            <article className="employee">
              <h3>{employee.prefix} {employee.firstName} {employee.lastName}, {employee.postfix}</h3>
              <h4>{employee.title}</h4>
              <button onClick={()=>this.handleShowPetsButton(employee.id)}>Show Pets</button>
              {/* {this.state.showPets && <PetList/>} */}
              {/* {petArr.join(", ")} */}
              {pets}
            </article>
          )
        } else {
          return (
            <article className="employee">
              <h3>{employee.prefix} {employee.firstName} {employee.lastName}</h3>
              <h4>{employee.title}</h4>
              <button onClick={()=>this.handleShowPetsButton(employee.id)}>Show Pets</button>
              {/* {this.state.showPets && <PetList/>} */}
              {/* {petArr.join(", ")} */}
              {pets}
            </article>
          )
        }
    })
    return (
      <>
      {employeeArr}
      </>
    );
  }
};

export default Employee;

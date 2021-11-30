import PetList from "./PetList";
import "./Employee.css";
import React from "react";

class Employee extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      pet: null,
      click: false,
    }
    console.log("Under Construction for Pet")
  }

  // componentDidMount(){

  //   fetch("https://vet-api-8-1.herokuapp.com/api/pets").then((response) => response.json()).then((data) => {

  //   this.setState({
  //     pet: data
  //   })  

  //   }).catch(console.log)

  // }

  test = () => {
    if (this.state.click) {
      this.setState({
        click: false,
      })
    } else {
    this.setState({
      click: true,
    })
  }
  }


  render() {

        return (
         this.props.person === null ? <h3>Updating</h3> : this.props.person.map((each, i) => {
          return (

             <article className="employee" key = {i}>
               <h3>{`${each.prefix && each.prefix} ${each.firstName} ${each.lastName}${each.postfix && ", "+ each.postfix} `}</h3>
               <h4>{each.title}</h4>
               <button onClick ={this.test}>Show Pets</button>
              <PetList each = {each} pets = {this.state.pet}/>
             </article>
      )
    })
  );
    }
};

export default Employee;

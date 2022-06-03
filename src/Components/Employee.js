// import PetList from "./PetList";
// import React, {useState, useEffect} from "react";
// import "./Employee.css";


import PetList from "./PetList";
import "./Employee.css";
import { useEffect, useState } from "react";

const Employee = ({id, firstName, lastName, prefix, postfix, title}) => {

  const [pets, setPets] = useState([])
  const [showPets, setShowPets] = useState(false)

  const getPets = () => {
    fetch(`https://vet-lab-8-4.herokuapp.com/api/pets?employeeId=${id}`)
      .then(data => data.json())
      .then(json => {
        setPets(json)
      })
  }

  useEffect(() => {
    getPets()
  }, [])


    return (
      <article className="employee">
        <h3> {prefix} {firstName} {lastName}, {postfix} </h3>

        <h4>{title}</h4>
        <button onClick={()=> {setShowPets(!showPets)}}>{ showPets ? "Hide Pets" : "Show Pets"}</button>
        { showPets ? <PetList pets={pets}/> : null}
       
      </article>
    );





// const Employee = () => {
  // constructor(props) {
    // super(props);
    // this.state = {
      // pets: null,
    // };
  // }
// 
  // handleClick = (id) => {
    // fetch(
      // `https://serene-tundra-77911.herokuapp.com/api/pets?employeeId=${id}`
    // ).then((response) => response.json())
    // .then((data) => {
      // this.state.pets === null
        // ? this.setState({ pets: data })
        // : this.setState({ pets: null });
    // }).catch((error) => {
      // console.log(error);
    // });
  // };
// 
  // render() {
    // const { id, firstName, lastName, prefix, postfix, title } =
      // this.props.worker;
    // return (
      // <article className="employee">
        {/* <h3> */}
          {/* {prefix} {firstName} {lastName} {postfix} */}
        {/* </h3> */}
        {/* <h4>{title}</h4> */}
        {/* <button onClick={this.handleClick(id)}>Show Pets</button> */}
        {/* <PetList /> */}
      {/* </article> */}
    // );
  // }
}

export default Employee;

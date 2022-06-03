// import React, { useState, useEffect } from "react";
// import NavBar from "./Components/NavBar";
// import EmployeeList from "./Components/EmployeeList";

import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

const App = () => {
  //1. Constructor fires-setting initial state
  //2. render() -creates the stuff we see that gets put onto the virtual DOM
  //3. ComponentDidMount? fire method
  //4. re render
  // if( prevProps !== this.props) => run refresh

  return (
    <>
      <NavBar />
      <EmployeeList />
    </>
  );

  // const App = () => {
  // constructor() {
  // super()
  // this.state = {
  // workers: []
  // }
  // }
  //
  // fetchingEmpData = () => {
  // fetch ("https://vet-lab-8-4.herokuapp.com/api/employees")
  // .then (response => response.json())
  // .then (json => {
  // this.setState({
  // workers: json
  // })
  // })
  // }
  // THIS FIRES THE FIRST TIME THE COMPONENT RENDERS. HAPPENS ONLY ONE TIME.
  // componentDidMount() {
  // this.fetchingEmpData()
  // }
  //
  //
  //
  //
  // render() {
  // return (
  // <>
  {
    /* <NavBar /> */
  }
  {
    // console.log(this.state.workers);
  }
  {
    /* <EmployeeList workers={this.state.workers}/> */
  }
  {
    /* </> */
  }
  // );
  // }
};

export default App;

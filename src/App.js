import React, {useState, useEffect} from "react";
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
}


export default App;



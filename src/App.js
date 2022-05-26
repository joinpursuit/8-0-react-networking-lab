import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      EMPLOYEES_URL: "",

    }
  }
  //fetch new url and the update component state
  fetchdata = () => {
    fetch('https://serene-tundra-77911.herokuapp.com/api/employees')
    .then((res) => res.json())
    .then((employees) => {
    this.setState({
      EMPLOYEES_URL: employees,
    });
    });
    }; 
    render() {
      const { EMPLOYEES_URL } = this.state;
        return (
    <>
      <NavBar />
      <EmployeeList employees={EMPLOYEES_URL}/>
    </>
  );
};
}
export default App;

import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      employeeArray: [],

    }
  }
  //fetch new url and the update component state
  fetchData = () => {
    fetch('https://serene-tundra-77911.herokuapp.com/api/employees')
    .then((res) => res.json())
    .then((employees) => {
    this.setState({
      employeeArray: employees,
    });
    });
    }; 
    componentDidMount() {
      this.fetchData();
    }
    render() {
      const {employeeArray} = this.state;
        return (
    <>
      <NavBar />
      <EmployeeList employeeArray={employeeArray}/>
    </>
  );
};
}
export default App;

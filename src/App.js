import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      empArr: [],
    };
  }

  getEmp = () => {
    fetch("https://serene-tundra-77911.herokuapp.com/api/employees")
      .then((response) => response.json())
      .then((employees) => this.setState({ empArr: employees }));
  };

  componentDidMount() {
    this.getEmp();
  }

  render() {
    const { empArr } = this.state;
    return (
      <>
        <NavBar />
        <EmployeeList empArr={empArr} />
      </>
    );
  }
}
export default App;

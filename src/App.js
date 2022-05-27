import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      employeeArr: [],
    };
  }

  fetchEmployees = () => {
    fetch("https://serene-tundra-77911.herokuapp.com/api/employees")
      .then((res) => res.json())
      .then((employees) => {
        this.setState({
          employeeArr: employees,
        });
      });
  };

  componentDidMount() {
    this.fetchEmployees();
  }

  render() {
    const { employeeArr } = this.state;
    return (
      <div>
        <NavBar />
        <EmployeeList employeeArr={employeeArr} />
      </div>
    );
  }
}

export default App;

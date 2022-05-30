import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    fetch("https://serene-tundra-77911.herokuapp.com/api/employees")
      .then((response) => response.json())
      .then((json) => this.setState({ employees: json }));
  }

  render() {
    const { employees } = this.state;
    return (
      <main>
        <NavBar />
        <h2>All Staff</h2>
        <EmployeeList employees={employees} />
      </main>
    );
  }
}

export default App;

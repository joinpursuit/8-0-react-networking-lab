import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      workers: [],
    };
  }

  fetchingEmpData = () => {
    fetch("https://vet-lab-8-4.herokuapp.com/api/employees")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          workers: json,
        });
      });
  };
  // THIS FIRES THE FIRST TIME THE COMPONENT RENDERS. HAPPENS ONLY ONE TIME.
  componentDidMount() {
    this.fetchingEmpData();
  }

  render() {
    return (
      <>
        <NavBar />
        
        <EmployeeList workers={this.state.workers} />
      </>
    );
  }
}

export default App;

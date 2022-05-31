import React from 'react';
import NavBar from './Components/NavBar';
import EmployeeList from './Components/EmployeeList';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      employeeData: [],
      petData: [],
    };
  };

  componentDidMount(){
    this.getEmployeeList();
    this.getPetList();
  }

  getEmployeeList = () => {
    fetch('https://serene-tundra-77911.herokuapp.com/api/employees')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
        this.setState({
          employeeData: [...json],
        });
    })
    .catch((err) => {console.log(err)})
  }

  getPetList = () => {
    fetch('https://serene-tundra-77911.herokuapp.com/api/pets')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
        this.setState({
          petData: [...json],
        });
    })
    .catch((err) => {console.log(err)})
  }

  render() {

    return (
      <>
        <NavBar />
        <EmployeeList pets={this.state.petData} employees={this.state.employeeData}/>
      </>
    );
  }
}

export default App;

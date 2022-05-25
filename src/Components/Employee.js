import { Component } from "react";
import PetList from "./PetList";
import "./Employee.css";

class Employee extends Component {
  constructor() {
    super();
    this.state = {
      employeesList: [],
    };
  }

  componentDidMount = () => {
    this.getEmployees();
  };

  getEmployees = () => {
    const Employee_URL = `https://serene-tundra-77911.herokuapp.com/api/employees`;

    fetch(Employee_URL)
      .then((res) => res.json())
      .then((employees) => {
        this.setState({
          employeesList: employees,
        });
      })
      .catch((error) => {
        this.errors(error);
      });
  };

  renderEmployees = () => {
    const { employeesList } = this.state;

    const workers = employeesList.map((employee) => {
      return (
        <article className="employee" key={employee.id}>
          {employee.postfix ? (
            <h3>
              {employee.prefix} {employee.firstName} {employee.lastName},{" "}
              {employee.postfix}
            </h3>
          ) : (
            <h3>
              {employee.prefix} {employee.firstName} {employee.lastName}
            </h3>
          )}
          <h4>{employee.title}</h4>
          <PetList employee={employee} errors={this.errors} />
        </article>
      );
    });

    return workers;
  };

  errors = (errors) => {
    console.log(errors);
  };

  render() {
    return this.renderEmployees();
  }
}

export default Employee;

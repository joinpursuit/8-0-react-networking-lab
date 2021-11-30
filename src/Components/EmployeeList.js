import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    fetch("https://vet-api-8-1.herokuapp.com/api/employees")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          console.log("Component Did Mount");
          this.setState({ people: data });
        }, 3000);
      });
  }

  render() {
    const eachPersonForReal = this.state.people.map((eachPerson) => {
      return <Employee eachPerson={eachPerson} />;
    });

    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">{eachPersonForReal}</section>
      </main>
    );
  }
}

export default EmployeeList;

import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends React.Component {
  constructor() {
    super();

    this.state = {
      apiArray: [],
    };
  }


  componentDidMount() {
    fetch("https://vet-api-8-1.herokuapp.com/api/employees")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          apiArray: data,
        });
      }).catch(error => {
        console.log("Error: ", error)
      })
  }

  render() {
    const results = this.state.apiArray.map((staff, i) => {
      return (
        <Employee key={i} person={staff}
        />
      );
    });

    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">{results}
        </section>
      </main>
    );
  }
}

export default EmployeeList;

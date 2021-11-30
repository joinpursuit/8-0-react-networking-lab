import Employee from "./Employee";
import "./EmployeeList.css";
import React from "react";

class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      ipa: [],
    };
  }
  componentDidMount() {
    fetch("https://vet-api-8-1.herokuapp.com/api/employees")
      .then((response) => {
        if (response) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        this.setState({
          ipa: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const result = this.state.ipa.map((element) => {
      return <Employee eachPerson={element} />;
    });
    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">{result}</section>
      </main>
    );
  }
}

export default EmployeeList;

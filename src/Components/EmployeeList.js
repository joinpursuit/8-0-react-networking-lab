import { Component } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends Component {
  constructor() {
    super();
    this.state = {
      staffList: [],
    };
  }

  showStaff = () => {
    fetch(`https://serene-tundra-77911.herokuapp.com/api/employees`)
      .then((res) => res.json())
      .then((staffData) => {
        this.setState({
          staffList: staffData,
        });
      });
  };

  componentDidMount() {
    this.showStaff();
  }

  render() {
    const staffArray = this.state.staffList.map((staff) => {
      return <Employee key={staff.id} staff={staff} />;
    });

    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">{staffArray}</section>
      </main>
    );
  }
}

export default EmployeeList;

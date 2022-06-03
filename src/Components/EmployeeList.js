import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <main>
        {/* {console.log(this.props)} */}
        <h2>All Staff</h2>

        <section className="employee-list">
          {this.props.workers.map((worker) => {
            return (
            <Employee worker={worker} />
            )
          })}
        </section>
      </main>
    );
  };
}

export default EmployeeList;

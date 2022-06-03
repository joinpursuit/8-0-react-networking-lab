// import React from "react";
// import Employee from "./Employee";
// import "./EmployeeList.css";

import { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    fetch("https://vet-lab-8-4.herokuapp.com/api/employees")
      .then((data) => data.json())
      .then((json) => {
        setEmployees(json);
      });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map(
          ({ id, firstName, lastName, prefix, postfix, title }) => {
            return (
              <Employee
                id={id}
                firstName={firstName}
                lastName={lastName}
                prefix={prefix}
                postfix={postfix}
                title={title}
              />
            );
          }
        )}
      </section>
    </main>
  );
};

export default EmployeeList;

// const EmployeeList = () => {
// constructor(props) {
// super(props)
// }
//
// componentDidMount() {
// console.log(this.props)
// }
// render() {
// return (
// <main>
// {console.log(this.props)}
{
  /* <h2>All Staff</h2> */
}
{
  /*  */
}
{
  /* <section className="employee-list"> */
}
{
  /* {this.props.workers.map((worker) => { */
}
// return (
// <Employee worker={worker} />
// )
// })}
{
  /* </section> */
}
{
  /* </main> */
}
// );
// };

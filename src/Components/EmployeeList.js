import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

// export const EmployeeList = () => {
//   return (
//     <main>
//       <h2>All Staff</h2>
//       <section className="employee-list">
//         <Employee />
//       </section>
//     </main>
//   );
// };

class EmployeeList extends React.Component {
  constructor() {
    super();
    this.state = {
      allEmployees: [],
    };
  }

  getAllEmployees = () => {

    fetch('https://serene-tundra-77911.herokuapp.com/api/employees')
    .then((data) => data.json())
    .then((employees) => {
      this.setState({
        allEmployees: employees,
      })
     
    });
  }

  componentDidMount() {
    this.getAllEmployees();
  }

  render() {
    const EmployeeList = (this.state.allEmployees).map(employee => <Employee employee={employee}/>
    )
    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">

         {EmployeeList} 
          
        </section>
      </main>
    );
  }
};

export default EmployeeList;

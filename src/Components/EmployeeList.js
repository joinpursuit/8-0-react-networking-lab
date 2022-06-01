// import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
import React, { Component, useState } from "react";

// export class EmployeeList extends Component {
//   constructor() {
//     super();
//     this.state = {
//       employeeList: [],
//     };
//   }

//   getEmployeeList = () => {
//     fetch(`https://vet-lab-8-4.herokuapp.com/api/employees`)
//       .then((data) => data.json())
//       .then((json) => {
//         // console.log(json);
//         this.setState({
//           employeeList: json,
//         });
//       })
//       .catch((err) => console.log(err));
//   };


//   componentDidMount() {
//     this.getEmployeeList();
//   }

//   render() {
//     return (
//       <main>
//         <h2>All Staff</h2>
//         <section className='employee-list'>
//           {this.state.employeeList.map((eachEmp) => (
//             <Employee employee={eachEmp} />
//           ))}
//         </section>
//       </main>
//     );  }
// }


const EmployeeList = () => {

const [employeeList, setEmployeeList] = useState([]);


  const getEmployeeList = () => {
    fetch(`https://vet-lab-8-4.herokuapp.com/api/employees`)
      .then((data) => data.json())
      .then((json) => {
        // console.log(json);
        setEmployeeList(json)
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
     {getEmployeeList()}
<main>
         <h2>All Staff</h2>
         <section className='employee-list'>
           
           {employeeList.map((eachEmp) => (
             <Employee employee={eachEmp} />
           ))}

         </section>
</main>
    
    </>
   

  )


}



export default EmployeeList;

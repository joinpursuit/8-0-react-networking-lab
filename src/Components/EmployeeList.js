import React, {Component} from "react";
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
    
    // export default EmployeeList;
    
    export default class EmployeeList extends Component {
      constructor() {
        super()
        this.state = {
          employees: [],
          pets:[]
        }
      }
      componentDidMount(){
          fetch(`https://vet-lab-8-4.herokuapp.com/api/employees`)
          .then(data => data.json())
          .then(json => {
            this.setState({
               employees: json
           })
          })
          .catch(error => (error))

          fetch(`https://vet-lab-8-4.herokuapp.com/api/pets`)
          .then(animalsData => animalsData.json())
          .then(json =>{
            this.setState({
              pets: json
            })
          })
        }
//Filter our Pets array returning only the animals that have seeing a specific provider based on their Id
// Returning and array of pets
      render(){
      
        return(
          <main>
             <h2>All Staff</h2>
             <section className="employee-list">
              {this.state.employees.map((employee)=>{
                return(<Employee employee ={employee} key ={employee.id} pets = {this.state.pets}/>
                )
              })
            }
             </section>
          </main>
        )
      }
    }
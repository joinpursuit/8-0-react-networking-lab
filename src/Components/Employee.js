import React from "react"
import "./Employee.css"
import PetList from "./PetList.js"

class Employee extends React.Component {
  constructor() {
    super ()
  
    this.state = {
      employeeList: [],
    }
  }
  
  componentDidMount = () => {
    fetch("https://pursuit-veterinarian.herokuapp.com/api/employees")
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        this.setState({
          employeeList: json
        })
      })
      .catch( (err) => {
        console.log("error fetching employee")
      })
  }



  render(){
    const {employeeList} = this.state
    return(
      <article className="employee">
       <h3>Staff Member Name</h3>
       <h4>Staff Member Title</h4>
       <button>Show Pets</button>
       <PetList />
     </article>
    )
  }
}

export default Employee;

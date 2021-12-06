import { Component } from "react"
import Employee from "./Employee"
import "./EmployeeList.css"

class EmployeeList extends Component{
  constructor(){
    super()
    this.state = {
      staffInfo: []
    }
  }

  getStaffInfo = () => {
    fetch("https://pursuit-veterinarian.herokuapp.com/api/employees")
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        staffInfo: data
      })
    })
  }

  componentDidMount(){
    this.getStaffInfo()
  }

  render(){

    let staff = this.state.staffInfo.map((member)=>{ 
      return <Employee key={member.id} member={member}/>
    })

    return (
      <main>
        <h2>All Staff</h2>
        <section className="employee-list">
          {staff}
        </section>
      </main>
    )
  }
}

export default EmployeeList
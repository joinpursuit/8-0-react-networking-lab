import PetList from './PetList'
import './Employee.css'
import React from 'react'

export class Employee extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      toggle: false,
    }
  }
  //   const delComma = (staffs) => {
  //     let post = staffs.postfix
  //     let firstName = staffs.firstName
  //     let lastName = staffs.lastName
  //     let prefix = staffs.prefix
  //     for (let staff of staffs) {
  //       if (staff.includes(post)) {
  //         return (<p>
  //           {prefix} {firstName} {lastName}, ${post}
  //         </p>)

  //       } else {
  //         return (
  //           <p>
  //             {prefix} {firstName} {lastName}
  //           </p>
  //         )
  //     }
  //   }
  // }

  getPets = () => {
    fetch('https://serene-tundra-77911.herokuapp.com/api/pets')
      .then((response) => response.json())
      .then((json) => this.setState({ pets: json }))
      .catch((err) => {
        console.log('There is an error')
      })
  }

  componentDidMount() {
    this.getPets()
  }

  toggle = () => {
    let { toggle } = this.state
    this.setState({ toggle: !toggle })
  }

  render() {
    const { employees } = this.props
    const { firstName, lastName, prefix, postfix, title } = employees
    const { toggle, pets } = this.state
    console.log()
    return (
      <article className='employee'>
        <h3>
          {prefix} {firstName} {lastName}, {postfix}
        </h3>
        <h4>{title}</h4>
        <button className={toggle ? 'visited' : 'show'} onClick={this.toggle}>
          Show Pets
        </button>
        {toggle ? <PetList pets={pets} employees={employees} /> : null}
      </article>
    )
  }
}

export default Employee

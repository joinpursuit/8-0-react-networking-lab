import PetList from "./PetList";
import "./Employee.css";
import React, { useEffect, useState } from "react";

const Employee = (props) => {
  const [firstName, setfirstName] = useState(props.firstName);
  const [lastName, setlastName] = useState(props.lastName);
  const [title, settitle] = useState(props.title);
  const [prefix, setprefix] = useState(props.prefix);
  const [postfix, setpostfix] = useState(props.postfix);
  const [id, setid] = useState(props.id);
  const [petList, setpetList] = useState([]);
  const [isActive, setisActive] = useState(false);
  
  const listPet = (id) => {
    fetch(`https://vet-lab-8-4.herokuapp.com/api/pets?employeeId=${id}`)
      .then((pets) => pets.json())
      .then((pets) => {
        this.setState({
          petList: pets,
          isActive: true,
        });
      })
      .catch((err) => console.log(err));
  };
  
  useEffect(() => {
    console.log("UPDATING")
  }, [props])
  
  return (
    <article className="employee">
      <h3>
        {prefix} {firstName} {lastName}
        {postfix ? `, ${postfix}` : null}
        {/* {this.state.prefix} {this.state.firstName} {this.state.lastName}
        {this.state.postfix ? `, ${this.state.postfix}` : null} */}
      </h3>
      <h4>{title}</h4>
      {/* <h4>{this.state.title}</h4> */}
      <button onClick={(e) => listPet(id)}>Show Pets</button>
      {isActive ? <PetList pets={petList} /> : null}
    </article>
  );
};

export default Employee
//export default class Employee extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     firstName: this.props.firstName,
  //     lastName: this.props.lastName,
  //     title: this.props.title,
  //     prefix: this.props.prefix,
  //     postfix: this.props.postfix,
  //     id: this.props.id,
  //     petList: [],
  //     isActive: false,
  //   };
  // }


  // componentDidUpdate() {
  //   console.log("HOLD ON");
  // }

//   render() {
//   }
// }

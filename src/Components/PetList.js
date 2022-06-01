import React, {Component} from 'react'


export default class PetList extends Component {
  constructor(props) {
    super(props)
  }
  
  
  
  render() {
  

    return (
      <aside className="pets-list">
        <ul></ul>
        {this.props.pets.length > 0 ? this.props.pets.map(pet => <li>{pet.name}</li>) :
          < p > No pets listed for this employee.</p>}
      </aside>
    )

  }
}

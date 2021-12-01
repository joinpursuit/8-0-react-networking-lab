import { Component } from "react";

export class PetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petData: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://pursuit-veterinarian.herokuapp.com/api/pets?employeeId=${this.props.id}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ petData: data });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  handleNames() {
    let petNames = this.state.petData
      .map((item) => {
        return item.name;
      })
      .join(", ");
    console.log(petNames);
    return petNames;
  }

  render() {
    return (
      <aside className="pets-list">
        <p>
          {this.props.show
            ? this.handleNames()
              ? this.handleNames()
              : "No pets listed"
            : null}
        </p>
      </aside>
    );
  }
}

export default PetList;

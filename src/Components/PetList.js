import { Component } from "react";

class PetList extends Component {
	constructor() {
		super();
		this.state = { petsData: [] };
	}

	componentDidMount() {
		fetch(
			`https://pursuit-veterinarian.herokuapp.com/api/pets?employeeId=${this.props.theId}`
		)
			.then((res) => {
				return res.json();
			})
			.then((Data) => {
				this.setState({
					petsData: Data,
				});
			});
	}

	render() {
		let allPetsName = this.state.petsData.map((each) => {
			return <>{each.name} </>;
		});

		return (
			<aside className="pets-list">
				{allPetsName.length > 0 ? (
					<p>{allPetsName}</p>
				) : (
					<p>No pets listed for this employee.</p>
				)}
			</aside>
		);
	}
}

export default PetList;

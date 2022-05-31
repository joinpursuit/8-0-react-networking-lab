import PetList from "./PetList";
import "./Employee.css";
import React from "react";

class Employee extends React.Component {
	constructor() {
		super();
		this.state = {
			showPets: false,
			pets: [],
		};
	}
	togglePets = () => {
		this.setState({ showPets: !this.state.showPets });
	};
	componentDidMount() {
		//update state.pets
		const { url, id } = this.props;
		fetch(`${url}api/pets?employeeId=${id}`)
			.then((response) => response.json())
			.then((obj) => {
				this.setState({ pets: [...obj] });
			})
			.catch((error) => {
				console.log(error);
			});
	}
	render() {
		const { id, firstName, lastName, prefix, postfix, title } = this.props;
		return (
			<article className="employee" id={id}>
				<h3>
					{prefix ? prefix : ""}
					{` ${firstName} ${lastName}${postfix ? `, ${postfix}` : ""}`}{" "}
				</h3>
				<h4>{title}</h4>
				<button onClick={this.togglePets}>
					{this.state.showPets ? "Hide Pets" : "Show Pets"}
				</button>
				<PetList
					key={`pet-${id}`}
					className={this.state.showPets ? null : "hidden"}
					list={this.state.pets}
				/>
			</article>
		);
	}
}

export default Employee;

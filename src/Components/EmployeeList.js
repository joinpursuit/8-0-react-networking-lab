import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends React.Component {
	constructor() {
		super();
		this.state = {
			dataEmployee: [],
		};
	}

	componentDidMount() {
		fetch("https://pursuit-veterinarian.herokuapp.com/api/employees")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				this.setState({ dataEmployee: data });
			});
	}

	render() {
		let mappingEmployee = this.state.dataEmployee.map((each) => {
			return <Employee key={each.id} each={each} />;
		});

		return (
			<main>
				<h2>All Staff</h2>
				<section className="employee-list">{mappingEmployee}</section>
			</main>
		);
	}
}

export default EmployeeList;

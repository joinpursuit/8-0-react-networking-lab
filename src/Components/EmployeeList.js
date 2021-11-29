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
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.setState({ dataEmployee: data });
			});
	}

	render() {
		const mappingEmployee = this.state.dataEmployee.map((each) => {
			return <Employee each={each} />;
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

import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export class EmployeeList extends React.Component {
	constructor() {
		super();
		this.state = {
			listOfEmployees: [],
		};
	}
	componentDidMount() {
		const { url } = this.props;
		fetch(`${url}api/employees`)
			.then((response) => response.json())
			.then((obj) => {
				this.setState({ listOfEmployees: [...obj] });
			})
			.catch((error) => {
				console.log(error);
			});
	}
	getEmployees = (url) => {};

	render() {
		return (
			<main>
				<h2>All Staff</h2>
				<section className="employee-list">
					{this.state.listOfEmployees.map((employee) => {
						return (
							<Employee
                url={this.props.url}
								id={employee.id}
								key={employee.id}
								firstName={employee.firstName}
								lastName={employee.lastName}
								prefix={employee.prefix}
								postfix={employee.postfix}
								title={employee.title}
							/>
						);
					})}
				</section>
			</main>
		);
	}
}

export default EmployeeList;

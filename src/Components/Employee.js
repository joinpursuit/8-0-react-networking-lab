import PetList from "./PetList";
import { Component } from "react";
import "./Employee.css";

class Employee extends Component {
	constructor() {
		super();
		this.State = {};
	}

	render() {
		return (
			<article className="employee">
				<div key={this.props.each.id}>
					<h3>
						{this.props.each.prefix}
						{this.props.each.firstName}
						{this.props.each.lastName}
						{this.props.each.postfix}
					</h3>
					<h4>{this.props.each.title}</h4>
				</div>
				<button>Show Pets</button>
				<PetList />
			</article>
		);
	}
}

export default Employee;

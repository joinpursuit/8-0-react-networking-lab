import PetList from './PetList';
import './Employee.css';
import React from 'react';

export class Employee extends React.Component {
	constructor() {
		super();
		this.state = {
			pets: [],
			toggle: false,
		};
	}

	getEmployeePets = () => {
		fetch('https://serene-tundra-77911.herokuapp.com/api/pets')
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					pets: json,
				});
			});
	};

	componentDidMount() {
		this.getEmployeePets();
	}

	toggle = () => {
		const { toggle } = this.state;
		this.setState({ toggle: !toggle });
	};
	render() {
		const { employees } = this.props;
		const { firstName, lastName, prefix, postfix, title } = employees;
		const { toggle, pets } = this.state;
		let name = null;

		// tried using a ternary but may have gotten the syntax wrong

		if (postfix) {
			name = (
				<p>
					{prefix} {firstName} {lastName}, {postfix}
				</p>
			);
		} else {
			name = (
				<p>
					{prefix} {firstName} {lastName}
				</p>
			);
		}
		return (
			<article className='employee'>
				<h3>{name}</h3>
				<h4>{title}</h4>
				<button onClick={this.toggle}>Show Pets</button>
				{toggle ? <PetList pets={pets} employees={employees} /> : null}
			</article>
		);
	}
}

export default Employee;

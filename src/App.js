import React from 'react';
import NavBar from './Components/NavBar';
import EmployeeList from './Components/EmployeeList';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			employeeArr: [],
		};
	}

	getEmployeeList = () => {
		fetch('https://serene-tundra-77911.herokuapp.com/api/employees')
			.then((response) => response.json())
			.then((employees) => {
				this.setState({
					employeeArr: employees,
				});
			});
	};

	componentDidMount() {
		this.getEmployeeList();
	}

	render() {
		const { employeeArr } = this.state;
		return (
			<>
				<NavBar />
				<EmployeeList employeeArr={employeeArr} />
			</>
		);
	}
}

export default App;

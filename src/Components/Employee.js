// import PetList from "./PetList";
// import { Component } from "react";
// import "./Employee.css";

// class Employee extends Component {
// 	constructor() {
// 		super();
// 		this.State = {
// 			employeData: "",
// 		};
// 	}

// 	componentDidMount() {
// 		console.log("Did Mount");
// 		this.employeeData();
// 	}

// 	employeeData = () => {
// 		fetch("https://pursuit-veterinarian.herokuapp.com/api/employees")
// 			.then((res) => {
// 				return res.json();
// 			})
// 			.then((data) => {
// 				console.log(data);
// 				this.setState({
// 					employeData: data,
// 				});
// 			});
// 	};

// 	render() {
// 		let mapping = this.state.employeData.map((data) => {
// 			return (
// 				<div key={data.id}>
// 					<h3>
// 						{data.preflix}
// 						{data.firstName}
// 						{data.lastName}
// 						{data.postfix}
// 					</h3>
// 					<h4>{data.title}</h4>
// 				</div>
// 			);
// 		});

// 		return (
// 			<article className="employee">
// 				<div>{mapping}</div>
// 				<button>Show Pets</button>
// 				<PetList />
// 			</article>
// 		);
// 	}
// }

// export default Employee;

import PetList from "./PetList";
import "./Employee.css";

export const Employee = () => {
	return (
		<article className="employee">
			<h3>Staff Member Name</h3>
			<h4>Staff Member Title</h4>
			<button>Show Pets</button>
			<PetList />
		</article>
	);
};

export default Employee;

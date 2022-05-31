import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

const BASE_URL = "https://serene-tundra-77911.herokuapp.com/";


const App = () => {
	return (
		<>
			<NavBar />
			<EmployeeList url={BASE_URL} />
		</>
	);
};

export default App;

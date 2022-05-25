import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
import { Component } from "react/cjs/react.production.min";

// const App = () => {
//   return (
//     <>
//       <NavBar />
//       <EmployeeList />
//     </>
//   );
// };
// export default App;

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <NavBar />
        <EmployeeList />
      </>
    );
  }
}

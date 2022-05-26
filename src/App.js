import React, {Component} from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

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
  
 render() {
    return (
      <>
        <NavBar />
        <EmployeeList />
       </>
    )
  }
}



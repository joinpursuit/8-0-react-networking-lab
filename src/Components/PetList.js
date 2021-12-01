export const PetList = () => {
  return (
    <aside className="pets-list">
      <p>No pets listed for this employee.</p>
    </aside>
  );
};

export default PetList;

// constructor() {
//   super() 
  
//   this.state = {
//     petInfo: []
//   }
// }

// getPetList = () => {
//   fetch("https://pursuit-veterinarian.herokuapp.com/api/employees")
//     .then((res) => {
//       res.json()
//       console.log(res)
//     })
//     .then((json) => {
//       this.setState({
//         petInfo: json
//       })
//     })
// }

// componentDidMount = () => {
//   this.getPetList()
// }
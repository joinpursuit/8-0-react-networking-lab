import PetList from './PetList';
import './Employee.css';

export const Employee = ({ employee }) => {
  // const [pets, setPets] = useState({});

  // function fetchPet() {
  //   fetch('https://vet-api-1.onrender.com/api/pets')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPets(data);
  //       console.log(setPets(data));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // useEffect(() => {
  //   fetchPet();
  // }, []);

  return (
    <article className="employee">
      <h3>
        {employee.prefix}
        {employee.firstName} {employee.lastName} {employee.postfix}
      </h3>
      <h4>{employee.title}</h4>
      <button>Show Pets</button>
      <PetList employee={employee} />
    </article>
  );
};

export default Employee;

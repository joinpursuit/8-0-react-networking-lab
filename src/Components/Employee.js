import PetList from './PetList';
import './Employee.css';
import { useState } from 'react';

export const Employee = ({ employee }) => {
  const [show, setShow] = useState(false);

  function showPet() {
    setShow(!show);
  }

  return (
    <article className="employee">
      <h3>
        {employee.prefix + ' ' + employee.firstName + ' ' + employee.lastName}
        {employee.postfix && ', ' + employee.postfix}
      </h3>
      <h4>{employee.title}</h4>
      <button onClick={() => showPet()}>
        {show ? 'Hide Pets' : 'Show Pets '}
      </button>
      {show && <PetList employee={employee} />}
    </article>
  );
};

export default Employee;

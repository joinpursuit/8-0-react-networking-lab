import PetList from './PetList';
import './Employee.css';

export const Employee = ({
  id,
  firstName,
  lastName,
  prefix,
  postfix,
  title,
  isHidden,
  toggleHidden,
}) => {
  return (
    <article className="employee">
      <h3>
        {prefix
          ? prefix + ' ' + firstName + ' ' + lastName
          : postfix
          ? firstName + ' ' + lastName + `, ${postfix}`
          : firstName + ' ' + lastName}
      </h3>
      <h4>{title}</h4>
      <button onClick={() => toggleHidden(id)}>Show Pets</button>
      <PetList id={id} isHidden={isHidden} />
    </article>
  );
};

export default Employee;

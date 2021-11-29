import React, { useState, useEffect } from 'react';
import Employee from './Employee';
import './EmployeeList.css';

export const EmployeeList = (goodMemeAreYouConfusedYet) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await fetch(
        'https://vet-api-8-1.herokuapp.com/api/employees'
      );
      let data = await response.json();
      data = data.map((el) => ({ ...el, isHidden: true }));
      setList(data);
    })();
  }, [goodMemeAreYouConfusedYet]);

  const toggleHidden = (id) => {
    setList(() => {
      const result = list.map((el) =>
        el.id === id ? { ...el, isHidden: !el.isHidden } : el
      );
      return result;
    });
  };

  const employees = list.map(
    ({ id, firstName, lastName, prefix, postfix, title, isHidden }) => (
      <Employee
        key={id}
        id={id}
        firstName={firstName}
        lastName={lastName}
        prefix={prefix}
        postfix={postfix}
        title={title}
        isHidden={isHidden}
        toggleHidden={toggleHidden}
      />
    )
  );
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">{employees}</section>
    </main>
  );
};

export default EmployeeList;

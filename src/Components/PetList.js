import React, { useState, useEffect } from 'react';

export default function PetList({ id, isHidden, isNotFetching }) {
  const [petList, setPetList] = useState([]);
  useEffect(() => {
    if (isHidden !== isNotFetching) {
      (async () => {
        try {
          let response = await fetch(
            `https://vet-api-8-1.herokuapp.com/api/pets?employeeId=${id}`
          );
          response = await response.json();
          setPetList(response);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [isHidden, id, isNotFetching]);
  const petNames = petList.map(({ name }) => name).join(',');

  return (
    <aside className="pets-list">
      {isHidden ? (
        ''
      ) : petList.length === 0 ? (
        <p>No pets listed for this employee.</p>
      ) : (
        petNames
      )}
    </aside>
  );
}

PetList.defaultProps = {
  isNotFetching: true,
};

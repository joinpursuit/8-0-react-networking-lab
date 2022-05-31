export const PetList = (props) => {
  const { ownersOfHumans } = props;
  return (
    <aside className='pets-list'>
      {ownersOfHumans.length ? (
        ownersOfHumans.map((pet) => <p key={pet.id}> {pet.name} </p>)
      ) : (
        <p>No pets listed at this time.</p>
      )}
    </aside>
  );
};

export default PetList;

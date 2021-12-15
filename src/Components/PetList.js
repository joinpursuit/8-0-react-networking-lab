export const PetList = (props) => {
  const {empId} = props
  return (
    <aside className="pets-list">
      <p>No pets listed for this employee.</p>
    </aside>
  );
};

export default PetList;

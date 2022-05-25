


// create a function to get pets with fetch and pets endpoint - return an array of 20 objects

const getPets = () => {
  fetch(`https://vet-lab-8-4.herokuapp.com/api/pets`)
    .then(data => data.json())
    .then(json => {console.log(json)})
}

export const PetList = () => {
  return (
    <aside className="pets-list">
      <p>No pets listed for this employee.</p>
    </aside>
  );
};

export default PetList;
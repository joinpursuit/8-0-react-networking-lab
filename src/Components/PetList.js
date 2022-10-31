import {useState, useEffect} from "react"

export const PetList = ({map}) => {

  const [pet, setPet] = useState([])
  const [showInfo, setShowInfo] = useState(false)

  function toggleInfo(){
    setShowInfo(!showInfo)
}

useEffect(() => {
  fetch("https://vet-api-1.onrender.com/api/pets")
  .then((response) => response.json())
  .then((json) => {
    setPet(json);
  })
  .catch((err) => {
    console.log("error");
  });
}, [])

  return (
    <aside className="pets-list">
      <button onClick={toggleInfo}>{!showInfo ? "Show Pets": "Don't Show Pets"}</button>
      {showInfo ? (
                <p>{pet.map((pets) => {
                  if(pets.employeeId === map.id ){
                    return(
                      pets.name + ", "
                    )
                  }
                })}</p>

            ): null}
    </aside>
  );
};

export default PetList;

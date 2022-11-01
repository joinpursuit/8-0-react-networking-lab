import {useState, useEffect} from "react"

export const PetList = ({map, employee}) => {

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
                <p>{pet.map((pets, i) => {
                  if(pets.employeeId === map.id ){
                    return(
                      pets.name + ", "
                    )
                  }
                  if(i === 0){
                    if(pets.employeeId !== map.id){
                      return(
                        "No pets are listed for this employee."
                      )
                    }
                  }
                  }
                )}</p>

            ): null}
    </aside>
  );
};

export default PetList;

import { useState, useEffect } from "react"

export const PetList = ({ employee }) => {
  const [pets, setPet] = useState([])

  function petsFetch() {
    fetch("https://vet-api-1.onrender.com/api/pets")
      .then((response) => response.json())
      .then((json) => {
        setPet(json)
      })
      .catch((err) => {
        console.log("error fetching image")
      })
  }
  useEffect(() => {
    petsFetch()
  }, [])

  return (
    <aside className="pets-list">
      {!pets && <p>No pets listed for this employee.</p>}
      {pets &&
        pets.map((pet) => pet.employeeId === employee.id && <> {pet.name}, </>)}
    </aside>
  )
}

export default PetList

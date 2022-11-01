import { useState, useEffect } from "react"
import Employee from "./Employee"
export const PetList = ({ employee }) => {
  const [pets, setPets] = useState([])

  function petsFetch() {
    fetch("https://vet-api-1.onrender.com/api/pets?employeeId=vlJtFOU")
      .then((response) => response.json())
      .then((json) => {
        setPets(json)
      })
      .catch((err) => {
        console.log("error fetching image")
      })
  }
  useEffect(() => {
    petsFetch()
  }, [pets])

  return (
    <aside className="pets-list">
      <>
        {pets.length < 0 ? (
          <p>No pets listed for this employee.</p>
        ) : (
          pets.map((pet) => pet.employeeId === employee.id && <p>{pet.name}</p>)
        )}
      </>
    </aside>
  )
}

export default PetList

import { useState, useEffect } from "react"
export const PetList = () => {
  const [pets, setPets] = useState([])
  function petsFetch() {
    fetch("https://vet-api-1.onrender.com/api/pets")
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
  }, [])

  return (
    <aside className="pets-list">
      <p>No pets listed for this employee.</p>
    </aside>
  )
}

export default PetList

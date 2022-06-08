import { useState, useEffect } from "react";

const PetList = ({id, name,empID}) => {
const [hasPets, setHasPets] = useState([])

useEffect( () =>{
  setHasPets()
})

let petArray = [];

if(id === empID){
  petArray.push(name)
}

// console.log(hasPets)

if (id === empID){
  
}
  return (
    <aside className="pets-list">
      <p>{empID}</p>
    </aside>
  );
};

export default PetList


// import { useState } from "react";



export const PetList = ({petid, docid, petname,index}) => {
  
// const petname=[petname,setpetname]=useState(null)

  return(
  // <aside key={petid} className="pets-list">

<span>{petid===docid? (<span>, {petname}</span>): null }</span>

  

    // </aside>
  )}


export default PetList;

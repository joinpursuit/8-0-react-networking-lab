import { useState,useEffect } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({id,name,last,title,postfix,data,occupation}) => {


const [pet,setPet]=useState(null)
const[toggle,settoggle]=useState(false)

// const[toggle,settoggle]=useState(false)
    
// function togglepets(){settoggle(!toggle)}

  useEffect(()=>{
fetch("https://vet-resource-api-9-2.herokuapp.com/api/pets")
 .then(res => res.json()).then((pets) =>    {
 
 console.log(pets)

 setPet(pets)} )  // const json = await response.json();
// To make the equivalent timing of on page load or on component mount; you would use useEffect():
  
},[])

// let petARAY=[]

function togglepets(){settoggle(!toggle)}

  // pet.map(petelem=> (petelem.employeeId)
// )
console.log(name)
  return (
            <article key={id} className="employee">
<div><strong>{title} {name} {last} <span>{postfix!=="" ?<span>, {postfix}</span>:null}</span></strong></div>
<div>{occupation}</div>
<button onClick={togglepets}>{!toggle ? <div>Show More</div>:<div>Show Less</div>}</button>

<aside className="pets-list">{toggle ? (pet.map((pete)=>{return ((<span key={pete.name}><PetList  docid={id} petid = {pete.employeeId} petname={pete.name}/></span>)) })) : null}</aside>
     {/* {toggle && Element.className("pets-list").contains(document.querySelectorAll("span"))?  "Nothing here": null} */}
            </article>
    

  )

  
  
  

// useEffect(() => {
// return fetcha
// })
}
export default Employee;

import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({empData,petData}) => {



  
  const emp = empData.map((e)=>{

    if(e.prefix === "" && e.postfix === ""){
      return (
        <article className="employee">
      <h3>{e.firstName + " " + e.lastName}</h3>
      <h4>{e.title}</h4>
      {/* <button>Show Pets</button> */}
      <PetList 
      empID={e.id}
      petData={petData}

      />
    </article>
      )
    }else if(e.prefix === "" ){
      
      return (
        <article className="employee">
      <h3>{e.firstName + " " + e.lastName + ", " + e.postfix}</h3>
      <h4>{e.title}</h4>
      {/* <button>Show Pets</button> */}
      <PetList 
      empID={e.id}
      petData={petData}

      />
    </article>
      )

    }else {

      return (
        <article className="employee">
      <h3>{e.prefix + " " + e.firstName + " " + e.lastName}</h3>
      <h4>{e.title}</h4>
      {/* <button>Show Pets</button> */}
      <PetList 
      empID={e.id}
      petData={petData}

      />
    </article>
      )
    }
   
  })


  return (
   emp
  );
};

export default Employee;

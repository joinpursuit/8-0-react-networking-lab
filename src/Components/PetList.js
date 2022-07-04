
import { React, useState} from "react";


function FirstPet () {
  const [checked, setChecked] = useState(false); 
  
  const onClick = () => { 
    setChecked(!checked)
  }
    
  return (
      <section className="first-pet">
        <h4>Is this your first pet?</h4>
        <br />
        <form  >
          <input type="checkbox" onClick={onClick}/>
        </form>
        <h5>{checked ? 'Yes' : 'No'}</h5>
      </section>
    );
  }


export default FirstPet;
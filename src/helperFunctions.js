
// function for fetching employee/ pet info
export function callFetch(endpoint, setFunction) {
    fetch(`https://vet-api-1.onrender.com/${endpoint}`)
    .then(resp => resp.json())
    .then(respJson => {
      setFunction(respJson)
       
    })
    .catch(err => console.log(`Error`))
  }
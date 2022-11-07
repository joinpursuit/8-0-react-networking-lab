const BASE_API_URL = "https://vet-resource-api-9-2.herokuapp.com/api"

const EMPLOYEES_ENDPOINT = 'employees'
const PETS_ENDPOINT = 'pets'


// Implementar la consulta de la informacion a la API
const getEmployees = () => {
  const result = fetch(`${BASE_API_URL}/${EMPLOYEES_ENDPOINT}`)
    .then(response => response.json())
    .then(data => data)

  return result
}

const getPets = (employeeId) => {
    const result = fetch(`${BASE_API_URL}/${PETS_ENDPOINT}?employeeId=${employeeId}`)
        .then(response => response.json())
        .then(data => data)
    
    return result
}

export { getPets }
export { getEmployees }
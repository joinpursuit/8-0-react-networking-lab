const baseUrl = process.env.REACT_APP_BASE_URL

export function getEmployees() {
  return fetch(`${baseUrl}/employees`)
    .then((res) => res.json())
}


export function getEmployeePet(id) {
    return fetch(`${baseUrl}/pets?employeeId=${id}`)
      .then((res) => res.json())
  }
  
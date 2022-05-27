export const PetList = ({ employees: { id }, pets }) => {
  const ids = (animals) => {
    let array = []
    for (let animal of animals) {
      if (id === animal.employeeId) {
        array.push(animal.name)
      }
    }
    return array.join(', ')
  }

  return (
    <aside className='pets-list'>
      <p>
        {ids(pets) === '' ? 'No pets listed for this employee.' : ids(pets)}
      </p>
    </aside>
  )
}

export default PetList

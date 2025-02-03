import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const handleInputChange = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()  // Estää lomakkeen oletusarvoisen lähetyksen
    const newPerson = { name: newName }
    setPersons([...persons, newPerson])  // Lisää uusi nimi listaan
    setNewName('')  // Tyhjentää syötekentän
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      {/* Debuggausta varten */}
      <div>debug: {newName}</div>

      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App



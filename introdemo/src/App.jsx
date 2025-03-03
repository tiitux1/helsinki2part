import { useState, useEffect } from "react";
import personsService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  // 🔥 Haetaan tiedot palvelimelta kun komponentti ladataan
  useEffect(() => {
    personsService.getAll().then(initialPersons => {
      setPersons(initialPersons);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already in the phonebook!`);
      return;
    }

    const newPerson = { name: newName, number: newNumber };

    personsService.create(newPerson).then(returnedPerson => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />

      <h3>Add a new</h3>
      <PersonForm 
        newName={newName} setNewName={setNewName} 
        newNumber={newNumber} setNewNumber={setNewNumber} 
        addPerson={addPerson} 
      />

      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} />
    </div>
  );
};

export default App;

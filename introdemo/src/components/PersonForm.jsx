import axios from "axios";

const PersonForm = ({ newName, setNewName, newNumber, setNewNumber, persons, setPersons }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already in the phonebook!`);
      return;
    }

    const newPerson = { name: newName, number: newNumber };

    axios
      .post("http://localhost:3001/persons", newPerson)  // 🔥 Lähetetään palvelimelle
      .then(response => {
        setPersons(persons.concat(response.data));  // 🔄 Päivitetään tila uudella henkilöllä
        setNewName("");
        setNewNumber("");
      })
      .catch(error => {
        console.error("Error adding person:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      </div>
      <div>
        Number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default PersonForm;

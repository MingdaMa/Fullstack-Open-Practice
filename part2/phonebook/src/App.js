import { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import People from './components/People';

const App = () => {
  const [people, setPeople] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [searchWord, setSearchWord] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addName = (event) => {
    event.preventDefault();
    if (people.find(person => person.name === newName)) {
      alert(`${newName} is already added to phoonbook!`);
      return;
    }
    const newPersonObj = { name: newName, number: newNumber }
    setPeople(people.concat(newPersonObj));
  }

  const handleSearchWordChange = (event) => {
    const newSearchWord = event.target.value;
    setSearchWord(event.target.value);
    console.log(event.target.value)
    const newPeople = people.filter(person => {
      return person.name.toLowerCase().includes(newSearchWord.toLowerCase());
    })
    setPeople(newPeople);
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchWord={searchWord} handleSearchWordChange={handleSearchWordChange} handleNumberChange={handleNumberChange}/>
      <h2>Add a new</h2>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <People people={people} />
    </div>
  );
}

export default App;

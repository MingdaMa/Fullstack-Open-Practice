import { useState } from "react";
import Countries from './components/Countries';
import countryService from './service/country';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);

  const onSearchTermChange = (e) => {
    const search = e.target.value;
    setSearchTerm(search);
    
    countryService
      .getCountries(search)
      .then(searchingResult => {
        setCountries(searchingResult)
      })
  }

  return (
    <div>
      find countries <input type="text" value={searchTerm} onChange={onSearchTermChange}/>
      <Countries countries={countries}/>
    </div>
  );
}

export default App;

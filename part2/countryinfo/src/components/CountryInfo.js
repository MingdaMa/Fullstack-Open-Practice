import { useState } from 'react';

const CountryInfo = ({ country }) => {
  const [isHidden, setIsHidden] = useState(true);

  const onShowHidden = () => {
    setIsHidden(!isHidden);
  }

  return (
    <div>{country.name.common} <button onClick={onShowHidden}>show</button>
      {!isHidden && (
        <div>
          <h1>{country.name.common}</h1>
          capital {country.capital[0]}
          <br/>
          area {country.area}
          <h2>languages</h2>
          <ul>
            {Object.entries(country.languages).map(lan => {
              return <li>{lan[1]}</li>
            })}
          </ul>
          <img src={country.flags.png} alt={country.flags.alt}/>
        </div>
      )}
    </div>
  )
}

export default CountryInfo;
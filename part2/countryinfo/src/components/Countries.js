import CountryInfo from './CountryInfo';

const Countries = ({ countries }) => {

  if (countries.length === 0) {
    return null;
  }
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  }
  if (countries.length === 1) {
    const country = countries[0];
    return (
      <CountryInfo isHidden={false} country={country}/>
    )
  }
  return (
    <div>
      {countries.map(country => {
        return (
           <CountryInfo key={country.area} country={country}/>
          )
      })}
    </div>
  )
}

export default Countries;
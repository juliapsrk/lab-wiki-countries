import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <div>
      <ul>
        {props.countries.map((country) => (
          <li key={country.alpha3Code}>
            <Link to={`/${country.alpha3Code}`}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.common}
              />
              <span>{country.name.common}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;

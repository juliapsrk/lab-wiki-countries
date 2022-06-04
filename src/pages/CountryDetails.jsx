import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CountryDetails = () => {
  const { id } = useParams();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data);
      });
  }, [id]);

  return (
    <div>
      {country && (
        <>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt={country.name.common}
          />
          <h1>{country.name.common}</h1>
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">Capital</th>
                <td>{country.capital.join(', ')}</td>
              </tr>
              <tr>
                <th scope="row">Area</th>
                <td>
                  {country.area} km<sup>2</sup>
                </td>
              </tr>
              {country.borders.length > 0 && (
                <tr>
                  <th scope="row">Borders</th>
                  <td>
                    <ul>
                      {country.borders.map((code) => (
                        <li key={code}>
                          <Link to={`/${code}`}>{code}</Link>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default CountryDetails;

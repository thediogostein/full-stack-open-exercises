import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const CountryDetails = ({ name, capital, area, languages, flagSrc }) => {
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const message = !errorMessage
    ? 'Loading weather data...'
    : 'Error loading weather data';

  useEffect(() => {
    axios //
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((response) => {
        setWeather(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorMessage(err);
        console.log(err);
      });
  }, []);

  return (
    <article>
      <h2>{name}</h2>
      <p>capital {capital}</p>
      <p>area {area}</p>
      <h3>languages:</h3>
      {
        <ul>
          {Object.values(languages).map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      }
      <img src={flagSrc} alt={name} />
      <h2>Weather in {name}</h2>

      {!isLoading && !errorMessage ? (
        <>
          <p>temperature {weather.wind.deg} Celcius</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt=""
          />
          <p>wind {weather.wind.speed} m/s</p>{' '}
        </>
      ) : (
        <p>{message}</p>
      )}
    </article>
  );
};

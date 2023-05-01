import './SearchMeteo.scss';
import { ChangeEvent, useState } from 'react';
import { GETweatherByCity } from '../../request/GETweatherByCity';
import search from '../../img/search.svg';

type searchMeteoProps = {
  setZipcode: React.Dispatch<React.SetStateAction<string>>;
  setIcon: React.Dispatch<React.SetStateAction<string>>;
  setTemperature: React.Dispatch<React.SetStateAction<number>>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

function SearchMeteo({setIcon, setTemperature, setCity }: searchMeteoProps) {
  const [cityCopy, setCityCopy] = useState<string>('');
  const handleClick = () => {
    setCity(cityCopy);
    GETweatherByCity(setIcon, setTemperature, cityCopy);
    setCityCopy('');
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setCityCopy(event.target.value);
    }


  return (
    <div className="search">
      <input className="search-input" value={cityCopy} onChange={handleChange}>
      </input>
      <button className="search-button" onClick={handleClick}>
          <img src={search}></img>
      </button>
    </div>
  )
}

export default SearchMeteo
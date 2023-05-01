import { useState } from 'react'
import './App.scss'
import SearchMeteo from './SearchMeteo/SearchMeteo'
import WidgetMeteo from './WidgetMeteo/WidgetMeteo'
import sun from '../img/sun.png'



function App() {
  const [zipcode, setZipcode] = useState<string>('');
  const [temperature, setTemperature] = useState<number>(0);
  const [city, setCity] = useState<string>('');
  const [icon, setIcon] = useState<string>('04d');
  
  return (
    <div className='container'>
      <h1>Hello météo</h1>
      <SearchMeteo
        setZipcode={setZipcode}
        setTemperature={setTemperature}
        setIcon={setIcon}
        setCity={setCity}
      />
      {city && <WidgetMeteo city={city} zipcode={zipcode} temperature={temperature} icon={icon} />}
      <img className="container-sun" src={sun} />
    </div>
  )
}

export default App

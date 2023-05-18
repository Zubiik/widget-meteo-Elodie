import './WidgetMeteo.scss';

interface WidgetMeteoProps {
  city: string;
  zipcode: string;
  temperature: number;
  icon: string;
}

function WidgetMeteo({ city, zipcode,temperature,icon }: WidgetMeteoProps) {
  
  return (
    <div className="meteo">
      <div>
        <div className="meteo-city">{city}</div>
        <div className="meteo-zipcode">{zipcode}</div>
        <div className="meteo-temperature">{temperature}°C</div>
      </div>
      <div>
        <img className='meteo-sun' src={`https://openweathermap.org/img/wn/${icon}.png`} />
      </div>
    </div>
  )
}

export default WidgetMeteo
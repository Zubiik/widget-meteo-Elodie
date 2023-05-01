import axios from "axios";



export const GETtemperature = async (setIcon, setTemperature,zipcode,setCity) => {
console.log(zipcode);

  const API_KEY = import.meta.env.VITE_API_KEY;
  //const countryCode = 'fr';
  let API_URL = '';
  console.log(API_URL);

   
    
  if (import.meta.env.MODE === 'production') {
    API_URL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},fr&appid=${API_KEY}&units=metric`;
    console.log(API_URL);
       
  }
  if (import.meta.env.MODE === 'development') {
          
    API_URL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},fr&appid=${API_KEY}&units=metric`;
    console.log(API_URL);
  }
  
  const result = await axios.get(API_URL);
  console.log(result.data);
  setTemperature(Math.round(result.data.main.temp));
  setIcon(result.data.weather[0].icon);
  setCity(result.data.name);

};

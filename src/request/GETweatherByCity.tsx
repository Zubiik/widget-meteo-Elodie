
import axios from "axios";


export const GETweatherByCity = async (setIcon :React.Dispatch<React.SetStateAction<string>>, setTemperature: React.Dispatch<React.SetStateAction<number>>, cityCopy: string) => {
   const API_KEY = import.meta.env.VITE_API_KEY;
   let countryName;
   await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityCopy}&appid=${API_KEY}&units=metric&lang={FR}`)
      .then((response) => {
         countryName = response.data.sys.country;
         console.log(response.data.sys.country);
      })
      .catch(function (error) {
          console.log(error);
      });
   await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityCopy},${countryName}&appid=${API_KEY}&units=metric&lang={FR}`)
      .then((response) => {
         console.log(response.data);
          setTemperature(Math.round(response.data.main.temp));
          setIcon(response.data.weather[0].icon);
      })
      .catch(function (error) {
          console.log(error);
      });
  
};

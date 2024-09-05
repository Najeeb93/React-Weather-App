import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Search from "./components/Search";
import Result from "./components/Result";

function App() {
  const [search, setSearch] = useState("");
  const [weather, SetWeather] = useState([]);

  const changeSearch = (value) => {
    setSearch(value);
  };

  const searchWeatherHandler = () => {
    if (search !== "") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1f136667cfcdb418bf8b7a4c5a542f00&units=metric`
      )
        .then((res) => res.json())
        .then((res) => {
          SetWeather(res);
        });
    }
  };
  // useEffect(() => {
  //   if(search !== ""){
  //     searchWeatherHandler();
  //   }

  // }, [search])

  // console.log("outside-->", weather);

  return (
    <div className="max-w-[1240px] mx-auto mt-2 p-3 ">
      <Search
        searchData={search}
        eventHandler={changeSearch}
        searchWeather={searchWeatherHandler}
      />
      <Result weatherData={weather} />
    </div>
  );
}

export default App;

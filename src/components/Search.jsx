import { useRef } from "react";

function Search(props) {
  const searchInput = useRef();
  return (
    <div>
      <div className="w-full  mb-9 text-1xl shadow-md shadow-slate-500"><h1>Weather App</h1></div>
    <div className="flex shadow-xl">
      <input
        type="search"
        value={props.searchData}
        className="border border-black w-full p-3 text-2xl rounded-md"
        onChange={() => props.eventHandler(searchInput.current.value)}
        ref={searchInput}
      />
      <button
        onClick={props.searchWeather}
        className="p-3  bg-neutral-400 text-white"
      >
        Search
      </button>
    </div>
    </div>
  );
}

export default Search;

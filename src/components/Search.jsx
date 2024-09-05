import { useRef } from "react";

function Search(props) {
  const searchInput = useRef();
  return (
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
  );
}

export default Search;

function Result({ weatherData }) {
  return (
    <div className="shadow-xl mt-5 p-2">
      {weatherData !== undefined ? (
        <>
          <h2 className="text-4xl">{weatherData?.name}</h2>
          <div className="text-2xl flex justify-around gap-3 my-2">
            <div className="border p-2 rounded shadow">
              Max Temp :{" "}
              <span className="text-red-500">
                {weatherData?.main?.temp_max}
              </span>{" "}
              deg
            </div>
            <div className="border p-2 rounded shadow">
              Min Temp :{" "}
              <span className="text-red-500">
                {weatherData?.main?.temp_min}
              </span>{" "}
              deg
            </div>
          </div>
          <div className="flex justify-around my-2">
            <div>Icon</div>
            <div>Weather Type</div>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-2xl">Please enter the city name</h3>
        </>
      )}
    </div>
  );
}

export default Result;

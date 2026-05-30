import { weatherProps } from "../Types/weather";
const Weather = ({ data }: weatherProps) => {
  return (
    // data.city  ?
    // (
    //     <div>
    //         <p>Temperature: {data.temperature}</p>
    //         <p>City: {data.city}</p>
    //         <p>Country: {data.country}</p>
    //         <p>Humidity: {data.humidity}</p>
    //         <p>Description: {data.description}</p>
    //     </div>
    // )
    // :(
    //     <div>
    //         <p>{data.error}</p>
    //     </div>
    // )
    <div className="w-full text-left mt-6 flex flex-col space-y-4 focus:border-t border-white/10 pt-5">
      {data.city && (
        <>
          <p className="flex justify-between items-center border-b border-white/5 pb-2">
            <span className="text-gray-400 text-s uppercase tracking-wider font-medium">
              Temperature:
            </span>
            <span className="text-gray-400 text-base font-semibold">
              {data.temperature}
            </span>
          </p>
          <p className="flex justify-between items-center border-b border-white/5 pb-2">
            <span className="text-gray-400 text-s uppercase tracking-wider font-medium">
              City:
            </span>
            <span className="text-gray-400 text-base font-semibold">
              {data.city}
            </span>
          </p>
          <p className="flex justify-between items-center border-b border-white/5 pb-2">
            <span className="text-gray-400 text-s uppercase tracking-wider font-medium">
              Country:
            </span>
            <span className="text-gray-400 text-base font-semibold">
              {data.country}
            </span>
          </p>
          <p className="flex justify-between items-center border-b border-white/5 pb-2">
            <span className="text-gray-400 text-s uppercase tracking-wider font-medium">
              Humidity:
            </span>
            <span className="text-gray-400 text-base font-semibold">
              {data.humidity}
            </span>
          </p>
          <p className="flex justify-between items-center border-b border-white/5 pb-2">
            <span className="text-gray-400 text-s uppercase tracking-wider font-medium">
              Description:
            </span>
            <span className="text-gray-400 text-base font-semibold">
              {data.description}
            </span>
          </p>
        </>
      )}
      {data.error && (
        <p className="text-red-400 text-sm font-medium text-center bg-red-900/20 p-2.5 rounded border border-red-500/20 mt-2">
          {data.error}
        </p>
      )}
    </div>
  );
};
export default Weather;

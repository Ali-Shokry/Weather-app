import { weatherProps } from "../types/weather";
import { APP_TEXT } from "../utils";
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
      {data?.city && (
        <>
          <p className="flex justify-between items-center border-b border-white/5 pb-2">
            <span className="text-gray-400 text-s uppercase tracking-wider font-medium">
              {APP_TEXT.temperature}
            </span>
            <span className="text-gray-400 text-base font-semibold">
              {data?.temperature}
            </span>
          </p>
          <p className="flex justify-between items-center border-b border-white/5 pb-2">
            <span className="text-gray-400 text-s uppercase tracking-wider font-medium">
              {APP_TEXT.city}
            </span>
            <span className="text-gray-400 text-base font-semibold">
              {data?.city}
            </span>
          </p>
          <p className="flex justify-between items-center border-b border-white/5 pb-2">
            <span className="text-gray-400 text-s uppercase tracking-wider font-medium">
              {APP_TEXT.country}
            </span>
            <span className="text-gray-400 text-base font-semibold">
              {data?.country}
            </span>
          </p>
          <p className="flex justify-between items-center border-b border-white/5 pb-2">
            <span className="text-gray-400 text-s uppercase tracking-wider font-medium">
              {APP_TEXT.humidity}
            </span>
            <span className="text-gray-400 text-base font-semibold">
              {data?.humidity}
            </span>
          </p>
          <p className="flex justify-between items-center border-b border-white/5 pb-2">
            <span className="text-gray-400 text-s uppercase tracking-wider font-medium">
              {APP_TEXT.description}
            </span>
            <span className="text-gray-400 text-base font-semibold">
              {data?.description}
            </span>
          </p>
        </>
      )}
      {data?.error && (
        <p className="text-red-400 text-sm font-medium text-center bg-red-900/20 p-2.5 rounded border border-red-500/20 mt-2">
          {data?.error}
        </p>
      )}
    </div>
  );
};
export default Weather;

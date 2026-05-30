// Weather app using function component and custom hooks and tailwind css in styling (ts,npm vite{new method of react app creation })
import Form from "./components/FormComp";
import Weather from "./components/WeatheCompr";
import { useWeather } from "./hooks/UseWeather";

const App = () => {
  const { weatherData, fetchWeather, resetData } = useWeather();
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const city = (target.elements.namedItem("city") as HTMLInputElement).value;
    const country = (target.elements.namedItem("country") as HTMLInputElement)
      .value;
    fetchWeather(city, country);
  };
  const handleReset = ()=> {
    resetData();
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-[#797979] to-[#58b0aa] p-4">
      <div className="w-95 min-h-137.5 bg-[#2C4A47] rounded-sm p-8 shadow-2xl flex flex-col justify-center">
        <Form getWeather={getWeather} handleReset={handleReset}/>
        <Weather data={weatherData} />
      </div>
    </div>
  );
};
export default App;

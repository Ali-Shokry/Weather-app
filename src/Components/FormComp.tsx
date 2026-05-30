import { formProps } from "../types/weather";
import { APP_TEXT } from "../utils";
const Form = ({ getWeather, handleReset }: formProps) => {
  return (
    <form
      onSubmit={getWeather}
      className="flex flex-col space-y-6 w-full text-left"
    >
      <input
        type="text"
        name="city"
        placeholder={APP_TEXT.cityPlaceholder}
        className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-400/70 pb-2 pt-1 text-base focus:outline-none focus:border-white transition-colors"
        autoFocus
      />
      <input
        type="text"
        name="country"
        placeholder={APP_TEXT.countryPlaceholder}
        className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-400/70 pb-2 pt-1 text-base focus:outline-none focus:border-white transition-colors"
      />
      <div className="flex items-baseline justify-between w-full pt-4">
        <button className="bg-[#1A1A1A] text-white text-sm font-medium tracking-wide h-10 px-6 border border-transparent active:scale-95 transition-all cursor-pointer flex items-center justify-center">
          {APP_TEXT.getWeatherBtn}
        </button>
        <button
          type="reset"
          className="border border-white/10 text-gray-400 text-[13.5px] font-medium uppercase tracking-wider h-10 px-6 rounded-sm hover:bg-white/5 hover:text-white active:scale-95 transition-all cursor-pointer flex items-center justify-center"
          onClick={handleReset}>
          {APP_TEXT.resetBtn}
        </button>
      </div>
    </form>
  );
};
export default Form;

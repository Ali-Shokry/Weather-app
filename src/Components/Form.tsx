import { formProps } from "../Types/weather";
const Form = ({ getWeather }: formProps) => {
  return (
    <form
      onSubmit={getWeather}
      className="flex flex-col space-y-6 w-full text-left"
    >
      <input
        type="text"
        name="city"
        placeholder="City..."
        className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-400/70 pb-2 pt-1 text-base focus:outline-none focus:border-white transition-colors"
        autoFocus
      />
      <input
        type="text"
        name="country"
        placeholder="Country..."
        className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-400/70 pb-2 pt-1 text-base focus:outline-none focus:border-white transition-colors"
      />
      <button className="bg-[#1A1A1A] text-white text-sm font-medium tracking-wide py-2 px-5 border border-transparent active:scale-95 transition-all self-start mt-2">
        Get Weather
      </button>
    </form>
  );
};
export default Form;

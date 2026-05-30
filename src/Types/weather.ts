export interface weatherDataType {
    temperature: number | string;
    city: string;
    country: string;
    humidity: number | string;
    description: string;
    error: string;
};
export interface weatherProps {
    data: weatherDataType;
};
export interface formProps {
    getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
    handleReset: ()=> void;
};
export interface ApiResponse {
    main: {
        temp: number;
        humidity: number;
    };
    name: string;
    sys: {
        country: string;
    };
    weather: Array<{
        description: string;
    }>;
}
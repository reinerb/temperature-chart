export type DailyWeatherEntry = {
  date: string;
  temperature: number;
};

export type MonthlyWeatherEntry = {
  month: string;
  year: string;
  dailyData: DailyWeatherEntry[];
};

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type DateRange = {
  start: string;
  end: string;
};

export type DailyWeatherEntry = {
  date: string;
  temperature: number;
};

export type MonthlyWeatherEntry = {
  month: string;
  year: string;
  dailyData: DailyWeatherEntry[];
};

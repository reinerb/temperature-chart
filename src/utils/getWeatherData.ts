import moment from "moment";
import { MonthlyWeatherEntry, DailyWeatherEntry } from "./types";

export const getWeatherData = async (
  lat: number,
  long: number,
  startDate: string,
  endDate: string,
  celsius: boolean = false,
) => {
  const start = moment(startDate).format("YYYY-MM-DD");
  const end = moment(endDate).format("YYYY-MM-DD");

  const data = await fetch(
    `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${long}&start_date=${start}&end_date=${end}&daily=temperature_2m_max&temperature_unit=${
      celsius ? "celsius" : "fahrenheit"
    }&timezone=America%2FNew_York`,
    { method: "GET" },
  )
    .then((response) => response.json())
    .then((response) => {
      const dailyWeather: DailyWeatherEntry[] = [];

      for (let i = 0; i < response.daily.temperature_2m_max.length; i++) {
        dailyWeather.push({
          date: response.daily.time[i],
          temperature: Math.round(response.daily.temperature_2m_max[i]),
        });
      }

      return dailyWeather;
    })
    .then((response) => {
      const monthlyData: MonthlyWeatherEntry[] = [];
      let dataCopy = [...response];
      let thisMonth;
      let thisMonthData;

      while (dataCopy.length > 0) {
        thisMonthData = dataCopy.filter(
          (element) =>
            moment(element.date).format("M") ===
            moment(dataCopy[0].date).format("M"),
        );
        thisMonth = moment(thisMonthData[0].date);

        monthlyData.push({
          month: thisMonth.format("MMMM"),
          year: thisMonth.format("YYYY"),
          dailyData: thisMonthData,
        });

        dataCopy = dataCopy.filter(
          (element) =>
            moment(element.date).format("M") !==
            moment(dataCopy[0].date).format("M"),
        );
      }

      return monthlyData;
    });

  return data;
};

import { useEffect, useState } from "react";
import Day from "./components/Day";
import Month from "./components/Month";
import MonthGrid from "./components/MonthGrid";
import { getWeatherData } from "./utils/getWeatherData";
import { MonthlyWeatherEntry } from "./utils/types";
import moment from "moment";

function App() {
  const [weatherData, setWeatherData] = useState<MonthlyWeatherEntry[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherQuery = await getWeatherData(
          42.4334,
          -71.4495,
          "2023-01-01",
          "2023-08-03",
        );

        setWeatherData(weatherQuery);
        console.log(weatherQuery);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
    <MonthGrid celsius={false}>
      {weatherData &&
        weatherData.map((element) => (
          <Month month={element.month} year={element.year}>
            {(offset: number) =>
              element.dailyData.map((element, index) => (
                <Day
                  day={moment(element.date).format("D")}
                  temperature={element.temperature}
                  celsius={false}
                  weekday={((offset + index) % 7) + 1}
                />
              ))
            }
          </Month>
        ))}
    </MonthGrid>
  );
}

export default App;

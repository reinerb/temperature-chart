import { useEffect, useState } from "react";
import Day from "./components/Day";
import Month from "./components/Month";
import MonthGrid from "./components/MonthGrid";
import { getWeatherData } from "./utils/getWeatherData";
import { Coordinates, DateRange, MonthlyWeatherEntry } from "./utils/types";
import moment from "moment";
import { SyncLoader } from "react-spinners";

function App() {
  const [weatherData, setWeatherData] = useState<MonthlyWeatherEntry[]>();
  const [coordinates, setCoordinates] = useState<Coordinates>({
    latitude: 42.4334,
    longitude: -71.4495,
  });
  const [dateRange, setDateRange] = useState<DateRange>({
    start: `${moment().format("YYYY")}-01-01`,
    end: moment().format("YYYY-MM-DD"),
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherQuery = await getWeatherData(
          coordinates.latitude,
          coordinates.longitude,
          dateRange.start,
          dateRange.end,
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
    <>
      {weatherData ? (
        <MonthGrid celsius={false}>
          {weatherData.map((element) => (
            <Month
              key={`${element.month} ${element.year}`}
              month={element.month}
              year={element.year}
            >
              {(offset: number) =>
                element.dailyData.map((element, index) => (
                  <Day
                    key={element.date}
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
      ) : (
        <main className="flex min-h-screen items-center justify-center">
          <SyncLoader color="teal" />
        </main>
      )}
    </>
  );
}

export default App;

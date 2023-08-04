import Day from "./components/Day";
import Month from "./components/Month";
import MonthGrid from "./components/MonthGrid";

// const testTempData: number[] = [
//   82, 75, 79, 76, 90, 92, 90, 89, 83, 72, 88, 93, 88, 80, 89, 77, 88, 84, 83,
//   86, 77, 81, 86, 86, 80, 87, 90, 90, 86, 77, 82,
// ];

const generateTemps = (n: number, min: number, max: number) => {
  const temps = [];
  for (let i = 0; i < n; i++) {
    temps.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return temps;
};

interface TestTempData {
  month: string;
  offset: number;
  temperatures: number[];
}

const testTempData: TestTempData[] = [
  { month: "January", offset: 0, temperatures: generateTemps(31, 0, 40) },
  { month: "February", offset: 3, temperatures: generateTemps(28, -10, 40) },
  { month: "March", offset: 3, temperatures: generateTemps(31, 20, 50) },
  { month: "April", offset: 6, temperatures: generateTemps(30, 40, 60) },
  { month: "May", offset: 1, temperatures: generateTemps(31, 50, 70) },
  { month: "June", offset: 4, temperatures: generateTemps(30, 60, 80) },
  { month: "July", offset: 6, temperatures: generateTemps(31, 60, 100) },
  { month: "August", offset: 2, temperatures: generateTemps(31, 70, 100) },
];

function App() {
  return (
    <MonthGrid celsius={false}>
      {testTempData.map((element) => (
        <Month month={element.month} offset={element.offset}>
          {(offset: number) =>
            element.temperatures.map((element, index) => (
              <Day
                day={index + 1}
                temperature={element}
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

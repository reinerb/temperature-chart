import Day from './components/Day';
import Month from './components/Month';

const testTempData: number[] = [
  82, 75, 79, 76, 90, 92, 90, 89, 83, 72, 88, 93, 88, 80, 89, 77, 88, 84, 83,
  86, 77, 81, 86, 86, 80, 87, 90, 90, 86, 77, 82,
];

function App() {
  return (
    <Month>
      {testTempData.map((element, index) => (
        <Day
          month='July'
          day={index + 1}
          temperature={element}
          celsius={false}
        />
      ))}
    </Month>
  );
}

export default App;

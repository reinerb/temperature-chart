interface Props {
  day: number;
  temperature: number;
  celsius: boolean;
  weekday: number;
}

const getTemperatureStyles = (temperature: number) => {
  if (temperature >= 100) {
    return "bg-red-900 text-white";
  } else if (temperature >= 90) {
    return "bg-red-600 text-white";
  } else if (temperature >= 80) {
    return "bg-orange-600 text-white";
  } else if (temperature >= 70) {
    return "bg-amber-500 text-white";
  } else if (temperature >= 60) {
    return "bg-green-800 text-white";
  } else if (temperature >= 50) {
    return "bg-teal-600 text-white";
  } else if (temperature >= 33) {
    return "bg-blue-600 text-white";
  } else if (temperature >= 16) {
    return "bg-violet-700 text-white";
  } else {
    return "bg-purple-600 text-white";
  }
};

function Day({ day, temperature, celsius, weekday }: Props) {
  return (
    <div
      className={`h-14 w-14  ${getTemperatureStyles(temperature)} text-white ${
        day === 1 && `col-start-${weekday}`
      }`}
    >
      <div className="m-auto flex cursor-pointer flex-col items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
        <p className="text-xl">{day}</p>
        <p className="text-l font-bold">{`${temperature}°${
          celsius ? "C" : "F"
        }`}</p>
      </div>
    </div>
  );
}

export default Day;

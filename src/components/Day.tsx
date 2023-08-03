interface Props {
  month: string;
  day: number;
  temperature: number;
  celsius: boolean;
}

function Day({ month, day, temperature, celsius }: Props) {
  return (
    <div className="flex h-24 w-24 flex-col items-center justify-center">
      <p>{month}</p>
      <p>{day}</p>
      <p>{`${temperature}°${celsius ? "C" : "F"}`}</p>
    </div>
  );
}

export default Day;

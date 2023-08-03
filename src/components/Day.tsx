interface Props {
  day: number;
  temperature: number;
  celsius: boolean;
}

function Day({ day, temperature, celsius }: Props) {
  return (
    <div className="flex h-14 w-14 flex-col items-center justify-center bg-slate-900 text-white">
      <p>{day}</p>
      <p>{`${temperature}°${celsius ? "C" : "F"}`}</p>
    </div>
  );
}

export default Day;

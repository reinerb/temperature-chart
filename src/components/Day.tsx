import React from 'react';

interface Props {
  month: string;
  day: number;
  temperature: number;
  celsius: boolean;
}

function Day({ month, day, temperature, celsius }: Props) {
  return (
    <div>
      <p>{month}</p>
      <p>{day}</p>
      <p>{`${temperature}°${celsius ? 'C' : 'F'}`}</p>
    </div>
  );
}

export default Day;

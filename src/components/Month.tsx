import React from "react";
import { weekdaysFirstLetter } from "../utils/weekdays";

interface Props {
  month: string;
  offset: number;
  children: (offset: number) => React.ReactNode;
}

function Month({ month, offset, children }: Props) {
  return (
    <section className="grid w-fit grid-flow-row auto-rows-min grid-cols-week gap-1">
      <h2 className="col-span-full text-center text-xl font-bold">{month}</h2>
      {weekdaysFirstLetter.map((element) => (
        <div className="mx-auto">{element}</div>
      ))}
      {children(offset)}
    </section>
  );
}

export default Month;

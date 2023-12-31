import React from "react";
import moment from "moment";
import { weekdaysFirstLetter } from "../utils/weekdays";

interface Props {
  key: string;
  month: string;
  year: string;
  children: (offset: number) => React.ReactNode;
}

function Month({ month, year, children }: Props) {
  const offset = parseInt(moment(`${month} 1, ${year}`).format("d"));

  return (
    <section className="grid w-fit grid-flow-row auto-rows-min grid-cols-week-xs gap-1 sm:grid-cols-week-sm">
      <h2 className="col-span-full text-center text-xl font-bold">{`${month} ${year}`}</h2>
      {weekdaysFirstLetter.map((element) => (
        <div className="mx-auto">{element}</div>
      ))}
      {children(offset)}
    </section>
  );
}

export default Month;

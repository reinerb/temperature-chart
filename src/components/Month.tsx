import React from "react";
import { weekdaysFirstLetter } from "../utils/weekdays";

interface Props {
  month: string;
  children: React.ReactNode;
}

function Month({ month, children }: Props) {
  return (
    <section className="grid w-fit grid-cols-week gap-1">
      <div className="col-span-7">{month}</div>
      {weekdaysFirstLetter.map((element) => (
        <div className="mx-auto">{element}</div>
      ))}
      {children}
    </section>
  );
}

export default Month;

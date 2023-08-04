import React from "react";

interface Props {
  celsius: boolean;
  children: React.ReactNode;
}

function MonthGrid({ children }: Props) {
  return (
    <main className="mx-auto my-auto grid min-h-screen max-w-screen-2xl grid-cols-month-grid-1 justify-center gap-8 lg:grid-cols-month-grid-2 xl:grid-cols-month-grid-3">
      {children}
    </main>
  );
}

export default MonthGrid;

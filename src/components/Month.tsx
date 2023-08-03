import React from "react";

interface Props {
  children: React.ReactNode;
}

function Month({ children }: Props) {
  return <section className="grid-cols-week grid">{children}</section>;
}

export default Month;

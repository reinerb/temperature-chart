import React from 'react';

interface Props {
  children: React.ReactNode;
}

function Month({ children }: Props) {
  return <section>{children}</section>;
}

export default Month;

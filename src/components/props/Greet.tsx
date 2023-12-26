import React from "react";
import Heading from "./Heading";

const Greet = ({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <Heading>This is heading</Heading>
      <div>Hello {name}</div>
      {children}
      <hr />
    </div>
  );
};

export default Greet;

import React from "react";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  id?: number;
};

const Button = ({ handleClick, id }: ButtonProps) => {
  return <button onClick={handleClick}>Click Me</button>;
};

export default Button;

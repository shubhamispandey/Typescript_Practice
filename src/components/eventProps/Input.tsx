import React from "react";

type InputProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ handleChange }: InputProps) => {
  // ! Even function can be defined inside without explicitly passing the props
  /* 
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    console.log(event);
 */
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <hr />
    </div>
  );
};

export default Input;

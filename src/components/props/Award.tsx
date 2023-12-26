import React from "react";

type awardProp = {
  award: "Gold" | "Silver" | "Bronze";
};

const Award = ({ award }: awardProp) => {
  return <div>You won {award}</div>;
};

export default Award;

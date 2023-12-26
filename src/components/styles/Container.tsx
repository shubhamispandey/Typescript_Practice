import React from "react";

type cssProps = { styles: React.CSSProperties };

const Container = ({ styles }: cssProps) => {
  return <div style={styles}>Container</div>;
};

export default Container;

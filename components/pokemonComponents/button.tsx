"use client";
const Button = ({
  name,
  click,
}: {
  name: string;
  click: React.MouseEventHandler;
}) => {
  return <button onClick={click}>{name}</button>;
};

export default Button;

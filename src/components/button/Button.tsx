import { useEffect, useState } from "react";

interface ButtonProps {
  colour?: string;
}

const defaultButtonStyle = { height: "50px", width: "150px", border: 0 };

const Button = (props: ButtonProps) => {
  const [style, setStyle] = useState(defaultButtonStyle);

  const { colour } = props;

  useEffect(() => {
    setStyle((s) => ({ ...s, backgroundColor: colour }));
  }, [colour]);

  return (
    <>
      <button style={style} />
    </>
  );
};

export default Button;

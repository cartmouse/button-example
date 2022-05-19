import { CSSProperties, useEffect, useState } from "react";

interface ButtonProps {
  progressToClick: number;
  onClick: () => void;
  colour?: string;
}

interface customCSS extends CSSProperties {
  "--left-width"?: string;
  "--left-height"?: string;
  "--right-width"?: string;
  "--right-height"?: string;
  "--border-style"?: string;
}

const defaultButtonStyle: customCSS = {
  height: "50px",
  width: "100px",
  border: 0,
  borderTopLeftRadius: "10px",
  borderBottomRightRadius: "10px",
  backgroundColor: "#d5f4e6",
  transition: "all 0.2s",
  "--left-width": "10px",
  "--left-height": "10px",
  "--right-width": "10px",
  "--right-height": "10px",
  "--border-style": "0",
};

const Button = (props: ButtonProps) => {
  const [style, setStyle] = useState(defaultButtonStyle);
  const { colour, progressToClick, onClick } = props;

  useEffect(() => {
    if (colour) {
      setStyle((s) => ({ ...s, backgroundColor: colour }));
    }
  }, [colour]);

  const mouseEvents = {
    onMouseEnter: () => {
      setStyle((s) => ({ ...s, transform: "scale(1.1)" }));
    },

    onMouseLeave: () => {
      setStyle((s) => ({ ...s, transform: "scale(1)" }));
    },
  };

  useEffect(() => {
    if (progressToClick == 0) {
      setStyle((s) => ({
        ...s,
        "--border-style": "0",
      }));
      return;
    }

    setStyle((s) => ({
      ...s,
      "--left-width": `${progressToClick * 100 - 3}%`,
      "--right-width": `${progressToClick * 100 - 3}%`,
      "--left-height": `${progressToClick * 100 - 6}%`,
      "--right-height": `${progressToClick * 100 - 6}%`,
      "--border-style": "solid",
    }));
  }, [progressToClick]);

  return (
    <div
      className="button"
      style={style}
      {...mouseEvents}
      onClick={() => onClick()}
    />
  );
};

export default Button;

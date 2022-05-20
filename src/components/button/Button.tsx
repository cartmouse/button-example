import { CSSProperties, useEffect, useState } from "react";

interface ButtonProps {
  progressToClick: number;
  clickCallback: (args: any[] | any) => void;
  simulateTouchFree?: () => void;
  colour?: string;
}

interface customCSS extends CSSProperties {
  "--left-width"?: string;
  "--left-height"?: string;
  "--right-width"?: string;
  "--right-height"?: string;
  "--border-style"?: string;
}

let defaultButtonStyle: customCSS = {
  height: "50px",
  width: "100px",
  border: 0,
  borderTopLeftRadius: "10px",
  borderBottomRightRadius: "10px",
  transition: "all 0.2s",
  "--left-width": "97px",
  "--left-height": "44px",
  "--right-width": "97px",
  "--right-height": "44px",
  "--border-style": "3px solid white",
};

const Button = (props: ButtonProps) => {
  const [style, setStyle] = useState(defaultButtonStyle);
  const { colour, progressToClick, clickCallback, simulateTouchFree } = props;
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (colour) {
      setStyle((s) => ({ ...s, backgroundColor: colour }));
    }
  }, [colour]);

  const mouseEvents = {
    onMouseEnter: () => {
      setIsMouseOver(true);
      setStyle((s) => ({ ...s, transform: "scale(1.2)" }));
    },

    onMouseLeave: () => {
      setIsMouseOver(false);
      setStyle((s) => ({
        ...defaultButtonStyle,
        backgroundColor: colour,
        transform: "scale(1)",
      }));
    },
  };

  useEffect(() => {
    if (progressToClick === 0) {
      setStyle((s) => ({
        ...defaultButtonStyle,
        backgroundColor: colour,
      }));
      return;
    }

    if (!isMouseOver) {
      setStyle((s) => ({
        ...defaultButtonStyle,
        backgroundColor: colour,
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

    if (progressToClick >= 1) {
      clickCallback(colour);
    }
  }, [progressToClick]);

  const onClick = () => {
    if (simulateTouchFree) {
      simulateTouchFree();
    }
  };

  return (
    <div className="button" style={style} {...mouseEvents} onClick={onClick} />
  );
};

export default Button;

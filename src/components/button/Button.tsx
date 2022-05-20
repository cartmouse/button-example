import { useEffect, useState } from "react";
import { ButtonProps, defaultButtonStyle } from "./types";

export default function Button(props: ButtonProps) {
  const { colour, progressToClick, clickCallback, simulateTouchFree } = props;

  // ================================= States =================================
  const [style, setStyle] = useState(defaultButtonStyle);
  const [isMouseOver, setIsMouseOver] = useState(false);

  // ============================= Event Handlers =============================
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

  const onClick = () => {
    if (simulateTouchFree) {
      simulateTouchFree();
    }
  };

  // ================================ Effects ================================
  useEffect(() => {
    if (colour) {
      setStyle((s) => ({ ...s, backgroundColor: colour }));
    }
  }, [colour]);

  useEffect(() => {
    if (progressToClick === 0 || !isMouseOver) {
      setStyle({
        ...defaultButtonStyle,
        backgroundColor: colour,
      });
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
    // eslint-disable-next-line
  }, [progressToClick]);

  return (
    <div className="button" style={style} {...mouseEvents} onClick={onClick} />
  );
}

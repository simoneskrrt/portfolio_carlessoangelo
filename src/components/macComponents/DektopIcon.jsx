import { useEffect, useState } from "react";

export const DesktopIcon = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [toDisplay, setToDisplay] = useState(false);

  useEffect(() => {
    addEventListener("click", (event) => {
      if (
        !document
          .getElementsByClassName("desktop-icon")
          [props.numberIcon].contains(event.target)
      ) {
        setIsClicked(false);
      }
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: isClicked ? "deepskyblue" : "transparent",
        color: props.color ? "white" : "black",
      }}
      className="desktop-icon"
      onClick={() => {
        if (isClicked && toDisplay) {
          setIsClicked(false);
          props.setIsShown(true);
        } else {
          setIsClicked(true);
          setToDisplay(true);
          setTimeout(() => setToDisplay(false), 500);
        }
      }}
    >
      <img src={props.imageSource} />
      <p>{props.name}</p>
    </div>
  );
};

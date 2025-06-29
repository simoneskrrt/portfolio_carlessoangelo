import { useRef } from "react";
import Draggable from "react-draggable";

import "../../styles/screen.css";

export const Window = (props) => {
  return (
    <Draggable
      defaultPosition={{x: 135, y: -185}}
      bounds={{ left: 0, top: -320, right: 494, bottom: -135 }}
      cancel=".cancel"
    >
      <div
        className="window"
        style={{
          backgroundColor: props.color ? "#38383A" : "#dfe3f1",
          display: props.isShown == true ? "inline" : "none",
        }}
      >
        <div className="window-topbar" /* onMouseMove={handleMouseOver} */>
          <div className="state-icons">
            <div
              style={{ backgroundColor: "#FF595B" }}
              onClick={() => props.setIsShown(false)}
            />
            <div style={{ backgroundColor: "#FCC023" }} />
            <div style={{ backgroundColor: "#24C941" }} />
          </div>
          <p style={{ color: props.color ? "white" : "black" }}>
            {props.name}
          </p>
        </div>
        <div className="cancel">{props.Component}</div>
      </div>
    </Draggable>
  );
};

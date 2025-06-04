import { useState } from "react";

export const Header = (props) => {
  const handleMouseDown = (event) => {
    event.target.className = "clicked-background";
  };

  const handleMouseUp = (event) => {
    event.target.className = "";
  };

  const getDate = () => {
    let result =
      new Date()
        .toLocaleDateString("it", { weekday: "long" })
        .charAt(0)
        .toUpperCase() +
      new Date().toLocaleDateString("it", { weekday: "long" }).charAt(1) +
      new Date().toLocaleDateString("it", { weekday: "long" }).charAt(2) +
      " ";

    result += new Date().getDate() + " ";

    switch (new Date().getMonth()) {
      case 0:
        result += "gen";
        break;
      case 1:
        result += "feb";
        break;
      case 2:
        result += "mar";
        break;
      case 3:
        result += "apr";
        break;
      case 4:
        result += "mag";
        break;
      case 5:
        result += "giu";
        break;
      case 6:
        result += "lug";
        break;
      case 7:
        result += "ago";
        break;
      case 8:
        result += "set";
        break;
      case 9:
        result += "ott";
        break;
      case 10:
        result += "nov";
        break;
      case 11:
        result += "dic";
        break;
    }

    return result;
  };

  const getHour = () => {
    let result = "";

    if (new Date().getHours().toString().length == 1) {
      result += "0" + new Date().getHours() + ":";
    } else {
      result += new Date().getHours() + ":";
    }

    if (new Date().getMinutes().toString().length == 1) {
      result += "0" + new Date().getMinutes() + ":";
    } else {
      result += new Date().getMinutes() + ":";
    }

    if (new Date().getSeconds().toString().length == 1) {
      result += "0" + new Date().getSeconds();
    } else {
      result += new Date().getSeconds();
    }

    return result;
  };

  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  setInterval(() => {
    setDate(getDate());
    setHour(getHour());
  }, 1000);

  return (
    <div className="header" style={{color: props.color ? "white" : "black", backgroundColor: props.color ? "#38383A" : "#dfe3f1"}}>
      <div className="header-left">
        <svg
          fill={props.color ? "#FFFFFF" : "#000000"}
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 22.773 22.773"
          xmlSpace="preserve"
        >
          <g strokeWidth={0}></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"></path>
          <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"></path>
        </svg>
        <div
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          style={{ fontWeight: 500 }}
        >
          Finder
        </div>
        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
          File
        </div>
        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
          Modifica
        </div>
        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
          Vista
        </div>
        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
          Vai
        </div>
        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
          Finestra
        </div>
        <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
          Aiuto
        </div>
      </div>
      <div
        className="header-right"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {date + " " + hour}
      </div>
    </div>
  );
};

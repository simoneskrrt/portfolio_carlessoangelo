import { useState } from "react";

const List = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="text-menu"
      style={{
        borderColor: props.color ? "#454547" : "black",
        fontSize: 13,
        fontFamily: props.changeFont ? props.title : "",
        backgroundColor: props.color ? "#454547" : "#d3d6e2 ",
      }}
    >
      <div onClick={() => setShow(!show)}>
        <p>{props.title}</p>
        <img src="src\assets\screen\list-icon.png" />
      </div>

      <ul style={{ display: show ? "block" : "none", paddingTop: "5px" }}>
        {props.params.map((value, key) => (
          <li
            key={key}
            style={{ fontFamily: props.changeFont ? value : "" }}
            onClick={() => {
              setShow(false);
              props.setter(value);
            }}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const TextEditor = (props) => {
  const [font, setFont] = useState("Helvetica");
  const [size, setSize] = useState(12);
  const [styleBold, setStyleBold] = useState(false);
  const [styleItalic, setStyleItalic] = useState(false);
  const [styleUnderline, setStyleUnderline] = useState(false);

  return (
    <div
      style={{
        color: props.color ? "white" : "black",
        position: "relative",
      }}
    >
      <div className="text-top">
        <List
          color={props.color}
          title={font}
          params={["Helvetica", "Times New Roman", "Calibri"]}
          setter={setFont}
          changeFont={true}
        />
        <List
          color={props.color}
          title={size}
          params={[
            8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
          ]}
          setter={setSize}
          changeFont={false}
        />
        <div style={{ display: "flex", gap: "0" }} className="font-style">
          <div
            style={{ borderRight: "1px solid #434345", paddingRight: "5px" }}
          >
            <p
              style={{
                fontWeight: 900,
                backgroundColor:
                  styleBold == true
                    ? props.color
                      ? "#919193"
                      : "#b3b3b3"
                    : "",
                padding: "0 3px",
                borderRadius: "15%",
              }}
              onClick={() => setStyleBold(!styleBold)}
            >
              B
            </p>
          </div>

          <div
            style={{
              borderRight: "1px solid #434345",
              paddingRight: "5px",
              paddingLeft: "5px",
            }}
          >
            <p
              style={{
                fontStyle: "Italic",
                backgroundColor:
                  styleItalic == true
                    ? props.color
                      ? "#919193"
                      : "#b3b3b3"
                    : "",
                padding: "0 4px",
                borderRadius: "15%",
              }}
              onClick={() => setStyleItalic(!styleItalic)}
            >
              I
            </p>
          </div>
          <p
            style={{
              textDecoration: "underline",
              backgroundColor:
                styleUnderline == true
                  ? props.color
                    ? "#919193"
                    : "#b3b3b3"
                  : "",
              marginLeft: "5px",
              padding: "0 3px",
              borderRadius: "15%",
            }}
            onClick={() => setStyleUnderline(!styleUnderline)}
          >
            U
          </p>
        </div>
      </div>
      <div
        className="text-content"
        style={{
          fontFamily: font,
          fontSize: size,
          fontWeight: styleBold == true ? "bold" : "",
          textDecorationLine: styleUnderline == true ? "underline" : "",
          fontStyle: styleItalic == true ? "italic" : "",
          height: "100%",
          backgroundColor: props.color ? "#1E1E1E" : "#FFFFFF"
        }}
      >
        <p style={{ width: "1066px", height: "600px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod
          tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut
          aliquid ex ea commodi consequatur. Duis aute irure reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint obcaecat cupiditat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

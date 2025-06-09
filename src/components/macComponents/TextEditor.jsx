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
        <img src="\assets\screen\list-icon.png" />
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
          backgroundColor: props.color ? "#1E1E1E" : "#FFFFFF",
        }}
      >
        <p style={{ width: "1066px", height: "600px" }}>
          Presentazione: <br/> Sono una persona solare, determinata e creativa.
          Durante il liceo scientifico ho sviluppato un approccio analitico che
          applico anche nei processi creativi. Ho scoperto nella produzione
          video il mezzo ideale per esprimermi e comunicare in modo efficace
          qualsiasi tipo di messaggio. Mi affascina il linguaggio visivo e
          desidero crescere in un contesto formativo dinamico, dove teoria e
          pratica si incontrano per dare forma alle idee. <br/> <br/> Istruzione e
          formazione: <br/> Diploma, Liceo Tito Lucrezio Caro di Cittadella <br/> Settembre
          2020 - Giugno 2025 <br/> Il percorso di studi superiori al Liceo delle
          Scienze Applicate mi ha dato l'opportunità di formare una mentalità
          analitica, logica e creativa, oltre ad essere stato per me un luogo
          estremamente stimolante, data la moltitudine di opportunità ed
          esperienze offerte. <br/> <br/> Esperienze lavorative: <br/> Stage presso Jonny Mole SRL
          (Luglio 2023 - Agosto 2023) <br/> L’agenzia di comunicazione è un ambiente
          che ho trovato essere estremamente creativo, dinamico e stimolante,
          specie per la possibilità che mi è stata data di partecipare fin da
          subito ai loro lavori. <br/> Stage presso Studio Due di Francesco Mansutti,
          Padova (Giugno 2022 - Ottobre 2022) <br/> L'opportunità di lavorare a
          stretto contatto con figure altamente specializzate del settore mi ha
          permesso di capire realmente cosa sia il mondo dell'audiovisione e
          come esso si interfacci con le grandi committenze, sia per gli aspetti
          negativi che quelli positivi. <br/> <br/>  Attività extracurricolari: <br/> Summer School
          presso Anica Academy, Palermo (Giugno 2023 - Luglio 2023) La
          partecipazione al campus Anica Acadamy Summer School, che ha avuto
          luogo in una delle sedi CSC, mi ha dato modo di restare a stretto
          contatto con gli studenti laureandi per tutta la durata del corso e
          capire realmente cosa vuol dire studiare presso il Centro Sperimentale
          di Cinematografia.
        </p>
      </div>
    </div>
  );
};

import "../../styles/screen.css";

export const IconToolBar = (props) => {
  return (
    <div style={{color: props.color ? "#505056" : "black"}}>
      <div className="iconToolBarImage">
        <img
          src={props.source}
          onClick={() => props.setIsShown(!props.isShown)}
        />
      </div>
      {props.finder ? <p>&#x2022;</p> : props.isShown && <p>&#x2022;</p>}
    </div>
  );
};

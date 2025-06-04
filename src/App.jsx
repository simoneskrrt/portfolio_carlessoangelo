import { useState, useEffect, useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

import { DeskGroup } from "./components/DeskGroup";

import "./styles/App.css";

const Rig = (props) => {
  const { camera, pointer } = useThree();
  const vec = new Vector3();
  const modifierPosition = 0.2;

  return useFrame(() => {
    const deltaYPosition = camera.position.y + pointer.y * modifierPosition;
    const deltaXPosition = camera.position.z + pointer.x * modifierPosition;

    if (props.clicked.current == "far") {
      if (
        deltaYPosition < 120 &&
        deltaYPosition > 35 &&
        deltaXPosition < 120 &&
        deltaXPosition > 35
      )
        camera.position.lerp(
          vec.set(camera.position.x, deltaYPosition, deltaXPosition),
          1
        );
    }
  });
};

function App() {
  const [dark, setDark] = useState(true);
  const clicked = useRef("far");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDark(true);
    } else {
      setDark(false);
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        event.matches ? setDark(true) : setDark(false);
      });
  }, []);

  return (
    <div style={{ width: window.innerWidth, height: window.innerHeight }}>
      <p id="type"></p>
      <Canvas camera={{ position: [-300, 90, 75] }}>
        <ambientLight intensity={10} args={[0xffffff]} />
        <DeskGroup dark={dark} clicked={clicked} />
        <Rig clicked={clicked} />
      </Canvas>
    </div>
  );
}

export default App;

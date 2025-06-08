import { useLoader, useThree } from "@react-three/fiber";
import { Box3, Vector3, Quaternion, Euler } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import { Screen } from "./Screen";

import "../styles/App.css";

export const DeskGroup = (props) => {
  const desk = useLoader(GLTFLoader, "desk/computer_desk.glb");
  desk.scene.scale.set(91, 70, 70);

  const boxDesk = new Box3().setFromObject(desk.scene);

  const imac = useLoader(GLTFLoader, "desk/mac.glb");
  imac.scene.scale.set(0.35, 0.35, 0.35);
  imac.scene.rotation.y = -Math.PI / 2;
  imac.scene.position.set(0, boxDesk.max.y, boxDesk.min.z * 0.5);

  const deskLight = useLoader(GLTFLoader, "desk/desk_light.glb");
  deskLight.scene.scale.set(0.315, 0.315, 0.315);
  deskLight.scene.position.set(
    boxDesk.max.x * 0.6,
    boxDesk.max.y,
    - boxDesk.max.z* 0.8
  );

  const { camera } = useThree();
  const vec = (window.innerWidth > window.innerHeight) ? new Vector3(0, 80, 5) : new Vector3(0, 80, window.innerWidth * 0.04);
  const quat = new Quaternion();
  const eul = new Euler(-Math.PI / 12, 0, 0)

  return (
    <group
      onClick={() => {
        props.clicked.current = "loading";
        let alpha = 0;

        let interval = setInterval(() => {
          camera.position.lerp(vec, alpha);
          camera.quaternion.slerp(
            quat.setFromEuler(eul),
            alpha
          );
          if (camera.position.y >= vec.y && camera.position.z >= vec.z && camera.rotation.x >= eul.x) {
            props.clicked.current = "near";
            clearInterval(interval);
          } else {
            alpha += 0.0001;
          }
        }, 10);
      }}
    >
      <primitive object={desk.scene} />
      <primitive object={imac.scene} />
      <primitive object={deskLight.scene} />
      <mesh
        position={[
          imac.scene.position.x,
          imac.scene.position.y + 22.54,
          imac.scene.position.z + 0.7,
        ]}
        rotation={[-Math.PI / 18, 0, 0]}
      >
        <Screen dark={props.dark} />
      </mesh>
    </group>
  );
};

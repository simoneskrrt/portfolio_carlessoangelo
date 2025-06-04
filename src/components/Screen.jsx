import { Html } from "@react-three/drei";
import { useState } from "react";

import { IconToolBar } from "./macComponents/IconToolBar";
import { Header } from "./macComponents/Header";
import { Window } from "./macComponents/Window";
import { TextEditor } from "./macComponents/TextEditor";
import { VideoPlayer } from "./macComponents/VideoPlayer";
import { DesktopIcon } from "./macComponents/DektopIcon";

import "../styles/screen.css";

export const Screen = (props) => {
  const [isShownTextEditor, setIsShownTextEditor] = useState(false);
  const [isShownVideoPlayer, setIsShownVideoPlayer] = useState(false);

  return (
    <Html className="html" occlude transform>
      <img
        className="wallpaper"
        src={
          props.dark
            ? "src/assets/screen/mac_wallpaper_dark.jpeg"
            : "src/assets/screen/mac_wallpaper_light.jpg"
        }
      />
      <Header color={props.dark} />
      <div className="container-grid">
        <DesktopIcon
          imageSource="src\assets\screen\text.png"
          name={"su di me.txt"}
          isShown={isShownTextEditor}
          setIsShown={setIsShownTextEditor}
          color={props.dark}
          numberIcon={0}
        />
        <DesktopIcon
          imageSource="src\assets\screen\video1.jpg"
          name={"video1.avi"}
          isShown={isShownVideoPlayer}
          setIsShown={setIsShownVideoPlayer}
          color={props.dark}
          numberIcon={1}
        />
      </div>
      <Window
        color={props.dark}
        name="su di me.txt"
        Component={<TextEditor color={props.dark} />}
        setIsShown={setIsShownTextEditor}
        isShown={isShownTextEditor}
      />
      <Window
        color={props.dark}
        name="video1.avi"
        Component={
          <VideoPlayer
            src="https://www.youtube.com/embed/N2ago2FZC_g"
            color={props.dark ? "white" : "#38383A"}
          />
        }
        setIsShown={setIsShownVideoPlayer}
        isShown={isShownVideoPlayer}
      />
      <div className="toolBar">
        <IconToolBar
          color={props.dark}
          source="src\assets\screen\finder.png"
          finder={true}
        />
        <IconToolBar
          color={props.dark}
          source="src\assets\screen\text-editor.png"
          isShown={isShownTextEditor}
          setIsShown={setIsShownTextEditor}
        />
        <IconToolBar
          color={props.dark}
          source="src\assets\screen\video1.jpg"
          isShown={isShownVideoPlayer}
          setIsShown={setIsShownVideoPlayer}
        />
        <IconToolBar source="src\assets\screen\bin.png" />
      </div>
    </Html>
  );
};

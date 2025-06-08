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
  const [isShownVideoPlayer1, setIsShownVideoPlayer1] = useState(false);
  const [isShownVideoPlayer2, setIsShownVideoPlayer2] = useState(false);
  const [isShownVideoPlayer3, setIsShownVideoPlayer3] = useState(false);

  return (
    <Html className="html" occlude transform>
      <img
        className="wallpaper"
        src={
          props.dark
            ? "/assets/screen/mac_wallpaper_dark.jpeg"
            : "/assets/screen/mac_wallpaper_light.jpg"
        }
      />
      <Header color={props.dark} />
      <div className="container-grid">
        <DesktopIcon
          imageSource="\assets\screen\text.png"
          name={"su di me.txt"}
          isShown={isShownTextEditor}
          setIsShown={setIsShownTextEditor}
          color={props.dark}
          numberIcon={0}
        />
        <DesktopIcon
          imageSource="\assets\screen\video1.jpg"
          name={"the medieval walls.avi"}
          isShown={isShownVideoPlayer1}
          setIsShown={setIsShownVideoPlayer1}
          color={props.dark}
          numberIcon={1}
        />
        <DesktopIcon
          imageSource="\assets\screen\video2.jpg"
          name={"flash mob.avi"}
          isShown={isShownVideoPlayer2}
          setIsShown={setIsShownVideoPlayer2}
          color={props.dark}
          numberIcon={2}
        />
        <DesktopIcon
          imageSource="\assets\screen\video3.jpg"
          name={"spot ex1.avi"}
          isShown={isShownVideoPlayer3}
          setIsShown={setIsShownVideoPlayer3}
          color={props.dark}
          numberIcon={3}
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
        name="the medieval walls.avi"
        Component={
          <VideoPlayer
            src="https://www.youtube.com/embed/N2ago2FZC_g"
            color={props.dark ? "white" : "#38383A"}
          />
        }
        setIsShown={setIsShownVideoPlayer1}
        isShown={isShownVideoPlayer1}
      />
      <Window
        color={props.dark}
        name="flash mob.avi"
        Component={
          <VideoPlayer
            src="https://www.youtube.com/embed/i6PU3a5Kpv0"
            color={props.dark ? "white" : "#38383A"}
          />
        }
        setIsShown={setIsShownVideoPlayer2}
        isShown={isShownVideoPlayer2}
      />
      <Window
        color={props.dark}
        name="spot ex1.avi"
        Component={
          <VideoPlayer
            src="https://www.youtube.com/embed/umpQ9hnmKjc"
            color={props.dark ? "white" : "#38383A"}
          />
        }
        setIsShown={setIsShownVideoPlayer3}
        isShown={isShownVideoPlayer3}
      />
      <div className="toolBar">
        <IconToolBar
          color={props.dark}
          source="\assets\screen\finder.png"
          finder={true}
        />
        <IconToolBar
          color={props.dark}
          source="\assets\screen\text-editor.png"
          isShown={isShownTextEditor}
          setIsShown={setIsShownTextEditor}
        />
        <IconToolBar
          color={props.dark}
          source="\assets\screen\video1.jpg"
          isShown={isShownVideoPlayer1}
          setIsShown={setIsShownVideoPlayer1}
        />
        <IconToolBar
          color={props.dark}
          source="\assets\screen\video2.jpg"
          isShown={isShownVideoPlayer2}
          setIsShown={setIsShownVideoPlayer2}
        />
        <IconToolBar
          color={props.dark}
          source="\assets\screen\video3.jpg"
          isShown={isShownVideoPlayer3}
          setIsShown={setIsShownVideoPlayer3}
        />

        <IconToolBar source="\assets\screen\bin.png" />
      </div>
    </Html>
  );
};

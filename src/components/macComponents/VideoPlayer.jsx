export const VideoPlayer = (props) => {
  return (
    <div className="videoplayer">
      <iframe
        className="video"
        width="100%"
        height="100%"
        src={props.src}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

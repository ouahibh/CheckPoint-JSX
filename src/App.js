import "./style.css";
/*import imgpublic from "../public/imageInPublic.jpg";*/
import imgsrc from "./assets/imageInSrc.jpg";
import React from "react";
const App = () => {
  return (
    <div className={"contenairP"}>
      <h1 className={"title"}>Sofiane Hamdaoui</h1>
      <div className={"imgPublic"}>
        <img src={process.env.PUBLIC_URL + "/imageInPublic.jpg"} alt="Myimg" />
      </div>
      <div className={"imgSrc"}>
        <img src={imgsrc} alt="Myimg" style={{ width: 640, height: 480 }} />
      </div>
      <div className={"styleVideo"}>
        <iframe
          src={"https://www.youtube.com/embed/McyvWzpf4kA"}
          frameborder="0"
          allow="autoplay; encrypted-media;"
          allow="FullScreen"
          title="video"
          width="640"
          height="480"
        />
      </div>
    </div>
  );
};

export default App;

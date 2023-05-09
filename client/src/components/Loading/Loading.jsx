import React from "react";
import style from "./loading.module.css"

function Loading() {
  return (
    <div className={style.containerload}>
      <img className={style.gifload} 
        src="https://venturebeat.com/wp-content/uploads/2014/10/loading_desktop_by_brianmccumber-d41z4h6.gif?w=1200&strip=all"
        alt="gif"
      ></img>
    </div>
  );
}

export default Loading;
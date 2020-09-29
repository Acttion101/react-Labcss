import React from "react";
import style from "./main.module.css";
function Footer(props) {
  return (
    <div className={style.navbar}>
      {props.children}
      <div className={style.singin}>
        <button> singin</button>
      </div>
    </div>
  );
}
export default Footer;

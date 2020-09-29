import React from "react";
import style from "./main.module.css";
function Header(props) {
  return (
    <div className={style.navbar}>
      {props.children}
      <div className={style.singin}>
        <button> singin</button>
      </div>
    </div>
  );
}
export default Header;

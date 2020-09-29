import React, { useState } from "react";
import ContainerLayout from "./component/ContainerLayout";
import Content from "./component/Content";
import Footer from "./component/Footer";
import Header from "./component/Header/index";
import "./styles.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App">
      <ContainerLayout></ContainerLayout>
      <div className="Header">
        <Header>
          <h1>logo </h1>
        </Header>
      </div>
      <Content>
        inputValue={inputValue} setInputValue={setInputValue}{" "}
      </Content>
      <div className="Footer">
        <Footer>coppyright[action]</Footer>
      </div>
    </div>
  );
}

import './App.css';
import Header from "./homePage/header/Header.tsx";
import React from "react";
import Banner from "./homePage/banner/Banner";
import About from "./homePage/about/About.tsx";
import ChooseComponent from "./homePage/chooseComponent/ChooseComponent.tsx";
import CounterUser from "./homePage/count/CounterUser.tsx";
import Menu from "./homePage/menu/Menu";
function App() {
  return (
      <>
        <Header/>
        <Banner/>
        <About/>
      <ChooseComponent/>
          <CounterUser/>
          <Menu/>
      </>

  );
}

export default App;

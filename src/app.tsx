import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./component/banner/Banner";
import MainPage from "./page/MainPage";
import { RecoilRoot } from "recoil";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
  padding:0px;
  margin: 0px;
}
`;

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      {
        <BrowserRouter>
          <Banner />
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      }
    </RecoilRoot>
  );
};

export default App;

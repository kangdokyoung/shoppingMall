import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./component/banner/Banner";
import MainPage from "./page/MainPage";
import LoginPage from "./page/LoginPage";
import SignUpPage from "./page/SignUpPage";
import MyPage from "./page/MyPage";
import QnaPage from "./page/QnaPage";
import BasketPage from "./page/BasketPage";
import OrderDetailPage from "./page/OrderDetailPage";
import { RecoilRoot } from "recoil";
import DetailGoodsPage from "./page/DetailGoodsPage";

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
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/qna" element={<QnaPage />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/orderDetail" element={<OrderDetailPage />} />
            <Route path="/detailGoods" element={<DetailGoodsPage />} />
          </Routes>
        </BrowserRouter>
      }
    </RecoilRoot>
  );
};

export default App;

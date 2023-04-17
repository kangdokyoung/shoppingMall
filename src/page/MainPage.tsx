import React from "react";

import Advertise from "../component/adv/Advertise";
import Category from "../component/category/Category";
import MainGoods from "../component/mainGoods/MainGoods";
import MainNotice from "../component/notice/MainNotice";

function MainPage() {
  return (
    <>
      <Advertise />
      <Category />
      <MainGoods />
      <MainNotice />
    </>
  );
}

export default MainPage;

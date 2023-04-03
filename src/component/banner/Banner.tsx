import React from "react";
import styled from "styled-components";
import Login from "../login/Login";

const Scontainer = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
  :hover {
    box-shadow: 1px 2px grey;
  }
`;

const BannerLeft = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
`;
const BannerRight = styled.div`
  padding-right: 20px;
  display: flex;
  align-items: center;
`;

const MenuBtnImg = styled.img`
  height: 50px;
  :hover {
    cursor: pointer;
  }
`;

const Logo = styled.div`
  font-weight: bolder;
  font-size: 40px;
  margin-bottom: 5px;
  margin-left: 20px;
  :hover {
    cursor: pointer;
  }
`;

const MoveBtn = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-right: 10px;
  :hover {
    cursor: pointer;
  }
`;

function Banner() {
  const btnImg = ["https://ifh.cc/g/9lKOq1.png", "https://ifh.cc/g/Gp40a2.png"];
  return (
    <Scontainer>
      <BannerLeft>
        <MenuBtnImg src={btnImg[0]} />
        <Logo>로고</Logo>
      </BannerLeft>
      <BannerRight>
        <MoveBtn>로그인</MoveBtn>
        <MoveBtn>마이페이지</MoveBtn>
        <MoveBtn>문의</MoveBtn>
        <MoveBtn>검색</MoveBtn>
        {/* 검색은 로고로 바꿔야됨. */}
      </BannerRight>
    </Scontainer>
  );
}

export default Banner;

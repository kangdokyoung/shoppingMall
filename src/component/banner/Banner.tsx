import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { useRecoilState } from "recoil";
import { AmenuToggle, AsearchToggle } from "../../atom";
import DetailMenu from "./DetailMenu";
import Search from "./Search";

interface Span {
  isClick: boolean;
  index?: number;
}

type IsSearch = {
  search?: boolean;
};

type InnerLogo = {
  inner?: boolean;
};

const Scontainer = styled.div`
  position: relative;
  min-width: 1500px;
  max-height: 80px;
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: space-around;
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

const MenuToggle = styled.div`
  display: inline-block;
  transition: all 0.4s;
  box-sizing: border-box;
  position: relative;
  width: 50px;
  height: 44px;
  margin-top: 10px;
  cursor: pointer;
`;

const MenuSpan = styled.span<Span>`
  display: block;
  position: relative;
  z-index: 1;
  margin-bottom: 10px;
  width: 100%;
  height: 4px;
  background-color: black;
  border-radius: 4px;
  transition: all 0.3s;
  ${(props) => {
    if (props.isClick === true) {
      if (props.index === 1) {
        return css`
          transform: translateY(14px) rotate(-45deg);
        `;
      } else if (props.index === 2) {
        return css`
          opacity: 0;
        `;
      } else if (props.index === 3) {
        return css`
          transform: translateY(-14px) rotate(45deg);
        `;
      }
    }
  }};
`;

const Logo = styled.div<InnerLogo>`
  font-weight: bolder;
  font-size: 40px;
  margin-bottom: 5px;
  ${(props) => {
    if (props.inner) {
      return css`
        color: white;
      `;
    }
  }}
  margin-left: 20px;
  :hover {
    cursor: pointer;
  }
`;

const MoveBtn = styled.div<IsSearch>`
  font-weight: bold;
  font-size: 20px;
  margin-right: 10px;
  :hover {
    cursor: pointer;
  }
  ${(props) => {
    if (props.search) {
      return css`
        width: 40px;
        height: 40px;
      `;
    }
  }}
`;

function Banner() {
  const [isClick, setIsClick] = useRecoilState(AmenuToggle);
  const [isSearch, setIsSearch] = useRecoilState(AsearchToggle);

  return (
    <Scontainer>
      <BannerLeft>
        <MenuToggle
          onClick={() => {
            setIsClick((prop) => !prop);
          }}
        >
          <MenuSpan isClick={isClick} index={1} />
          <MenuSpan isClick={isClick} index={2} />
          <MenuSpan isClick={isClick} index={3} />
        </MenuToggle>
        <DetailMenu />
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <Logo>로고</Logo>
        </Link>
      </BannerLeft>
      <BannerRight>
        <Link to={"/login"} style={{ textDecoration: "none", color: "black" }}>
          <MoveBtn>로그인</MoveBtn>
        </Link>
        <MoveBtn>회원가입</MoveBtn>
        <MoveBtn>문의</MoveBtn>
        <MoveBtn
          search={true}
          onClick={() => {
            setIsSearch((prop) => !prop);
          }}
        >
          <FontAwesomeIcon icon={faSearch} size="2x" />
        </MoveBtn>
      </BannerRight>
      <Search />
    </Scontainer>
  );
}

export default Banner;

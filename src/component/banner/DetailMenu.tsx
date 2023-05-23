import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { changeBannerToggle } from "../../Slices";

type Menu = {
  isClick: boolean;
};

const SDetailMenu = styled.div<Menu>`
  z-index: 1;
  position: absolute;
  background-color: black;
  opacity: 0.8;
  width: 90vw;
  height: 40vh;
  top: 15vh;
  left: 5vw;
  display: flex;
  transition: linear 0.05s;
  ${(props) => {
    if (props.isClick === true) {
      return css`
        transform: scale(1);
      `;
    } else {
      return css`
        transform: scale(0);
      `;
    }
  }}
`;

const DetailLeft = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin-left: 10%;
`;

const DetailRight = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

const DetailList = styled.ul`
  list-style: none;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 20%;
`;

const ListMenu = styled.li`
  color: white;
  cursor: pointer;
  :hover {
    color: red;
  }
`;

const Logo = styled.div`
  font-weight: bolder;
  font-size: 40px;
  margin-bottom: 5px;
  color: white;
  margin-left: 20px;
  :hover {
    cursor: pointer;
  }
`;

const DetailMenu: React.FC = () => {
  const bannerToggle = useSelector(
    (state: RootState) => state.banner.bannerToggle
  );
  const dispatch = useDispatch();

  return (
    <SDetailMenu isClick={bannerToggle}>
      <DetailLeft>
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <Logo>로고</Logo>
        </Link>
      </DetailLeft>
      <DetailRight>
        <DetailList>
          <Link
            to={"/login"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListMenu onClick={() => dispatch(changeBannerToggle())}>
              로그인
            </ListMenu>
          </Link>
          <Link
            to={"/signup"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListMenu onClick={() => dispatch(changeBannerToggle())}>
              회원가입
            </ListMenu>
          </Link>
          <Link
            to={"/mypage"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListMenu onClick={() => dispatch(changeBannerToggle())}>
              마이페이지
            </ListMenu>
          </Link>
          <Link
            to={"/basket"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListMenu onClick={() => dispatch(changeBannerToggle())}>
              장바구니
            </ListMenu>
          </Link>
        </DetailList>

        <DetailList>
          <ListMenu onClick={() => dispatch(changeBannerToggle())}>
            공지사항
          </ListMenu>
          <Link to={"/qna"} style={{ textDecoration: "none", color: "black" }}>
            <ListMenu onClick={() => dispatch(changeBannerToggle())}>
              Q&A
            </ListMenu>
          </Link>
          <ListMenu onClick={() => dispatch(changeBannerToggle())}>
            1:1 문의
          </ListMenu>
        </DetailList>
      </DetailRight>
    </SDetailMenu>
  );
};

export default DetailMenu;

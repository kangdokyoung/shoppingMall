import React from "react";
import styled, { css } from "styled-components";
import { useRecoilState } from "recoil";
import { AsearchToggle } from "../../atom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { RootState } from "../../module";

type TSearch = {
  isClick: boolean;
};

const Scontainer = styled.div<TSearch>`
  z-index: 1;
  position: absolute;
  top: 10vh;
  left: 60%;
  height: 40%;
  width: 24%;
  background-color: grey;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  transition: linear 0.5;
  ${(props) => {
    if (props.isClick) {
      return css`
        transform: scale(1);
      `;
    } else {
      return css`
        transform: scale(0);
      `;
    }
  }};
`;

const Stext = styled.div`
  color: white;
  margin-left: 3%;
  margin-right: 3%;
`;

const Sinput = styled.input`
  width: 60%;
  height: 70%;
  border-radius: 5px;
  border: none;
`;

const SinputBtn = styled.button`
  border: none;
  height: 70%;
  border-radius: 5px;
  background-color: grey;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
`;

function Search() {
  const [isSearch, setIsSearch] = useRecoilState(AsearchToggle);
  return (
    <Scontainer isClick={isSearch}>
      <Stext>검색</Stext>
      <Sinput type="text" placeholder="검색어를 입력하시오" />
      <SinputBtn>GO</SinputBtn>
    </Scontainer>
  );
}

export default Search;

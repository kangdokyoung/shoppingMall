import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { ImNewTab } from "react-icons/im";

const Scontainer = styled.div`
  position: absolute;
  top: 270px;
  width: 100%;
  z-index: 1;
`;

const SmodalList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
`;

const SmodalDetail = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
`;

const DetailModal: React.FC = () => {
  return (
    <Scontainer>
      <SmodalList>
        <SmodalDetail title="검색">
          <AiOutlineSearch />
        </SmodalDetail>
        <SmodalDetail title="장바구니 담기">
          <BsCartPlus />
        </SmodalDetail>
        <SmodalDetail title="새 탭에서 보기">
          <ImNewTab />
        </SmodalDetail>
      </SmodalList>
    </Scontainer>
  );
};

export default DetailModal;

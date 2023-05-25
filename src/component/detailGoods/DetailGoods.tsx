import { FormControl } from "@mui/material";
import Select from "@mui/material/Select/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import React, { useState } from "react";
import styled from "styled-components";

const Scontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 30px;
`;

const SgoodsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  height: 500px;
`;

const SgoodsImgBox = styled.div`
  width: 30%;
  aspect-ratio: 1/1.2;
  background-color: lightgrey;
  margin-left: 100px;
`;

const SgoodsImg = styled.img``;

const SgoodsInfoContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 100px;
`;

const SgoodsName = styled.div`
  width: 100%;
  padding-left: 10px;
  text-align: left;
  border-bottom: 1px solid black;
  margin-bottom: 15px;
  padding-bottom: 15px;
`;

const SgoodsPrice = styled.div`
  width: 100%;
  padding-left: 10px;
  text-align: left;
  border-top: 1px solid black;
  margin-top: 15px;
  padding-top: 15px;
`;

const SbtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SBtn = styled.button`
  cursor: pointer;
  width: 49%;
  height: 50px;
  text-align: center;
  border: 1px solid black
  background-color:white;
`;

const SdeleteGoodsBtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: red;
  color: white;
  text-align: center;
  cursor: pointer;
  border: none;
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
`;

const SgoodsDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`;

const StitleBox = styled.div`
  padding-left: 10px;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
  display: flex;
  width: 80%;
  justify-content: left;
`;

const Stitle = styled.div`
  width: 15%;
  height: 30px;
  text-align: center;
  font-size: 18px;
  transition: all 0.1s;
  overflow: hidden;
  :hover {
    transform: translateY(-5px);
    border: 1px solid black;
    box-shadow: 1px 2px grey;
  }
`;

const DetailGoods: React.FC = () => {
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [price, setPrice] = useState(100000000000);
  const [sold, setSold] = useState(false);

  return (
    <Scontainer>
      <SgoodsContainer>
        <SgoodsImgBox>
          <SgoodsImg />
        </SgoodsImgBox>
        <SgoodsInfoContainer>
          <SgoodsName>상품 이름</SgoodsName>
          <FormControl fullWidth>
            <Select
              value={option1}
              onChange={(e) => setOption1(e.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <Select
              value={option2}
              onChange={(e) => setOption2(e.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <SgoodsPrice>가격 : {price} 원</SgoodsPrice>
          <SbtnBox>
            <SBtn
              onClick={() => {
                setSold((e) => !e);
              }}
            >
              {sold ? "구매하기" : "품절"}
            </SBtn>
            <SBtn>담기</SBtn>
          </SbtnBox>
          <SdeleteGoodsBtn>상품 내리기</SdeleteGoodsBtn>
        </SgoodsInfoContainer>
      </SgoodsContainer>
      <SgoodsDetailContainer>
        <StitleBox>
          <Stitle>상세 정보</Stitle>
          <Stitle>리뷰 보러가기</Stitle>
        </StitleBox>
      </SgoodsDetailContainer>
    </Scontainer>
  );
};

export default DetailGoods;

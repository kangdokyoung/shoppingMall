import React from "react";
import styled from "styled-components";

const Scontainer = styled.div`
  background-color: rgba(255, 179, 0, 0.3);
  width: 100%;
  min-width: 1800px;
  height: 400px;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SNotice = styled.div`
  width: 70%;
  height: 80%;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const SNoticeTitle = styled.div`
  height: 25%;
  width: 90%;
  font-size: 22px;
  font-weight: bold;
  padding-bottom: 8px;
  padding-left: 10px;
  display: flex;
  align-items: center;
`;

const SlistBox = styled.ul`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  aligin-content: center;
`;

const SNoticeList = styled.li`
  margin-top: 10px;
  margin-bottom: 20px;
  height: 25px;
  width: 80%;
  border-bottom: 1px solid black;
`;

const MainNotice: React.FC = () => {
  return (
    <Scontainer>
      <SNotice>
        <SNoticeTitle>공지사항</SNoticeTitle>
        <SlistBox>
          <SNoticeList>공지1</SNoticeList>
          <SNoticeList>공지2</SNoticeList>
          <SNoticeList>공지3</SNoticeList>
        </SlistBox>
      </SNotice>
    </Scontainer>
  );
};

export default MainNotice;

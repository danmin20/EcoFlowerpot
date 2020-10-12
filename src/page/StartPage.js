import React from "react";
import styled from "styled-components";
import StartBtn from "../component/StartBtn";
import { Flower } from "../icon";

export default () => {
  const onClickStartBtn = () => {
    console.log("asdf");
  };
  
  return (
    <Container>
      <div
        style={{ marginTop: "300px", alignItems: "center", marginLeft: "25px" }}
      >
        <Flower width={"70"} height={"70"} />
      </div>
      <Title>Eco Flowerpot</Title>
      <div style={{ marginTop: "10px" }}>
        <StartBtn onClick={onClickStartBtn} text={"눌러서 시작하세요"} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  background-color: #00ad93;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  margin: 0;
`;

const Title = styled.div`
  font-family: "Sansita Swashed", cursive;
  color: white;
  font-size: 30px;
  margin-top: -15px;
`;

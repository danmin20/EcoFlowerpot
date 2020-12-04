import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Flower } from "../assets";
import Wave from "../component/Wave";

export default withRouter(({ history }) => {
  const onClickStartBtn = () => {
    history.push("/main");
  };

  return (
    <>
      <WaveContainer>
        <Wave />
      </WaveContainer>
      <Container>
        <Flower width={"70"} height={"70"} style={{ marginLeft: "15px" }} />
        <Title>Eco Flowerpot</Title>
        <div className="button" onClick={onClickStartBtn}>
          눌러서 시작하세요
        </div>
      </Container>
    </>
  );
});

const WaveContainer = styled.div`
  background-color: #3cb57c;
  display: flex;
  width: 100%;
  height: 300px;
  align-items: center;
  flex-direction: column;
  margin: 0;
`;

const Title = styled.div`
  font-family: "Sansita Swashed", cursive;
  font-size: 30px;
  margin-top: -15px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  align-items: center;
`;

const Button = styled.div`
  margin-top: 20px;
  text-align: center;
  background-color: #a76f3c;
  color: white;
  font-size: 12px;
  padding: 5px 35px;
  border-radius: 30px;
`;

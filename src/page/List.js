import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import { WaveBottom } from "../component/Wave";
import { withRouter } from "react-router-dom";
import CustomLoader from "../component/CustomLoader";

export default withRouter(({ history }) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const { data } = await Axios.get(
      "https://vgaf0jz45m.execute-api.us-east-1.amazonaws.com/beta/",
      {
        headers: {
          "x-api-key": "lC399ZhAd42s3FyYugZuy94bDv6vtCCsxMLHOy2f",
        },
      }
    );
    setData(data.things);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <WaveBottom />
      {data ? (
        <>
          <Title>Device List</Title>
          <List>
            {data.map((item, idx) => (
              <ItemBox
                key={idx}
                onClick={() => history.push(`/list/${item.thingName}`)}
              >
                {item.thingName}
              </ItemBox>
            ))}
          </List>
        </>
      ) : (
        <CustomLoader />
      )}
    </Container>
  );
});

const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  margin: 0;
  background-color: #3cb57c;
  font-family: "Cafe24Dangdanghae";
`;

const Title = styled.div`
  margin-top: 250px;
  font-size: 30px;
  font-family: "Sansita Swashed", cursive;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: auto;
  margin-top: 50px;
`;

const ItemBox = styled.div`
  width: 100px;
  background-color: white;
  text-align: center;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
`;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  tempMarks,
  moistMarks,
  humidMarks,
  intensityMarks,
} from "../data/marks";
import CustomSlider from "../component/CustomSlider";
import Axios from "axios";
import CustomSwitch from "../component/CustomSwitch";
import { WaveBottom } from "../component/Wave";
import { withRouter } from "react-router-dom";
import CustomLoader from "../component/CustomLoader";
import ReplayIcon from "@material-ui/icons/Replay";

export default withRouter(({ history }) => {
  const [data, setData] = useState(null);
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(false);

  const thingName = history.location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get(
        `https://vgaf0jz45m.execute-api.us-east-1.amazonaws.com/beta/${thingName}`,
        {
          headers: {
            "x-api-key": "lC399ZhAd42s3FyYugZuy94bDv6vtCCsxMLHOy2f",
          },
        }
      );
      setData(data.state.desired);
      setReportData(data.state.reported);
    };

    fetchData();
  }, [thingName]);

  const fetchReportedData = async () => {
    setLoading(true);
    try {
      const { data } = await Axios.get(
        `https://vgaf0jz45m.execute-api.us-east-1.amazonaws.com/beta/${thingName}`,
        {
          headers: {
            "x-api-key": "lC399ZhAd42s3FyYugZuy94bDv6vtCCsxMLHOy2f",
          },
        }
      );
      setData(data.state.desired);
      setReportData(data.state.reported);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <WaveBottom />
      {data && reportData ? (
        <>
          <Title>{thingName}</Title>
          <div
            style={{
              color: "black",
              marginTop: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            현재상태
            <div
              style={{ cursor: "pointer" }}
              onClick={() => fetchReportedData()}
            >
              <ReplayIcon />
            </div>
          </div>
          {loading ? (
            <div style={{ height: "25px" }}>...</div>
          ) : (
            <div style={{ display: "flex", marginTop: "10px" }}>
              <div>
                <Name>온도 </Name>
                {reportData.temperature}
              </div>
              <div>
                <Name>수분 </Name>
                {reportData.soil_moisture}
              </div>
              <div>
                <Name>습도 </Name>
                {reportData.humidity}
              </div>
              <div>
                <Name>광도 </Name>
                {reportData.intensity}
              </div>
            </div>
          )}

          <div style={{ marginTop: "40px" }}>
            {/* number */}
            <CustomSlider
              title={"Temperature"}
              mark={tempMarks}
              state={data.temperature}
            />

            {/* number */}
            <CustomSlider
              title={"Soil Moisture"}
              mark={moistMarks}
              state={data.soil_moisture}
            />

            {/* number */}
            <CustomSlider
              title={"Humidity"}
              mark={humidMarks}
              state={data.humidity}
            />

            {/* number */}
            <CustomSlider
              title={"Intensity"}
              mark={intensityMarks}
              state={data.intensity}
            />
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "30px",
            }}
          >
            {/* boolean */}
            <CustomSwitch title={"LED"} state={data.led} />

            {/* boolean */}
            <CustomSwitch title={"Water"} state={data.water} />

            {/* boolean */}
            <CustomSwitch title={"Fan"} state={data.blind} />
          </div>
        </>
      ) : (
        <CustomLoader />
      )}
    </Container>
  );
});

const Title = styled.div`
  font-size: 30px;
  margin-top: -100px;
  font-family: "Sansita Swashed", cursive;
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  background-color: #3cb57c;
  color: white;
  font-family: "Cafe24Dangdanghae";
`;

const Name = styled.span`
  color: gray;
  margin-left: 10px;
`;

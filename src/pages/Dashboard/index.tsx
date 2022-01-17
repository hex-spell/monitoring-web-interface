import { SettingFilled } from "@ant-design/icons";
import { Button, Card, Spin } from "antd";
import { WebsocketsContext } from "context";
import { Gauge } from "framework7-react";
import React, { useContext } from "react";
import useWebSocket from "react-use-websocket";

export const Dashboard: React.FC = () => {
  const { lastMessage } = useContext(WebsocketsContext);
  //recommended between 5.5 and 6
  //gauge from 4 to 8, middle at 6
  const acidity = parseFloat((Math.random() * (5.8 - 6) + 6).toFixed(1));

  //recommended between 1.5 and 2.5
  //gauge from 0.5 to 1,69
  const ec = parseFloat((Math.random() * (1.2 - 1.4) + 1.4).toFixed(2));

  //recommended between 50% and 60%
  //gauge from 0% to 100%
  const humidity = parseFloat((Math.random() * (50 - 51) + 51).toFixed(2));
  return (
    <div>
      {lastMessage ? (
        <div
          style={{
            display: "grid",
            gridGap: "15px",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, max-content))",
            justifyContent: "center",
            paddingBottom: "16px",
          }}
        >
          <Card
            title="Ambient temperature"
            extra={
              <Button type="default" shape="circle" icon={<SettingFilled />} />
            }
            style={{ width: 300 }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Gauge
                type="semicircle"
                value={parseFloat(lastMessage.ambientTemperature) / 50}
                valueText={
                  parseFloat(lastMessage.ambientTemperature).toFixed(2) + "°C"
                }
                valueTextColor="#f44336"
                borderColor="#f44336"
              />
            </div>
          </Card>
          <Card
            title="Ambient humidity"
            extra={
              <Button type="default" shape="circle" icon={<SettingFilled />} />
            }
            style={{ width: 300 }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Gauge
                type="semicircle"
                value={humidity / 100}
                valueText={humidity + "%"}
                valueTextColor="#f44336"
                borderColor="#f44336"
              />
            </div>
          </Card>
          <Card
            title="Reservoir temperature"
            extra={
              <Button type="default" shape="circle" icon={<SettingFilled />} />
            }
            style={{ width: 300 }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Gauge
                type="semicircle"
                value={parseFloat(lastMessage.ambientTemperature) / 50}
                valueText={
                  (parseFloat(lastMessage.ambientTemperature) - 10).toFixed(2) +
                  "°C"
                }
                valueTextColor="#f44336"
                borderColor="#f44336"
              />
            </div>
          </Card>
          <Card
            title="Reservoir acidity"
            extra={
              <Button type="default" shape="circle" icon={<SettingFilled />} />
            }
            style={{ width: 300 }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Gauge
                type="semicircle"
                value={((acidity - 4) * 25) / 100}
                valueText={acidity + "Ph"}
                valueTextColor="#f44336"
                borderColor="#f44336"
              />
            </div>
          </Card>
          <Card
            title="Reservoir EC"
            extra={
              <Button type="default" shape="circle" icon={<SettingFilled />} />
            }
            style={{ width: 300 }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Gauge
                type="semicircle"
                value={((ec - 0.5) * 59) / 100}
                valueText={ec}
                valueTextColor="#f44336"
                borderColor="#f44336"
              />
            </div>
          </Card>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            minHeight: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin size="large" style={{transform: "scale(3)"}}/>
        </div>
      )}
    </div>
  );
};

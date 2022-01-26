import { SettingFilled } from "@ant-design/icons";
import { Button, Card } from "antd";
import React from "react";
import { Line } from "@nivo/line";
import useResizeAware from "react-resize-aware";
import { useHourlySensorData } from "services";
import moment from "moment";

export const History: React.FC = () => {
  const [resizeListener, sizes] = useResizeAware();
  const { loading, data, error } = useHourlySensorData();
  const width = (sizes.width || 300) - 30;
  return (
    <div>
      <Card
        title="Ambient temperature"
        extra={
          <Button type="default" shape="circle" icon={<SettingFilled />} />
        }
        style={{ width: "100%" }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {resizeListener}
          <div style={{ width: width > 1200 ? width : 1200, maxWidth: "100%", overflowX: "scroll" }}>
            {loading && "cargando"}
            {data && (
              <Line
                height={300}
                width={width > 1200 ? width : 1200}
                yScale={{
                  type: "linear",
                  stacked: true,
                  min: 10,
                  max: 50,
                }}
                margin={{ bottom: 50, right: 50, left: 50, top: 10 }}
                enableCrosshair
                enablePoints
                isInteractive
                useMesh
                curve="monotoneX"
                colors={{ scheme: "category10" }}
                axisBottom={{
                  format: (value) =>
                    moment
                      .unix(parseFloat(data[value].createdAt))
                      .format("DD/MM/YY h:mm"),
                }}
                data={[
                  {
                    id: "Sensors",
                    data: data.map(
                      ({ ambientTemperature, ...rest }, index) => ({
                        x: index,
                        y: ambientTemperature,
                        ...rest,
                      })
                    ),
                  },
                ]}
              />
            )}
            {error && <div>{error}</div>}
          </div>
        </div>
      </Card>
    </div>
  );
};

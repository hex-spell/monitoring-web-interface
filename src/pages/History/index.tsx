import { LineChart } from "components";
import React from "react";
import { useHourlySensorData } from "services";

export const History: React.FC = () => {
  const { loading, data, error } = useHourlySensorData();
  return (
    <div>
      <LineChart
        title="Ambient Temperature"
        loading={loading}
        error={error}
        data={[
          {
            id: "Ambient",
            data: [...(data || [])].map(
              ({ ambientTemperature, ...rest }, index) => ({
                x: index,
                y: ambientTemperature,
                ...rest,
              })
            ),
          },
        ]}
      />
      <LineChart
        title="Water Temperature"
        loading={loading}
        error={error}
        data={[
          {
            id: "Water",
            data: [...(data || [])].map(
              ({ waterTemperature, ...rest }, index) => ({
                x: index,
                y: waterTemperature,
                ...rest,
              })
            ),
          },
        ]}
      />
      <LineChart
        title="Ambient Humidity"
        loading={loading}
        error={error}
        yScale={{
          type: "linear",
          stacked: false,
          min: 0,
          max: 100,
        }}
        data={[
          {
            id: "Sensors",
            data: [...(data || [])].map(
              ({ ambientHumidity, ...rest }, index) => ({
                x: index,
                y: ambientHumidity,
                ...rest,
              })
            ),
          },
        ]}
      />
      <LineChart
        title="Water TDS"
        loading={loading}
        error={error}
        yScale={{
          type: "linear",
          stacked: false,
          min: 150,
          max: 1500,
        }}
        data={[
          {
            id: "Sensors",
            data: [...(data || [])].map(({ waterTDS, ...rest }, index) => ({
              x: index,
              y: waterTDS,
              ...rest,
            })),
          },
        ]}
      />
      <LineChart
        title="Water Ph"
        loading={loading}
        error={error}
        yScale={{
          type: "linear",
          stacked: false,
          min: 0,
          max: 14,
        }}
        data={[
          {
            id: "Sensors",
            data: [...(data || [])].map(({ waterPh, ...rest }, index) => ({
              x: index,
              y: waterPh,
              ...rest,
            })),
          },
        ]}
      />
    </div>
  );
};

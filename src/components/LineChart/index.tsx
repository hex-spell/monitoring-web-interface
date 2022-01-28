import React from "react";
import { SettingFilled } from "@ant-design/icons";
import { Button, Card, Spin } from "antd";
import { Line, LineSvgProps, Serie } from "@nivo/line";
import moment from "moment";
import useResizeAware from "react-resize-aware";

interface IProps extends Omit<LineSvgProps, "data"> {
  title: string;
  data: Serie[] | null;
  loading: boolean;
  error: any;
}

export const LineChart: React.FC<IProps> = ({
  title,
  data,
  loading,
  error,
  ...restProps
}) => {
  const [resizeListener, sizes] = useResizeAware();
  const width = (sizes.width || 300) - 30;
  return (
    <Card
      title={title}
      extra={<Button type="default" shape="circle" icon={<SettingFilled />} />}
      style={{ width: "100%", marginBottom: "15px" }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {resizeListener}
        <div
          style={{
            width: width > 1200 ? width : 1200,
            maxWidth: "100%",
            overflowX: "scroll",
          }}
        >
          {loading && <Spin />}
          {data && !loading && (
            <Line
              height={300}
              width={width > 1200 ? width : 1200}
              yScale={{
                type: "linear",
                stacked: false,
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
                    .unix(parseFloat(data[0].data[value].createdAt))
                    .format("DD/MM/YY h:mm"),
              }}
              data={data}
              {...restProps}
            />
          )}
          {error && <div>{error}</div>}
        </div>
      </div>
    </Card>
  );
};

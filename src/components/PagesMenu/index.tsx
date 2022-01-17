import {
  DashboardFilled,
  FundFilled,
  InfoCircleFilled,
} from "@ant-design/icons";
import { Menu, MenuTheme } from "antd";
import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  theme?: MenuTheme;
}

export const PagesMenu: React.FC<IProps> = ({ theme }) => {
  return (
    <Menu theme={theme || "dark"} mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1" icon={<DashboardFilled />}>
        Dashboard
        <Link to="/" />
      </Menu.Item>
      <Menu.Item key="2" icon={<FundFilled />}>
        History
        <Link to="/history" />
      </Menu.Item>
      <Menu.Item key="3" icon={<InfoCircleFilled />}>
        About
        <Link to="/about" />
      </Menu.Item>
    </Menu>
  );
};

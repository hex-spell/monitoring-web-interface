import { Button, Drawer, Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, Dashboard, History } from "pages";
import { useState } from "react";
import { PagesMenu } from "components";
import logoLight from "img/logo.png";

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
  const [siderCollapsed, setSiderCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Drawer
        width={300}
        closeIcon={false}
        headerStyle={{ display: "none" }}
        bodyStyle={{
          padding: 0,
          backgroundColor: "#001529",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        title="Menu"
        placement="left"
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
      >
        <div style={{ width: "100%", borderBottom: "1px solid black", display: "flex", justifyContent: "center" }}>
          <img height="68px" src={logoLight} alt="logo" />
        </div>
        <PagesMenu />
      </Drawer>
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0, borderBottom: "1px solid black" }}
        >
          {siderCollapsed && (
            <Button
              onClick={() => setDrawerVisible(true)}
              type="text"
              style={{ color: "white", marginLeft: "8px" }}
              size="large"
              icon={<MenuOutlined />}
            />
          )}
          {!siderCollapsed && (
            <img
              style={{ marginLeft: "40px" }}
              height="68px"
              src={logoLight}
              alt="logo"
            />
          )}
        </Header>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              setSiderCollapsed(broken);
            }}
            zeroWidthTriggerStyle={{ display: "none" }}
            style={{ paddingTop: "10px" }}
          >
            <div className="logo" />
            <PagesMenu />
          </Sider>
          <Content style={{ margin: "24px 16px 0" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/history" element={<History />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;

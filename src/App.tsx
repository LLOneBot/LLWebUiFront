import { Outlet } from 'react-router-dom';
import { Layout, theme } from 'antd';
import * as Components from './components';

const { Content, Sider } = Layout;

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  return <Layout style={{ minHeight: '100vh' }}>
    <Sider collapsible>
      <Components.Menu />
    </Sider>
    <Layout>
      <Content
        style={{
          margin: 24,
          marginBottom: 0,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Outlet/>
      </Content>
      <Components.Footer />
    </Layout>
  </Layout>
}

export default App

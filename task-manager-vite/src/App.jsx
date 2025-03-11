import { Layout, Typography } from 'antd';
import Home from './pages/Home';

const { Header, Content } = Layout;
const { Title } = Typography;

export default function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#001529', color: 'white', textAlign: 'center' }}>
        <Title level={2} style={{ color: 'white' }}>
          Task Manager App
        </Title>
      </Header>
      <Content style={{ padding: '20px' }}>
        <Home />
      </Content>
    </Layout>
  );
}
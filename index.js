import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

class SideNav extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div style={{ width: 256 }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <div className="side-nav-container">
        <Menu
          defaultSelectedKeys={['1']}
          inlineCollapsed={this.state.collapsed}
          style={{ width: 240 }}
        >
          <div className="side-nav-top-section-container">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            People
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Project
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />}>
            Skills
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />}>
            Deep View
          </Menu.Item>
          </div>
          <div className="side-nav-bottom-section-container">
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Notifications
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />}>
            Umesh
          </Menu.Item>
          </div>
        </Menu>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<SideNav />, document.getElementById('container'));
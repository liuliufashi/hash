import React,{R} from "react";
import "./App.css";
import pulicvar from "./acsster/pulicvar";
import { Layout, Menu, Breadcrumb ,Descriptions ,List, Image, Button, Space } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">算法</Menu.Item>
              <Menu.Item key="2">物理公式</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' ,height:'800px'}}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout className="site-layout-background" style={{ padding: '24px 0',height:'auto' }}>
              <Sider className="site-layout-background" width={200}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                >
                  <SubMenu key="sub1" icon={<UserOutlined />} title="算法">
                    <Menu.Item key="1">冒泡排序</Menu.Item>
                    <Menu.Item key="2">冒泡排序</Menu.Item>
                    <Menu.Item key="3">冒泡排序</Menu.Item>
                    <Menu.Item key="4">冒泡排序</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" icon={<LaptopOutlined />} title="物理公式">
                    <Menu.Item key="5">冒泡排序</Menu.Item>
                    <Menu.Item key="6">冒泡排序</Menu.Item>
                    <Menu.Item key="7">冒泡排序</Menu.Item>
                    <Menu.Item key="8">冒泡排序</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" icon={<NotificationOutlined />} title="冒泡排序">
                    <Menu.Item key="9">冒泡排序</Menu.Item>
                    <Menu.Item key="10">冒泡排序</Menu.Item>
                    <Menu.Item key="11">冒泡排序</Menu.Item>
                    <Menu.Item key="12">冒泡排序</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Content style={{ padding: '0 24px', minHeight: 280 }}>
                {
                  pulicvar.map((item,index)=>{
                    return (
                        <Descriptions title={item.name} key={index}>
                          <Descriptions.Item label={item.Introduction}>{item.title}</Descriptions.Item>
                          <Descriptions.Item label={item.process}>
                            <span style={{color:'#99CCFF'}}>{item.bubbles}</span>
                          </Descriptions.Item>
                          <Descriptions.Item label={item.understandingname}>
                            <List
                                size="large"
                                bordered
                                dataSource={item.understanding}
                                renderItem={item => <List.Item style={{color:"#6666CC"}} >{item}</List.Item>}
                            />
                          </Descriptions.Item>
                        </Descriptions>
                    )
                  })
                }
                <div style={{width:"100%",height:'auto',}}>
                      <div style={{width:"50%",height:'auto',float:'left'}}>
                        <Image
                            width={500}
                            src="https://bkimg.cdn.bcebos.com/pic/bf096b63f6246b60965c2634e6f81a4c510fa224?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxNTA=,g_7,xp_5,yp_5/format,f_auto"
                            preview={{
                              src: 'https://bkimg.cdn.bcebos.com/pic/bf096b63f6246b60965c2634e6f81a4c510fa224?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxNTA=,g_7,xp_5,yp_5/format,f_auto',
                            }}
                        />
                      </div>
                </div>

              </Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©算法学习</Footer>
        </Layout>
    );
  }
}
export default App;

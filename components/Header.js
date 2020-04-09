import React from 'react';
import '../static/style/components/header.css'
import { Row,Col,Menu, Divider} from 'antd';
import {
    HomeOutlined,
    AimOutlined,
    ChromeOutlined
  } from '@ant-design/icons';
const Header=()=>(
    <div className = 'header'>
        <Row type = 'flex' justify = 'center'> 
            <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className="header-logo">react测试</span>
                <span className='header-txt'>测试react开发组件</span>
            </Col>
            <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode = 'horizontal'>
                    <Menu.Item key = 'home'>
                    <HomeOutlined />
                        首页
                    </Menu.Item>
                    <Menu.Item key = 'video'>
                    <AimOutlined />
                        视频
                    </Menu.Item>
                    <Menu.Item key = 'life'>
                    <ChromeOutlined />
                        项目
                    </Menu.Item>
                </Menu>
            </Col>
        </Row> 
    </div>
)



export default Header
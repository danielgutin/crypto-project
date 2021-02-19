// --- React & Styling
import React from 'react'
import logo from '../../assets/logo.png';
import './TopNav.scss';
// --- components
import { Layout, Menu } from 'antd';
import { useHistory } from 'react-router-dom';


const { Header } = Layout;

export default function TopNav() {
    const history = useHistory();

    return (
        <Header className='header'>
            <div className="logo">
              <img src={logo} alt="Coin"/>
            </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item onClick={() => history.push('/users')} key="1">Users</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
    )
}

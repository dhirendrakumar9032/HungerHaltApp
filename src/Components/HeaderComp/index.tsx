import React from "react";
import { Avatar, Dropdown, Image, List, MenuProps, Space } from "antd";
import "./index.scss";
import { MenuOutlined } from "@ant-design/icons";

const Header = () => {
  const headerLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
    { title: "Cart", link: "/cart" },
  ];

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a target="_blank" href="https://www.antgroup.com">
          home
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a target="_blank" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      ),
    },
  ];

  return (
    <nav className="header">
      <Space className="header-title">
        <Image
          src="https://icons.iconarchive.com/icons/sonya/swarm/256/Mayor-Fast-Food-icon.png"
          preview={false}
          width={80}
        />
        <h1>HungerHalt</h1>
      </Space>
      <Space className="nav-items">
        <ul>
          {headerLinks.map((links) => (
            <li>{links.title}</li>
          ))}
        </ul>
      </Space>
      <Dropdown
        menu={{ items }}
        placement="bottomLeft"
        className="links-dropdown"
      >
        <MenuOutlined />
      </Dropdown>
    </nav>
  );
};

export default Header;

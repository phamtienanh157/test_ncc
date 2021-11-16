import React from "react";
import "./SideBar.scss";

function SideBarItem(props) {
  return (
    <div className="sidebar-item">
      <span>{props.name}</span>
    </div>
  );
}

export default function SideBar() {
  const menu = ["Home", "Services", "News", "Blog", "Contact"];

  return (
    <div className="sidebar">
      {menu.map((value, index) => (
        <SideBarItem key={index} name={value} />
      ))}
    </div>
  );
}

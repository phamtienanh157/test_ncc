import React from "react";
import Logo from "../../assets/logo.png";
import Card from "../../components/Card/Card";
import icon_css from "../../assets/css-icon.png";
import icon_html from "../../assets/html-icon.png";
import icon_url from "../../assets/url-icon.png";

import "./Home.scss";

export default function Home() {
  return (
    <div className="container">
      <section className="logo-wrapper">
        <img src={Logo} alt="logo" />
      </section>
      <section className="header">
        <h4>Lorem ipsum dolor sit asmet?</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </p>
      </section>
      <section className="content">
        <Card icon={icon_css} />
        <Card icon={icon_html} />
        <Card icon={icon_url} />
      </section>
    </div>
  );
}

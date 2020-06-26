import React from "react";
import { connect } from "react-redux";

function Header({ title, subtitle }) {
  return (
    <header>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </header>
  );
}

export default connect((state) => ({
  title: state.title,
  subtitle: state.subtitle,
}))(Header);

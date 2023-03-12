import React from "react";
import { Container } from "../components/Container/Container";
import { ReactComponent as Logo } from "./../assets/svg/brain.svg";

import "./Layout.css";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="App-header" role="banner">
        <Container>
          <div className="header-content">
            <Logo />
            <p>Animals memory</p>
          </div>
        </Container>
      </header>
      <Container>
        <main role="main">{children}</main>
      </Container>
      <footer role="contentinfo">&copy;Itxaso Laka 2023</footer>
    </div>
  );
};

import React from "react";
import { Container } from "../components/Container/Container";
import "./Layout.css";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="App-header" role="banner">
        <Container>
          <p>Memory game</p>
        </Container>
      </header>
      <Container>
        <main role="main">{children}</main>
      </Container>
      <footer role="contentinfo">&copy;Itxaso Laka 2023</footer>
    </div>
  );
};

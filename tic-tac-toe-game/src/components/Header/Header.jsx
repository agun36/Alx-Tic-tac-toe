import React from "react";
import "./Header.scss";
import gameLogo from '../../assets/game-logo.png';

const Header = () => {
  return (
    <header>
      <img src={gameLogo} alt="Hand-drawn Tic-Tac-Toe game board" />
      <h1>React Tic-Tac-Toe</h1>
    </header>
  );
};

export default Header;

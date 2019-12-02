import React, { Component } from "react";
import "../Styles/Menu.css";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as userActions from "../Actions/userActions";

class Layout extends Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    return (
      <div className="Wrapper">
        <button className="menuButton" onClick={this.handleClick}>
          MENU
        </button>

        <div className={this.state.open ? "menu-visible" : "menu-not-visible"}>
          <nav className="navMenu">
            <button className="exitButton" onClick={this.handleClick}>
              X
            </button>
          </nav>

          <nav className="navMenu">
            <Link to="/">
              <button className="opcButton" onClick={this.handleClick}>
                Inicio
              </button>
            </Link>
          </nav>

          <nav className="navMenu">
            <Link to="/destinos">
              <button className="opcButton" onClick={this.handleClick}>
                Destinos
              </button>
            </Link>
          </nav>
          {this.props.user.token === "" && (
            <nav className="navMenu">
              <button className="login" onClick={(event) => {
                
              }}>
                Iniciar Sesion
              </button>
              <button className="signup">
                Crear cuenta
              </button>
            </nav>
          )}
        </div>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ userReducer }) => userReducer;

export default connect(mapStateToProps, userActions)(Layout);

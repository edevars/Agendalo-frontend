import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as userActions from "../Actions/userActions";
import { connect } from "react-redux";

import "../Styles/signin.css";
import "../Styles/global.css";
import Layout from "../Components/Layout";
import { Redirect } from "react-router";

toast.configure();

class SignIn extends Component {
  state = {
    form: {
      name: "",
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  notifySuccesAuthentication = () =>
    toast.success("Usuario creado!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true
    });

  notifyErrorAuthentication = error =>
    toast.error(error, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true
    });

  render() {
    return (
      <Layout>
        {this.props.user.token !== "" && <Redirect push to="/" />}
        <nav>
          <h6 className="navBarTitle">Agéndalo</h6>
        </nav>
        <nav className="nav2">
          <h6 className="navBarSubtitle"> Sign up </h6>
        </nav>
        <form
          onSubmit={event => {
            event.preventDefault();
            const { name, username, password } = this.state.form;

            this.props.userSignUp(name, username, password);

            if (this.props.error) {
              this.notifyErrorAuthentication(
                `Ocurrio un error: ${this.props.error}`
              );
            } else {
              this.notifySuccesAuthentication();
            }
          }}
        >
          <input
            onChange={this.handleChange}
            name="name"
            type="text"
            placeholder="nombre"
          />
          <input
            onChange={this.handleChange}
            name="username"
            type="email"
            placeholder="E-mail"
          />
          <input
            onChange={this.handleChange}
            name="password"
            type="password"
            placeholder="Password"
          />
          <input type="submit" value="Sign up" />
        </form>
      </Layout>
    );
  }
}

const mapStateToProps = ({ userReducer }) => userReducer;

export default connect(mapStateToProps, userActions)(SignIn);

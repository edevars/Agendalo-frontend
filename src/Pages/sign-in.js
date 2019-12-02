import React, { Component } from "react";
import * as userActions from "../Actions/userActions";
import { connect } from "react-redux";
import "../Styles/forms.css";
import "../Styles/global.css";
import Layout from "../Components/Layout";
import { Redirect } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class SignIn extends Component {
  state = {
    form: {
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

  notifySuccesAuthentication = name =>
    toast.success(`Bienvenido de nuevo ${name}!`, {
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
          <h6 className="navBarSubtitle"> Sign in </h6>
        </nav>
        <form
          onSubmit={async event => {
            event.preventDefault();
            const { username, password } = this.state.form;

            await this.props.userLogin(username, password);

            if (this.props.error) {
              this.notifyErrorAuthentication(
                `Ocurrio un error: ${this.props.error}`
              );
            } else {
              this.notifySuccesAuthentication(this.props.user.name);
            }
          }}
        >
          <img
            src="https://cdn2.iconfinder.com/data/icons/essenstial-ultimate-ui/64/avatar-512.png"
            alt="avatar"
            className="avatar"
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
          <input type="submit" className="formButton" value="Log in" />
        </form>
      </Layout>
    );
  }
}

const mapStateToProps = ({ userReducer }) => userReducer;

export default connect(mapStateToProps, userActions)(SignIn);

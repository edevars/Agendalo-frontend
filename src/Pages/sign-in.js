import React, { Component } from "react";
import * as userActions from "../Actions/userActions";
import { connect } from "react-redux";
import "../Styles/signin.css";
import "../Styles/global.css";
import Layout from "../Components/Layout";
import { Redirect } from "react-router"

class SignIn extends Component {
  state = {
    form: {
      username: "",
      password: ""
    },
    logged: false
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

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
          onSubmit={event => {
            event.preventDefault();
            this.props.userLogin(
              this.state.form.username,
              this.state.form.password
            );

            if (this.props.user.token !== "") {
              this.setState({ logged: true });
            }
          }}
        >
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
          <input type="submit" value="Log in" />
        </form>
      </Layout>
    );
  }
}

const mapStateToProps = ({ userReducer }) => userReducer;

export default connect(mapStateToProps, userActions)(SignIn);

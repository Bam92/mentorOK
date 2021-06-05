import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
// import { FirebaseContext } from "../Firebase";

import { withFirebase } from "../Firebase";

import * as ROUTES from "../../constants/routes";

document.title = "Inscription - Mental";

const SignUpPage = () => (
  <div>
    <h1>Inscription</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { username, email, password, passwordConfirm, error } = this.state;

    const isInvalid =
      password !== passwordConfirm ||
      password === "" ||
      email === "" ||
      username === "";

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
          placeholder="Entrez votre nom complet"
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
          placeholder="Entrez votre adresse e-mail"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          placeholder="Entrez votre mot de passe"
        />
        <input
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={this.handleChange}
          placeholder="Entrez à nouveau votre mot de passe"
        />

        <button disabled={isInvalid} type="submit">
          Créez votre compte
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };

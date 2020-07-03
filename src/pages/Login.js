import React, { useEffect } from "react";

import { Card, Input, Button } from "../components/AuthForm";

const Login = () => {
  useEffect(() => {
    document.title = `Se connecter - MentorOK`;
  });

  const mainStyle = {
    marginBottom: "1em",
  };

  return (
    <Card role="main">
      <h1>Se connecter</h1>
      <form>
        <div style={mainStyle}>
          <label>Email </label>
          <br />
          <Input type="text" />
        </div>
        <div style={mainStyle}>
          <label>Mot de passe</label>
          <br />
          <Input type="password" />
        </div>
        <Button>Envoyer</Button>
      </form>
    </Card>
  );
};

export default Login;

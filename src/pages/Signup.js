import React, { useEffect } from "react";
import { Card, Input, Button } from "../components/AuthForm";

const Signup = () => {
  useEffect(() => {
    document.title = `Se connecter - MentorOK`;
  });

  const mainStyle = {
    marginBottom: "1em",
  };

  return (
    <Card role="main">
      <h1>Se joindre</h1>
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
        <div style={mainStyle}>
          <label>Confirmer mot de passe</label>
          <br />
          <Input type=                                                                                                                                                                                                                                                                                                                                                                                                                                                                            "password" />
        </div>
        <Button>Envoyer</Button>
      </form>
    </Card>
  );
};

export default Signup;

import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const styleInput = {
    padding: '.4em',
    width: '30vw',
    borderRadius: '5px'
  };

  const mainStyle = {
    marginBottom: "1em",
  };


  return (
    <main role="main">
      <form >
        <div style={mainStyle}>
          <label>Email ou nom d'utilisateur</label><br />
          <input type="text" style={styleInput} />
        </div>
        <div style={mainStyle}>
          <label>Mot de pass</label><br />
          <input type="password" style={styleInput} />
        </div>
        <div>
          <input 
            type="submit" 
            value="Envoyer" 
            style={{
              border: '2px solid ',
              padding: '.5em',
              borderRadius: '5px',
              color: '#fff',
              background: 'blue',
              fontSize:'inherit',
              cursor:'pointer'
            }}
          />
        </div>
      </form>
    </main>
  );
};

export default Login;

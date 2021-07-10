import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = `Mental - - Connecté`;
  });

  const styleFlex = {
    display: "flex",
  };

  const mainStyle = {
    margin: "9em 6em 4em 13em",
  };

  const artHeaderStyle = {
    zIndex: "-1",
    position: "absolute",
  };

  return (
    <main role="main">
      <header>
        <img
          src={"./arts/shape-light-coral-edge.svg"}
          alt=""
          style={{ ...artHeaderStyle, top: "3em", width: "35vw" }}
        />
        <img
          src={"./arts/shape-mint-edge.svg"}
          alt=""
          style={{
            ...artHeaderStyle,
            right: "0px",
            top: "0px",
            width: "20vw",
          }}
        />

        <div style={{ ...styleFlex, ...mainStyle }}>
          <div
            style={{
              width: "75%",
              marginRight: "3.5em",
              ...styleFlex,
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: "6em",
                textAlign: "right",
                marginBottom: ".5em",
              }}
            >
              <strong>Merci d'avoir crée votre compte </strong>
            </div>         
          </div>
          <div
            style={{
              width: "20%",
              marginRight: "0px",
              ...styleFlex,
            }}
          >
            <img
              src={"./images/mentorship.svg"}
              alt="mentor"
              style={{
                width: "100%",
                height: "30em",
              }}
            />
          </div>
        </div>
      </header>
    </main>
  );
};

export default Home;

import React, { useEffect } from "react";

import Mentor from "./Mentor";

export default props => {
  useEffect(() => {
    document.title = `MentorOK - Fais ton choix parmis nos mentors `;
  });

  return (
    <div
      style={{
        width: `80%`,
        margin: `auto`
      }}
    >
      <h1>Consulte nos Mentors </h1>
      {props.profiles.map((profile, idx) => (
        <Mentor key={idx} {...profile} path="/mentors" />
      ))}
    </div>
  );
};

import React, { useEffect } from "react";

import Mentor from "./Mentor";

export default (props) => {
  useEffect(() => {
    document.title = `Mental, great mentors and great mentees`;
  });

  return (
    <div
      style={{
        width: `80%`,
        margin: `auto`,
      }}
    >
      <h1>Consulte nos Mentors </h1>
      {props.profiles.map((profile) => (
        <Mentor key={profile.id} {...profile} path="/mentors" />
      ))}
    </div>
  );
};

import React, { useEffect } from "react";

import Mentor from "../Mentor";
import {profiles} from "../App"

export default () => {
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
      {profiles.map((profile) => (
        <Mentor key={profile.id} profile={profile} path="/mentors" />
      ))}
    </div>
  );
};

import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import Mentors from "./pages/Mentors";
import MentorCard from "./pages/Mentor";
import Navigation from "./components/Navigation";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import { AuthContext } from "./context/auth";
import PrivateRoute from "./PrivateRoute";
import * as ROUTES from "./constants/routes";

import "./App.css";

function App(props) {
  const getTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(getTokens);

  const setTokens = data => {
    localStorage.getItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <Navigation />

          <Switch>
            <Route path={ROUTES.MENTOR_PROFILE}>
              <Mentor />
            </Route>
            <Route path={ROUTES.MENTORS}>
              <Mentors profiles={profiles} />
            </Route>
            <Route exact path={ROUTES.SIGN_IN} component={Login} />
            <Route exact path={ROUTES.SIGN_UP} component={Signup} />
            <PrivateRoute path={ROUTES.ADMIN} component={Admin} />
            <Route exact path={ROUTES.LANDING} component={Landing} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

const NotFoundPage = () => {
  return (
    <div>
      <h3>404 - Not found</h3>
      <p>
        You should need to return <Link to="/">home</Link>
      </p>
    </div>
  );
};

export function Mentor() {
  const { mentorname } = useParams();
  let profile = profiles.find(mentor => mentor.name === mentorname);

  useEffect(() => {
    document.title = `MentorOK - Profile de ${mentorname}`;
  });

  return (
    <div
      style={{
        width: `80%`,
        margin: `auto`
      }}
    >
      <h1>Profile de {profile.name} </h1>
      <MentorCard {...profile} />
    </div>
  );
}

export const profiles = [
  {
    name: "Abel Mbula",
    img: "/images/abel-profile.png",
    title: "Developpeur Full Stack en JS",
    company: "Freelance",
    description:
      "Andrew Coco has been in the online marketing industry since 2012. Past work experience covers many aspects of digital marketing but SEO is the foundation. Having spent time in-house at a start up doing social media, email, and search marketing, at small agencies doing SEO, at global agencies handling SEM (Paid Search), Andrew gained a wealth of knowledge in many aspects of digital marketing channels and how they relate to business goals. Recently, Andrew was brought in as the Ecommerce SEO Manager at GUESS?. Inc. where he was able to ..",
    tag: "js react js nodejs",
    country: "drc",
    availability: "ok"
  },
  {
    name: "Sarah Lifaefi",
    img: "/images/abel-profile.png",
    title: "Front-end Dev",
    company: "Kali Academy",
    description:
      "Remarquez bien que cette fonctionnalité ne fait pas partie de React : elle est fournie par des bibliothèques tierces. React n’a pas d’opinion sur la manière dont les styles doivent être définis ; si vous avez un doute, une bonne manière de commencer consiste à définir vos styles dans des fichiers *.css séparés comme d’habitude et à y faire référence en utilisant",
    tag: "Angular Bootstrap",
    country: "drc",
    availability: "ok"
  },
  {
    name: "Ruth BOKOTA",
    img: "/images/abel-profile.png",
    title: "Full stack",
    company: "Infoset, Inc.",
    description: "lorem",
    tag: "python sql js django",
    country: "drc",
    availability: "ok"
  }
];

export default App;

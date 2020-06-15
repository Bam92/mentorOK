
import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import MentorCardList from './mentorCardList'
import MentorCard from './mentorCard'

import './App.css'
// import { useEffect } from "react";

function App() {
    
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/mentors'>Mentors</Link>
              </li>
              {/* <li>
                <Link to='/mentors/:mentorname'>Mentor</Link>
              </li> */}
            </ul>
          </nav>

          <Switch>
          <Route path="/mentors/:mentorname">
              <Mentor />
            </Route>
            <Route path="/mentors">
              <Mentors />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>     
    )

  }

  function Home() {
    useEffect(() => {
      document.title = `MentorOK - votre réussite professionnelle garentie!`
    })
    return (
      <div>
        <p>MentorOK est votre plateforme qui vous permet de grandir professionnellement </p>
        <p>Trouvez les mentors <Link to='/mentors'>ici</Link> </p>
      </div>
   )
  }

  function Mentors() {
    useEffect(() => {
      document.title = `MentorOK - Liste des nos mentors `
    })
    return (
      <div style={{
        width: `80%`,
        margin: `auto`
      }}>
        <h1>Consulte nos Mentors </h1>
        <MentorCardList profiles={profiles} />
      </div>
    )
  }

  function Mentor() {
    const { mentorname } = useParams()
    let profile = profiles
      .find(mentor => mentor.name === mentorname)
    
    useEffect(() => {
      document.title = `MentorOK - Profile de ${mentorname}`
    })
    return (
      <div style={{
        width: `80%`,
        margin: `auto`
      }}>
        <h1>Profile de {profile.name} </h1>
        <MentorCard  {...profile} />
      </div>
    )
  }

  const profiles = [
    {
      name: "Abel Mbula",
      img: "/images/abel-profile.png",
      title: "Developpeur Full Stack en JS",
      company: "Freelance",
      description: "Andrew Coco has been in the online marketing industry since 2012. Past work experience covers many aspects of digital marketing but SEO is the foundation. Having spent time in-house at a start up doing social media, email, and search marketing, at small agencies doing SEO, at global agencies handling SEM (Paid Search), Andrew gained a wealth of knowledge in many aspects of digital marketing channels and how they relate to business goals. Recently, Andrew was brought in as the Ecommerce SEO Manager at GUESS?. Inc. where he was able to ..",
      tag: "js react js nodejs",
      country: "drc",
      availability: "ok"
    },
    {
      name: "Sarah Lifaefi",
      img: "/images/abel-profile.png",
      title: "Front-end Dev",
      company: "Kali Academy",
      description: "Remarquez bien que cette fonctionnalité ne fait pas partie de React : elle est fournie par des bibliothèques tierces. React n’a pas d’opinion sur la manière dont les styles doivent être définis ; si vous avez un doute, une bonne manière de commencer consiste à définir vos styles dans des fichiers *.css séparés comme d’habitude et à y faire référence en utilisant",
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
  ]
  export default App
  

import React, { useEffect } from 'react'
import {
  useParams
} from "react-router-dom";

import MentorCardList from './mentorCardList'
import MentorCard from './mentorCard'
import Nav from './components/Navbar'
import Landing from './components/Home'

import './App.css'

function App() {
    
    return (
      <Nav />
        
    )

  }

  export function Home() {
    useEffect(() => {
      document.title = `MentorOK - Connecter les débutants aux mentors pros!`
    })
    return (
      <div>
        <Landing />
       
      </div>
   )
  }

  export function Mentors() {
    useEffect(() => {
      document.title = `MentorOK - Fais ton choix parmis nos mentors `
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

  export function Mentor() {
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
  
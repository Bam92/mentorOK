
import React from 'react'

import MentorCardList from './mentorCardList'

function App() {
    
    return (
      <div>
        <h1>Consulte nos Mentors </h1>
        <MentorCardList profiles={profiles} />
      </div>
    )

  }

  const profiles = [
    {
      name: "Abel Mbula",
      img: "/images/abel-profile.png",
      title: "Developpeur Full Stack en JS",
      company: "Freelance",
      description: "lorem",
      tag: "js react js nodejs",
      country: "drc",
      availability: "ok"
    },
    {
      name: "Sarah Lifaefi",
      img: "/images/abel-profile.png",
      title: "Front-end Dev",
      company: "Kali Academy",
      description: "lorem",
      tag: "Angular Bootstrap",
      country: "drc",
      availability: "ok"
    },
    {
      name: "Ruth BOKOTA",
      img: "/images/abel-profile.png",
      title: "Full stack",
      company: "xyz",
      description: "lorem",
      tag: "python sql js django",
      country: "drc",
      availability: "ok"
    }
  ]
  export default App
  
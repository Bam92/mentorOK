
import React from 'react'

const mentorCard = (props) => {
  const profile = props

  return (   
    
      <div style={{display: `flex`}}>
        <img alt="mentor pic" src={profile.img}
          style={{
            width: `5.5em`,
            height:`5.5em`,
            borderRadius: `50%`
          }}
        />
        <div className="mentor-info">
          <h2> {profile.name} </h2>
          <h3> {profile.title} - {profile.company} </h3>
          <p>{profile.description}</p>
          <p>{profile.tag}</p>
        </div>
       </div>
  )
     }


  export default mentorCard
  
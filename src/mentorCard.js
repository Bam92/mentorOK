
import React from 'react'

const mentorCard = (props) => {
  const profile = props
  const style = {
    display: 'flex',
    border: '2px solid green',
    marginBottom: `1.5em`,
    background: '#fff',
    padding: '1.5em',
    borderRadius: '.3em'
  }

  return (   
    
      <div style={style}>
        <img alt="mentor pic" src={profile.img}
          style={{
            width: `7.5em`,
            height:`7.5em`,
            borderRadius: `50%`,
            margin: `0 3em`
          }}
        />
        <div 
          className="mentor-info"
          style={{
            width: `80%`
          }}
        >
          <h2> <a href={'mentors/' + profile.name}>{profile.name}</a> </h2>
          <h3> {profile.title} - {profile.company} </h3>
          <p 
            style={{
              margin: `1.5em 0`,
              lineHeight: `1.5`
            }}
          >
            {profile.description}
           </p>
          <p>{profile.tag}</p>
        </div>
       </div>
  )
     }


  export default mentorCard
  
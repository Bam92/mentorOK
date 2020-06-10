
import React  from 'react'

import MentorCard from './mentorCard'

export default (props) => {

  return (
    <>
      { props.profiles.map(profile => <MentorCard key={profile.id} {...profile} />) }
        
    </>
)
  
}

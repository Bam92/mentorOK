
import React  from 'react'

import MentorCard from './mentorCard'

export default (props) => {

  return (
    <>
      { props.profiles.map((profile, idx) => <MentorCard key={idx} {...profile} />) }
        
    </>
)
  
}

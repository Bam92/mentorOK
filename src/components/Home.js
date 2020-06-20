
import React from 'react'
import {  
    Link,
  } from "react-router-dom";

// import Footer from './Footer'

const Landing = () => {
  
  const styleFlex = {
    display: 'flex',
  }

  const mainStyle = {
    margin: '9em 6em 4em 13em'     
  }

  const artHeaderStyle = {
    zIndex: '-1', position: 'absolute'
  }

  return (   
    <main role='main' >
          {/* Main section */}
         
          <header> 
            <img src={'./arts/shape-light-coral-edge.svg'} alt=''
            style={{ ...artHeaderStyle, top: '3em', width: '35vw'  }} 
            />
            <img src={'./arts/shape-mint-edge.svg'} alt='' 
            style={{ 
              ...artHeaderStyle, 
              right: '0px', 
              top: '0px', 
              width: '20vw'  }}
            />
            
            <div style={{...styleFlex, ...mainStyle}}>
              <div style={{
                    width: '75%',
                    marginRight: '3.5em',
                    ...styleFlex,
                    flexDirection: 'column'
                }}>
                <div style={{
                    fontSize: '6em',
                    textAlign: 'right',
                    marginBottom: '.5em'
                }}> 
                    <strong>Un mentor dédié pour votre réussite professionnelle </strong>
                
                </div>
                
                <Link to="/mentors" style={{ textDecoration: 'none', alignSelf: 'flex-end', fontSize: '1.5em', color: 'black' }} >
                  <div style={{
                    justifySelf: 'end',
                    width: '8em',
                    textAlign: 'center',
                    border: '2px solid ',
                    borderRadius: '5px',
                    padding: '1em',
                    
                  }}>Trouves-en ici!</div>
                </Link>
                
            </div>
              <div style={{
                width: '20%',
                marginRight: '0px',
                ...styleFlex,
              }}>
                <img src={'./images/mentorship.svg'} alt='mentor'
                  style={{
                    width: '100%',
                    height: '30em'
                  }}
                /> 
              </div>
            </div>
          </header>
          {/* <section className="why_mentorOK" style={styleFlex} >
              <div>Pourquoi choisir MentorOK?</div>
              <div>reson here</div>
          </section> */}

          {/* <Footer /> */}
          </main>
  )
}

export default Landing
  
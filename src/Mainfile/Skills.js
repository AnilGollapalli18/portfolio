
// USING USE EFFECT HOOK FOR SKILLS
import React, { useEffect, useState } from 'react';

const Skills = () => {

  const [skills, setSKills] = useState({
    frontend : [],
    backend : []
  });

  useEffect(()=>{
    const fetchSkills = () => {
      const skilldata = {
        frontend :['HTML','CSS','JAVASCRIPT','BOOTSTRAP','REACTJS','REDUX'],
        backend : ['SQL','MONGODB','DJANGO','PYTHON',]
      }
      setSKills(skilldata)
    }
    fetchSkills()
  },[])
  
    return (
        <div className='skills' id='skills'>
          <h2>Skills</h2>
          <div className='skill-list'>
            <div className='skill-front'>
              <h3>Frontend</h3>
              <ul>
                {skills.frontend.map((skill,index) => {
                  return(
                  <li  key={index} className='skill-index'>{skill}</li>
                  )
                })}
              </ul>
            </div>

            <div className='skill-back'>
                <h3>Backend</h3>
                <ul>
                  {skills.backend.map((skill,index)=>{
                    return(
                      <li key={index} className='skill-index'>{skill}</li>
                    )
                  })}
                </ul>
            </div>
          </div>
        </div>
    );
};

export default Skills;
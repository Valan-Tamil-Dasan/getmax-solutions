// TeamSection.js
import React from 'react';
import Header from './Header';
import TeamMemberCard from './TeamMemberCard';
import './TeamSection.css';
import {NavBar} from '../../components'
// Import teamMembers from the separate data file
import { teamMembers } from './teamData';
import Team_img from './Assets/team-img2.png';
import {Contact} from '../../containers'

const TeamSection = () => {
  return (
    
    <div className='mainteam-sep-color'>
    <NavBar/>
    <div className="mainteam-sep-mainblock mainteam-sep-con ">
      <Header/>
      <div className="mainteam-sep-mainblock1">
        <div className='mainteam-sep-left-porsion'>
            <TeamMemberCard
              classN='mainteam-sep-mainblock2'
              name='XXXXXX'
              position='Founder/CEO'
              imgSrc={Team_img}
              githubUrl=""
              linkedinUrl=""
              gmailUrl=""
            />
        </div>
        <div className='mainteam-sep-right-porsion'>
          <p>Not weekly or monthly like other sites out there. This ensures that we offer prospective homebuyers and investors with the freshest- hottest deals on the Internet.   
          </p>
          
        </div>
      </div>

      <div className="mainteam-sep-mainblock">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            position={member.position}
            imgSrc={member.imgSrc}
            githubUrl={member.githubUrl}
            linkedinUrl={member.linkedinUrl}
            gmailUrl={member.gmailUrl}
          />
        ))}
      </div>
      </div>
      <Contact/>
      </div>  
  );
};

export default TeamSection;





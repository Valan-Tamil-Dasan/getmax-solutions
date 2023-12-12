// TeamSection.js
import React from 'react';
import Header from './Header';
import TeamMemberCard from './TeamMemberCard';
import './TeamSection.css';

// Import teamMembers from the separate data file
import { teamMembers } from './teamData';
import {Link} from 'react-router-dom'

const TeamSection = () => {
  return (

    <div className='team-whole' id = "Team">
      <div className='team-div'>
      
        <div className="team-mainblock team-con">
          <Header/>
          <div className="team-mainblock-ww">
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
          <p className="Load">
          <Link to="/Team">Load more</Link>
          </p>
        </div>
      </div>
      <div className='team-div-mob'>

      <div className="team-cont-mob">
          <Header/>
          <div className="team-mainblock-ww">
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
          <p className="Load">
            <Link to="/Team">Load more</Link>
          </p>
        </div>


      </div>     
    </div>
  );
};

export default TeamSection;

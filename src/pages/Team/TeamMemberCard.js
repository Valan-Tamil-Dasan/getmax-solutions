// TeamMemberCard.js
import React from 'react';
import github_img from './Assets/github.jpeg';
import linkedin_img from './Assets/linkedin.jpeg';
import gmail_img from './Assets/gmail.jpeg';


const TeamMemberCard = ({ imgSrc, name, position, githubUrl, linkedinUrl, gmailUrl , classN}) => {
  return (
    <div className="mainteam-sep-cell-block   mainteam-sep-mk-tab-6 mainteam-sep-mk-mobile-12 mainteam-sep-mainblock-con" id={classN}>
      <div className="mainteam-sep-container-mainblock">
        <div className="mainteam-sep-flex-images-area">
          <img className="mainteam-sep-flex-image" src={imgSrc} alt={`${name}'s Photo`} />
        </div>
        <p className="mainteam-sep-member-names">{name}</p>
        <p className="mainteam-sep-member-domain-names">{position}</p>
        <div className="mainteam-sep-flex-social-icons">
          <a href={githubUrl} target="_blank">
            <img className="mainteam-sep-github-icon" src={github_img} alt="GitHub" />
          </a>
          <a href={linkedinUrl} target="_blank">
            <img className="mainteam-sep-linkedin-icon" src={linkedin_img} alt="LinkedIn" />
          </a>
          <a href={gmailUrl} target="_blank">
            <img className="mainteam-sep-gmail-icon" src={gmail_img} alt="Gmail" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;

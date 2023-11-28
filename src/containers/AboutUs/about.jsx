import React, { useState } from "react";
import "./aboutsyles.css"
import pic from "../../assets/3.png"
import circle from "../../assets/circle.png"


function About(){
    const [Word , setWord]=useState("Innovators at the forefront, we offer dynamic solutions in healthcare, digital marketing, training, HR RPO, and business consulting. Our adaptable team redefines industry standards, embodying a culture of continuous growth.");
    const [selectedDiv, setSelectedDiv] = useState(null);
    const handleWord = (newWord , divId) => {setWord(newWord); setSelectedDiv(divId);}
    const getDivStyle = (divId) => {
        return {
          fontWeight: divId === selectedDiv ? 'bold' : 'normal',
          fontSize: divId === selectedDiv ? "28px" : "22px",
        };
    };


    return( 
        <div className="page">
            <div className="left">
                <div className="container">
                    <img src={pic} alt="img" className="pic"/>
                    <p>{Word}</p>
                </div>
            </div>
            <h1>ABOUT US</h1>
            <div className="right">
                <div className="box">
                    <div className="group">
                        <img className="img" alt="Group" src={circle}  onClick={() => {handleWord("Innovators at the forefront, we offer dynamic solutions in healthcare, digital marketing, training, HR RPO, and business consulting. Our adaptable team redefines industry standards, embodying a culture of continuous growth."); setSelectedDiv(1);}}/>    
                        <div onClick={() => {handleWord("Innovators at the forefront, we offer dynamic solutions in healthcare, digital marketing, training, HR RPO, and business consulting. Our adaptable team redefines industry standards, embodying a culture of continuous growth."); setSelectedDiv(1);}} style={getDivStyle(1)}   className="text-wrapper">Who We Are</div>
                    </div>
                </div>
                <div className="box">
                        <img className="img" alt="Group" src={circle} onClick={() => {handleWord('Navigating the complexities of modern enterprises, we specialize in healthcare evolution, digital supremacy, talent incubation, and strategic consultancy. We craft bespoke solutions that propel businesses into a league of their own'); setSelectedDiv(2);}} />
                        <div onClick={() => {handleWord('Navigating the complexities of modern enterprises, we specialize in healthcare evolution, digital supremacy, talent incubation, and strategic consultancy. We craft bespoke solutions that propel businesses into a league of their own'); setSelectedDiv(2);}} style={getDivStyle(2)} className="text-wrapper">What We Do</div>    
                </div>
                <div className="box">
                    <div className="group">
                        <img className="img" alt="Group" src={circle} onClick={() => {handleWord("Fusing creativity, agility, and client-centric devotion, we intricately weave breakthroughs in healthcare, digital prominence, talent synergies, and strategic foresight. Our commitment to excellence manifests in tailored strategies for sustained triumph across diverse industries.");setSelectedDiv(3);}} />
                        <div onClick={() => {handleWord("Fusing creativity, agility, and client-centric devotion, we intricately weave breakthroughs in healthcare, digital prominence, talent synergies, and strategic foresight. Our commitment to excellence manifests in tailored strategies for sustained triumph across diverse industries.");setSelectedDiv(3);}} style={getDivStyle(3)}  className="text-wrapper">Our Approach</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;

import "../DigitalMarketing.css";
import pic7 from "../Assets/pic7.png";
import pic8 from "../Assets/pic8.png";
export default function DigitalMarketingFP(){
    return(<>
       <div className="DMFP-main">
        <div className="DMFP-first">
            <div className="DMFP-content">
                <div className="DMFP-heading"><p>Digital Marketing &</p><p>Web Designing</p></div>
                <div className="DMFP-subtitle"><p>Driving digital growth with precision</p></div>
                <div className="DMFP-buttons"><button className="button1">Contact us today!!!</button><button className="button2">Explore services</button></div>
            </div>
            <div className="DMFP-pic"><img src={pic7}></img></div>
        </div>
        <div className="DMFP-second">
            <div className="DMFP-textbox">
                <div className="DMFP-pic1"><img src={pic8}></img></div>
                <div className="DMFP-content1">
                    <div className="DMFP-title">Empowering Your Digital Presence with GetMax Digital Solutions</div>
                    <div className="DMFP-subbtitle">In the contemporary era, where one's digital footprint is synonymous with identity, GetMax Digital Solutions emerges as a dynamic force dedicated to elevating your online presence. We specialise in crafting tailored digital footprints designed exclusively for your business, establishing seamless connections with your audience. Our commitment extends to precision and perfect timing in every aspect of our work. Recognizing the critical importance of timing in the digital realm, we ensure that your message reaches your audience with utmost accuracy, leaving a lasting impact. Elevate your brand online with our tailored strategies, precise execution, and impactful influence. Thrive authentically in the digital realm - where innovation meets impact, your journey begins here!
</div>
                </div>
            </div>
        </div>
       </div>
    </>)
}
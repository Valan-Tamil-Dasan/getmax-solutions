import "../DigitalMarketing.css";
import pic21 from "../Assets/pic21.png"
import pic22 from "../Assets/pic22.png"
import pic23 from "../Assets/pic23.png"
import pic24 from "../Assets/pic24.png"
export default function Values(){
    return(<>
        <div className="V-main">
            <div className="V-first">
                <div className="V-logo"><img src={pic21}></img></div>
                <div className="V-title"><p><b>//</b> OUR VALUES</p></div>
                <div className="V-subtitle">What Sets Us Apart: Beyond the Ordinary</div>
            </div>
            <div className="V-second">
                <div className="V-card1">
                    <div className="V-pic"><img src={pic22}></img></div>
                    <div className="V-heading">In-Depth Customer Behaviour Analysis:</div>
                    <div className="V-desc">At GetMax Solutions, our approach transcends traditional demographic analysis. We delve into the intricacies of customer psychology,understanding not just who your audience is but why they make the decisions they do. This insight allows us to create campaigns that go beyond surface-level engagement, forging genuine connections that resonate with your audience on a deeper level.</div>
                    <div className="V-line"><hr></hr></div>
                </div>
                <div className="V-card2">
                    <div className="V-pic"><img src={pic23}></img></div>
                    <div className="V-heading">Precision Timing and Execution:</div>
                    <div className="V-desc">
                    Recognizing the critical importance of timing in the dynamic digital realm, we pride ourselves on our precision in message delivery. We understand that the impact of your message is often as dependent on when it reaches your audience as it is on the content itself. Our meticulous timing ensures that your message is not just heard but heard at the right moment, maximising its resonance and influence.
                    </div>
                    <div className="V-line"><hr></hr></div>
                </div>
                <div className="V-card1">
                    <div className="V-pic"><img src={pic24}></img></div>
                    <div className="V-heading">Measuring Results:</div>
                    <div className="V-desc">
                    At the core of our commitment is the promise of measurable outcomes. We believe that the success of your digital initiatives should not be a mystery. Through advanced analytics and performance tracking, we provide transparent and quantifiable insights into the impact of our strategies. This commitment to measurable results empowers you to gauge the effectiveness of your digital endeavours, making informed decisions and refining strategies for continued success.
                    </div>
                    <div className="V-line"><hr></hr></div>
                </div>
            </div>
        </div>
    </>)
}
import DigitalMarketingHeader from "./Components/DigitalMarketingHeader";
import DigitalMarketingLeft from "./Components/DigitalMarketingLeft";
import DigitalMarketingRight from "./Components/DigitalMarketingRight";
import DigitalMarketingFP from "./Components/DigitalMarketingFP";
import pic1 from "./Assets/pic1.png";
import pic2 from "./Assets/pic2.png";
import pic3 from "./Assets/pic3.png";
import pic4 from "./Assets/pic4.png";
import pic5 from "./Assets/pic5.png";
import pic6 from "./Assets/pic6.png";
import DigitalMarketingHeader2 from "./Components/DigitalMarketingHeader2";
import SolutionsGrid from "./Components/SolutionsGrid";
import Values from "./Components/Values";
import "./DigitalMarketing.css";
import {NavBar} from '../../components'
import {Contact} from '../../containers'

export default function DigitalMarketing(){
    return(<>
    <NavBar/>
    <div className="DigiMark">
    <DigitalMarketingFP/>
    <div className="DMR-dummy"></div>
    <DigitalMarketingHeader/>
    <DigitalMarketingRight
        heading="Expertise at Every Tier:"
        subtitle="Navigating your growth journey"
        desc="No matter the stage or industry of your company, GetMax Solutions offers expertise at every tier to guide you toward your goals. Whether you're a startup finding your footing or an established enterprise seeking innovation, our team of experts is here to accompany you through every phase of your journey."
        pic={pic1}
    />
    <DigitalMarketingLeft
        heading="Crafting a Powerful Brand Strategy"
        subtitle=""
        desc="Our commitment to your success begins with crafting a powerful brand strategy. We understand that your brand is the heart of your identity, and we work closely with you to develop strategies that resonate with your audience, foster brand loyalty, and position you as a leader in your industry."
        pic={pic2}
    />
    <DigitalMarketingRight
        heading="Devising a Content Marketing Plan"
        subtitle=""
        desc="In the ever-evolving digital landscape, content is king. Our experts specialise in devising content marketing plans that go beyond the ordinary. From compelling storytelling to strategic content distribution, we ensure that your brand's narrative not only captivates but also aligns seamlessly with your business objectives."
        pic={pic3}
    />
    <DigitalMarketingLeft
        heading="Brand Solutioning"
        subtitle=""
        desc="Our approach to brand solutioning is comprehensive, addressing challenges and unlocking opportunities. Whether you're seeking to reposition your brand or launch a new one, we bring strategic thinking and creative innovation to the table, ensuring your brand solution is not just effective but impactful."
        pic={pic4}
    />
    <DigitalMarketingRight
        heading="Digital Services:"
        subtitle=""
        desc="In the digital era, a strong online presence is non-negotiable. Our digital services encompass a spectrum of solutions, from optimising your online visibility through SEO to engaging your audience across various platforms through social media marketing. We tailor our digital services to suit your unique needs, ensuring a cohesive and effective online strategy."
        pic={pic5}
    />
    <DigitalMarketingLeft
        heading="Creative and CRM Development:"
        subtitle=""
        desc="Creativity is at the core of what we do. Our team excels in creative development, producing visually stunning and impactful assets that elevate your brand. Additionally, our expertise extends to CRM development, ensuring that your customer relationships are nurtured and leveraged for sustained business growth."
        pic={pic6}
    />
    <div className="DMR-dummy"></div>
    <div className="DMH-dummy"></div>
    <DigitalMarketingHeader2/>
    <SolutionsGrid/>
    <div className="DMH-dummy"></div>
    <div className="V-dummy"></div>
    <Values/>
    <div className="V-dummy"></div>
    </div>
    <Contact/>
    </>)
}
import "../DigitalMarketing.css";
import SolutionsCard from "./SolutionsCard";
import pic9 from "../Assets/pic9.png";
import pic10 from "../Assets/pic10.jpg";
import pic11 from "../Assets/pic11.png";
import pic12 from "../Assets/pic12.png";
import pic13 from "../Assets/pic13.png";
import pic14 from "../Assets/pic14.png";
import pic15 from "../Assets/pic15.png";
import pic16 from "../Assets/pic16.png";
import pic17 from "../Assets/pic17.png";
import pic18 from "../Assets/pic18.png";
import pic19 from "../Assets/pic19.png";
import pic20 from "../Assets/pic20.png";
export default function SolutionsGrid(){
    return(<>
        <div className="SG-main">
            <div className="SG-container">
                <SolutionsCard
                    title="Amazon Web Services"
                    pic={pic9}
                />
                <SolutionsCard
                    title="Adobe Cloud Suite"
                    pic={pic10}
                />
                <SolutionsCard
                    title="Adobe Premiere Pro"
                    pic={pic11}
                />
                <SolutionsCard
                    title="Figma"
                    pic={pic12}
                />
                <SolutionsCard
                    title="Flutter"
                    pic={pic13}
                />
                <SolutionsCard
                    title="FullStack Java Development"
                    pic={pic15}
                />
                <SolutionsCard
                    title="HTML, CSS and Javascript"
                    pic={pic16}
                />
                <SolutionsCard
                    title="MERN stack (MongoDB, Express.js, React, Node.js)"
                    pic={pic17}
                />
                <SolutionsCard
                    title="Azure"
                    pic={pic14}
                />
                <SolutionsCard
                    title="Devops"
                    pic={pic18}
                />
                <SolutionsCard
                    title="Power BI"
                    pic={pic19}
                />
                <SolutionsCard
                    title="tableau"
                    pic={pic20}
                />
            </div>
        </div>
    </>)
}
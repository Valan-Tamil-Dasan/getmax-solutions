import "../DigitalMarketing.css";
import pic9 from "../Assets/pic9.png";
export default function SolutionsCard(props){
    return(
        <div className="SG-card">
            <div className="SGC-logo">
                <img src={props.pic}></img>
            </div>
            <div className="SGC-title">{props.title}</div>
        </div>
    )
}
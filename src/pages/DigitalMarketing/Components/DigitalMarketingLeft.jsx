import "../DigitalMarketing.css";
export default function DigitalMarketingRight(props){
    return(<>
    <div className="DMR-dummy"></div>
    <div className="DML-main">
        <div className="DMR-content">
            <div className="DMR-heading"><p>{props.heading}</p><p>{props.subtitle}</p></div>
            <div className="DMR-desc">{props.desc}</div>
        </div>
        <div className="DMR-pic"><img src={props.pic}></img></div>
    </div>

    </>)
}
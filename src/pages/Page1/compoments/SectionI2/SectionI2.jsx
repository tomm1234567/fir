import "./SectionI2.css"
export default function SectionI2(props){
    return <div className="page1_s2_i">
        <div className="page1_s2_ii1">
            <div className={props.img}></div>
        </div>
        <div className="page1_s2_ii2">
            <h2 className="page1_s2_h2 gr">{props.title}</h2>
            <div className="page1_s2_p">{props.text}</div>
        </div>
    </div>
}
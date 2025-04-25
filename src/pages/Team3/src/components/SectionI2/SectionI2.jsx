import "./SectionI2.css"
export default function SectionI2(props){
    return <div className="s2_i">
        <div className="s2_ii1">
            <div className={props.img}></div>
        </div>
        <div className="s2_ii2">
            <h2 className="s2_h2">{props.title}</h2>
            <div className="s2_p">{props.text}</div>
        </div>
    </div>
}
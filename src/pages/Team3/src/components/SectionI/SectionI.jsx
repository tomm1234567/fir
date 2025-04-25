import "./SectionI.css"
export default function SectionI(props){
    return <div className={props.class}>
        <h1 className="s1_num">{props.number}</h1>
        <p className="s1_p">{props.text}</p>
    </div>
}
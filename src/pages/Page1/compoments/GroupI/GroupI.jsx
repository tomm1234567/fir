import "./GroupI.css"
export default function GroupI(props){

return <div className="page1_groupI">
    <p className="page1_ff gr">{props.text}</p>
    <div className="page1_group1">
        <img src={props.images} />
    </div>
    <p className="page1_ff gr">{props.title}</p>
</div>

}
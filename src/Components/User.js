import classes from "./User.module.css"

function User(props){
    return (
        <div className={props.user.isWinner ? classes.winner : classes.loser}>
            <ul>
                <img src={props.user.picture} alt="doesnt work"></img>
                <li>{props.user.time}</li>
                <li>{props.user.fullName}</li>
                <div>
                </div>
                <li>Gender: {props.user.gender === "male" ? "M" : "F" }</li>
                <li>Phone nr: {props.user.phone}, Cell:{props.user.cell}</li>
                <li>{props.user.location}</li>
                <li>Nationality: {props.user.nat}</li>
            </ul>
        </div>
    )
}

export default User

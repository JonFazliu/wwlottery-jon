// calls the parent generateUser function, creating a new user using information from the api

function GenerateUserButton(props){
    return <button className="home" onClick={props.onClick}>Generate user</button>
}

export default GenerateUserButton
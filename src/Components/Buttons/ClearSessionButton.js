import { useDispatch } from "react-redux"
import { clearUsers } from "../../features/userReducer"

// returns the stored users to the initial, empty values

function ClearSessionButton(){
    let dispatch = useDispatch()
    function clearUserClick(){
        dispatch(clearUsers(0))
    }
    return <button className="home" onClick={clearUserClick}>Clear session</button>
}

export default ClearSessionButton
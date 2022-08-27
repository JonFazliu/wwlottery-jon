import SortButton from "../Components/Buttons/SortButton"
import SaveToExcelButton from "../Components/Buttons/SaveToExcelButton";
import { useSelector } from "react-redux"
import User from "../Components/User"

function SessionPlayersPage(){
    function sortByDate(a,b){
        return (a.time < b.time) ? -1 : ((a.time > b.time) ? 1 : 0);
    }

    // getting the users and the sort status from redux
    const user = useSelector((state) => state.userState.value)
    const sorted = useSelector((state) => state.sortState.value)
    
    // creating a sorted array of users, that checks the sort status
    const sortedUsers = [...user.users].sort((a,b) => sorted.sort ? sortByDate(a,b) : sortByDate(b,a))

    // creating a list of user components from the sorted user array
    return(
        <div>
            <div>
                <SortButton/>
            </div>
            {sortedUsers.map((user) => <User user = {user}/>)}
            <SaveToExcelButton/>
        </div>
    )
}
export default SessionPlayersPage
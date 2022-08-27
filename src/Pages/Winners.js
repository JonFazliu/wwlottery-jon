import SortButton from "../Components/Buttons/SortButton"
import { useSelector } from "react-redux"
import User from "../Components/User"

function WinnersPage(){
    function sortByDate(a,b){
        return (a.time < b.time) ? -1 : ((a.time > b.time) ? 1 : 0);
    }

    // getting users and sorted from redux
    const user = useSelector((state) => state.userState.value)
    const sorted = useSelector((state) => state.sortState.value)

    // creating an array of winners, and sorting them
    const winners = user.users.filter((user) => user.isWinner)
    const sortedWinners = [...winners].sort((a,b) => sorted.sort ? sortByDate(a,b) : sortByDate(b,a))

    // creating a list of the User component with the winners array
    return(
        <div>
            <div>
                <SortButton toggled = {false}/>
            </div>
            {sortedWinners.map((user) => <User user = {user}/>)}
        </div>
    )
}

export default WinnersPage
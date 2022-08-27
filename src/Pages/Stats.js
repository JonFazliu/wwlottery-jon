import SortButton from "../Components/Buttons/SortButton"
import { useSelector } from "react-redux"

function StatsPage(){
    function sortByAmount(a,b){
        return (a[1] < b[1]) ? -1 : ((a[1] > b[1]) ? 1 : 0);
    }
    // getting the sort and users from redux
    const user = useSelector((state) => state.userState.value)
    const sorted = useSelector((state) => state.sortState.value)

    // creating an array of nationalities, and their user amounts, then sorting
    const nationalities = user.users.map((user) => user.nat)
    const nationatlitiesCount = [...new Set(nationalities)].map((nat) => [nat, nationalities.filter(x => x === nat).length])
    const sortedNationalities = nationatlitiesCount.sort((a,b) => sorted.sort ? sortByAmount(a,b) : sortByAmount(b,a))


    // creating a list item for every item in the sorted nationalities
    return(
        <div>
            <div>
                <SortButton toggled = {false}/>
            </div>
            <ul>
                {sortedNationalities.map((item) => <li key={item[0]}>{item[0]}: {item[1]}</li>)}
            </ul>
        </div>
    )
}

export default StatsPage
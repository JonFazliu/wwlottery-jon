import { useSelector,useDispatch } from "react-redux"
import { sort } from "../../features/sortReducer"

//the button that allows you to sort page by ascending or descending order

function SortButton(props){
    const sorted = useSelector((state) => state.sortState.value)
    const dispatch = useDispatch()
    function handleClick(){
        dispatch(sort(0))
    }
    return (
    <div>
        <span className="text">Sort by: </span>
        <button className="sort" onClick={handleClick}>{ sorted.sort ? "Ascending" : "Descending"}</button>
    </div>
    )
}

export default SortButton
import { useSelector } from "react-redux"

// lets you save the user list to excel

function SaveToExcelButton(){
    const user = useSelector((state) => state.userState.value)
    const XLSX = require('xlsx')
    const userWS = XLSX.utils.json_to_sheet(user.users)
    const wb = XLSX.utils.book_new(userWS) 
    XLSX.utils.book_append_sheet(wb, userWS, "Lottery Users")

    function exportToExcel(){
        XLSX.writeFile(wb,  "Lottery.xlsx ")
    }

    return <button className="excel" onClick={exportToExcel}>Save to excel</button>
}

export default SaveToExcelButton
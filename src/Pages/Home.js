import GenerateUserButton from "../Components/Buttons/GenerateUserButton"
import ClearSessionButton from "../Components/Buttons/ClearSessionButton"
import User from "../Components/User"
import { useSelector, useDispatch } from "react-redux"
import { generateUser } from "../features/userReducer"

function HomePage() {
    // getting the user array and the current user from redux
    const user = useSelector((state) => state.userState.value)
    const dispatch = useDispatch()
    
    //fetching data from the api, and creating a new user based on that data
    function generateNewUser() {
        function handleThen(data){
            dispatch(generateUser(
                {
                    picture: data.results[0].picture.thumbnail,
                    fullName: `Title: ${data.results[0].name.title}, First: ${data.results[0].name.first}, Last: ${data.results[0].name.last}`,
                    email: data.results[0].email,
                    gender: data.results[0].gender  === "male" ? "M" : "F" ,
                    cell: data.results[0].cell,
                    phone: data.results[0].phone,
                    location:  `City: ${data.results[0].location.city}, Country: ${data.results[0].location.country}, Postcode: ${data.results[0].location.postcode}`,
                    nat: data.results[0].nat,
                    isWinner: Math.floor(Math.random()*100)+1 === data.results[0].dob.age,
                    age: data.results[0].dob.age,
                    timesPlayed: 1,
                    time: new Date().toISOString(),
                    id: data.results[0].id.value
                }))}
        
        fetch("https://randomuser.me/api?page=%7BpageIndex%7D").then(response => { return response.json() }
        ).then((data) => handleThen(data))
    }


    //generating the home page
    //the && check if there is a user, and they are a winner, and only then render their specific components
    return (
        <div>
            <GenerateUserButton onClick={generateNewUser} />
            <div>
                { user.currentUser.isWinner && <p>We have a winner!</p> }
                { user.currentUser.gender && <User user={user.currentUser}/>}
            </div>
            <ClearSessionButton />
        </div>
    )
}

export default HomePage
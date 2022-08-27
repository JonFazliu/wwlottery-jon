import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css'

// the website header, with links to every page
function MainNavigation(){
    return (
        <header className={classes.header}>
            <div className={classes.logo}>World Wide Lottery</div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/home"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/winners"}>Winners</Link>
                    </li>
                    <li>
                        <Link to={"session-players"}>Session Players</Link>
                    </li>
                    <li>
                        <Link to={"/stats"}>Stats</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
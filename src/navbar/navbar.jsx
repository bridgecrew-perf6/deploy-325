import {Link} from "react-router-dom"
export const Navbar = ()=>{
    return (<div id = "navbar">
        <Link to = "/">Home</Link>
        <Link to = "/section/history">History</Link>
        <Link to = "/section/mystery">Mystery</Link>
        <Link to = "/section/mythology">Mythology</Link>
        <Link to = "/section/Technology">Technology</Link>

        
    </div>)
}
import Button from "./Button";
import  {Route, Link} from 'react-router-dom';

const Welcome = () =>{

    return(
        <div>
            <h1>Hey Welcome to LeetCode</h1>
            <Link to='problem/1'><Button name="Click to View Problem" /></Link>
        </div>
    )

}

export default Welcome;
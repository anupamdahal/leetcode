import "../styles/Problem.css"
import Description from "./Description";
import Editor from "./Editor";

const Problem = ()=>{

    return(
        <div className="container">
            <Description />
            <Editor />
        </div>
    )
}

export default Problem;
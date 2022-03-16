// import "../styles/Problem.css"
import "../../styles/Problem.css"
import TabHeaderTop from "./TabHeaderTop.js";
import Editor from "./Editor";

const Problem = ()=>{

    return(
        <div className="container">
            <TabHeaderTop />
            <Editor />
        </div>
    )
}

export default Problem;
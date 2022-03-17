import "../../styles/Problem.css"
import { useSelector, useDispatch } from "react-redux";
import {languageActions} from "../../store/index";

const Pick_language = () =>{

    const language = useSelector((state) => state.language.language);
    const dispatch = useDispatch();

    const changeHandler = (e)=>{
        dispatch(languageActions.language(e.target.value.toString()));
    }

    return(
        <div className="pick_language_editor">
            <div className="language_div">
                <select onChange={changeHandler} id="language" className="language">
                    <option value="JavaScript">JavaScript</option>
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                </select>
            </div>
        </div>
    )
}

export default Pick_language;
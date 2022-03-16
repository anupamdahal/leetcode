import react from "react";
import { useSelector, useDispatch } from "react-redux";
import '../styles/Problem.css'
import Button from './Button';
import {headerActions} from "../store/index";

//import {Description, Discussion, Solution, Submission} from './tabHeader'; -> was not allowed
import Description from "./tabHeader/Description";
import Discussion from "./tabHeader/Discussion";
import Solution from "./tabHeader/Solution";
import Submission from "./tabHeader/Submission";

const TabHeaderTop = () =>{

    const {description, solution, discussion, submission} = useSelector((state) => state.header);

    const dispatch = useDispatch();

    const clickHandler = (name) =>{
        
        if(name === 'Description') dispatch(headerActions.description());
        else if(name === 'Solution') dispatch(headerActions.solution());
        else if(name === 'Discussion') dispatch(headerActions.discussion());
        else dispatch(headerActions.submission());   
    }

    return(
        <div className="problem">
            <div className="problem_info">
                <div className="button_container">
                    <Button click={clickHandler} name="Description" />
                    <Button click={clickHandler} name="Solution"/>
                    <Button click={clickHandler} name="Discussion"/>
                    <Button click={clickHandler} name="Submission"/>
                </div>
                <div className="info_container">
                    {description && <Description />}
                    {solution && <Solution />}
                    {discussion && <Discussion />}
                    {submission && <Submission />}
                </div>
            </div>
        </div>
    )
}

export default TabHeaderTop;
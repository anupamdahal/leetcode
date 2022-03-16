import react from "react";
import { useSelector, useDispatch } from "react-redux";
import '../styles/Problem.css'
import Button from './Button';
import {headerActions} from "../store/index";

const Description = () =>{

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
            <div className="button_container">
                <Button click={clickHandler} name="Description" />
                <Button click={clickHandler} name="Solution"/>
                <Button click={clickHandler} name="Discussion"/>
                <Button click={clickHandler} name="Submission"/>
            </div>
            <div className="info_container">
                {description && <h1>This is description</h1>}
                {solution && <h1>This is solution</h1>}
                {discussion && <h1>This is discussion</h1>}
                {submission && <h1>This is submission</h1>}
            </div>
        </div>
    )
}

export default Description;
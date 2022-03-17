import "../../styles/Problem.css"
import Button from '../utils/Button'
import Pick_language from "./pick-language";
import { useSelector } from "react-redux";

import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";
//import 'ace-builds/brace/ext/language_tools';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-terminal";

const Editor = () =>{

    const language = useSelector((state) => state.language.language);
    var code = "Pick a Language";

    if(language === 'JavaScript'){
        code = `console.log('hello World!!!')`;
        console.log('it is js');
    }else if(language === 'Java'){
        code = `System.out.println("Hello World");`;
    }else{
        code = `print("Hello World")`;
    }

    function onChange(newValue) {
        console.log("change", newValue);
    }

    return(
        <div className="problem">
            <Pick_language/>
            <div className="editor">
                <AceEditor
                placeholder="Placeholder Text"
                // mode="javascript"
                mode={language.toLowerCase()}
                theme="terminal"
                name="blah2"
                //onLoad={this.onLoad}
                onChange={onChange}
                fontSize={14}
                width="100%"
                height="100%"
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={code}
                setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2,
                }}/>
            </div>
            <div className="buttons_editor">
                <Button name="Run" />
                <Button name="Submit" />
            </div>
        </div>
    )
}

export default Editor;
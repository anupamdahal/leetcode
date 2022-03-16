// import '../styles/Problem.css'
import "../..//styles/Problem.css"
import Button from '../utils/Button'

import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";
//import 'ace-builds/brace/ext/language_tools';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";

import "ace-builds/src-noconflict/theme-terminal";

const Editor = () =>{

    const code = "hello world";
    function onChange(newValue) {
        console.log("change", newValue);
    }


    return(
        <div className="problem">
            <div className="editor">
                <AceEditor
                placeholder="Placeholder Text"
                mode="javascript"
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
                value={`console.log('hello world')`}
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
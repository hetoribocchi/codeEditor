import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledCompiler} from 'react-codemirror2'
import { IoMdArrowDropdown } from "react-icons/io";
import './Compiler.css'

const Compiler = (props) => {
    const {
        language,
        title,
        value,
        ontype
    } = props
    function handleChange(editor, data, value) {
        ontype(value)
    }
  return (
    <div className='compiler-container'>
        <div className='compiler-title'>
            <h3>{title} </h3> <IoMdArrowDropdown color='white' />
        </div>
        <ControlledCompiler
        onBeforeChange={handleChange}
        value={value}
        className='code-mirror-wrapper'
        options={{
            lineWrapping:true,
            lint: true,
            mode: language,
            lineNumbers: true,
            theme: 'material'

        }}
        />
    </div>
  )
}

export default Compiler
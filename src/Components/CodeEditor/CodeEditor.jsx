import React, { useEffect, useState } from 'react'
import './CodeEditor.css'
import logo from '../../assets/logo.svg'
import cricle from '../../assets/cricle.svg'
import { CiPlay1 } from "react-icons/ci";
import { LiaCloudUploadAltSolid } from "react-icons/lia";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineBolt } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import Compiler from '../Compiler/Compiler';



const CodeEditor = () => {
    const [html, setHtml] = useState('')
    const [js, setJs] = useState('')
    const [css, setCss] = useState('')
    const [srcDoc, setSrcDoc] = useState('')

    useEffect(()=>{
        const timeOut =setTimeout(()=>{
            setSrcDoc(
                `<html>
                    <body>${html}</body>
                    <style>${css}</style>
                    <script>${js}</script>
                </html>`
            )
        }, 250)
        return ()=> clearTimeout(timeOut)
    },[html,css,js])
 
  return (
    <div className="code-editor">
        <div className='navbar'>
                <div className="nav-right">
                        <img src={logo} alt=" " />
                        <CiPlay1 color='white'/>
                        <a> Run</a>
                        <LiaCloudUploadAltSolid color='white' />
                        <a> Save</a>
                        <FiMessageSquare color='white' />
                        <a> Colabarate</a>
                </div>
                <div className="nav-left">
                <MdOutlineBolt color='#ffb24e' />
                <p>Go PRO</p>
                <GiSettingsKnobs color='white' />
                <a> Settings</a>
                <a> Sign in</a>
                </div>
        </div>
        <div className='content'>
            <div className="right-box">
                <h2>Fiddle meta</h2>
                <input type="text" placeholder='Untitled fiddle'/>
                <input type="text" placeholder='No description'/>
               <h3 className='privte'> <img src={cricle} alt="" />Privte fiddle<button className='pro-btn'> Pro</button> </h3> 
               <h3>Groups <button className='pro-btn'>Pro</button></h3>
               <h3>Resources <p>URL</p><p>cdnjs</p></h3>
               <h3>Async requests</h3>
               <h3>Others (links,license)</h3>
               
            </div>
            <div className="middle-box">
                <div className='html'>
                   <Compiler 
                   value = {html}
                   title = 'HTML' 
                   language = 'xml' 
                   ontype = {setHtml}
                   />
                </div>
                <div className='js'>
                <Compiler
                language = 'javascript' 
                title = 'Javascript' 
                value = {js}
                ontype = {setJs}/>
                </div>
            </div>
            <div className="left-box">
            <div className='css'>
            <Compiler 
            language = 'css' 
            title = 'CSS' 
            value = {css}
            ontype = {setCss} 
            />
            </div>
            <div className='output'>
                <iframe className='results'
                srcDoc = {srcDoc}
                 title='output' sandbox='allow-scripts'
                width='100%' height="100%" frameBorder='0' >
                
                </iframe>
                <iframe className='log-hide'
                title='output' sandbox='allow-scripts'
                width='100%' height="100%" frameBorder='0'></iframe>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CodeEditor
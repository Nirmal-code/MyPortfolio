import React, {Component} from 'react';

import python from './../../images/python.png';
import java from './../../images/java.png';
import c from './../../images/c.png';
import bash from './../../images/bash.png';
import git from './../../images/git.png';
import javascript from './../../images/javascript.png';
import matlab from './../../images/matlab.png';
import sql from './../../images/sql.png';
import react from './../../images/react.png';
import nodejs from './../../images/node.png';
import gatsby from './../../images/gatsby.png';
import r from './../../images/r.png';
import html from './../../images/html.png';
import css from './../../images/css.png';
import treesitter from './../../images/tree-sitter.png';


export default class Skills extends Component{

    render(){
        return(
            <div id="skills" className='h-fit h-fit mb-10 w-[100vw] mt-[2vw]'>
                <h1 className='sm:text-[3.5vw] text-[5vw] ml-[5%] mb-2 text-white font-bold'>&lt;Skills / &gt;</h1>
                <div className="grid grid-cols-5 sm:gap-10 ml-[20vw] justify-center items-center w-[60vw] mt-[2vw]">
                    <img src={python} alt="python" />
                    <img src={java} alt="java" />
                    <img src={git} alt="git" />
                    <img src={c} alt="C" />
                    <img src={bash} alt="bash" />
                    <img src={javascript} alt="javascript" />
                    <img src={matlab} alt="matlab" />
                    <img src={sql} alt="sql" />
                    <img src={react} alt="react" />
                    <img src={nodejs} alt="nodejs" />
                    <img src={gatsby} alt="gatsby" />
                    <img src={r} alt="R" />
                    <img src={html} alt="html" />
                    <img src={css} alt="css" />
                    <img src={treesitter} alt="tree-sitter" />

                </div>


            </div>
        )
    }
}
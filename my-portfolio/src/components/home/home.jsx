import Typed from 'react-typed';
import React,{ Component } from 'react';
import my_bitmoji from '../../images/home_image.png';

import {AiOutlineMail} from 'react-icons/ai'



export default class Home extends Component{
    render(){
        return(
            <div id="home" className='h-fit text-white h-fit w-[100vw] mt-[13vw]'>

                <div className='grid grid-cols-[75%_25%] flex'>
                    <div className='grid grid-rows-auto mx-[5vw]' >
                        <h1 className='font-bold text-[4.5vw] my-0.5 leading-none'>Hi, I'm<br /> Nirmal Chaudhari <br /> &lt;
                            <Typed
                                strings={[
                                    ' Software Developer /',' Engineering Student /', ' Innovator /', ' Computer Nerd /']}
                                typeSpeed={60}
                                backSpeed={70}
                                loop
                                cursorChar='>'> 
                            </Typed>
                        </h1>
                        <p className='text-[2vw] my-[1.5vw] leading-none' >
                            Skilled at developing, testing, and implementing efficient codes to perform various tasks
                        </p>
                        <div className='my-[2vw] flex'> 
                            <button className='font-semibold text-[1.5vw] hover:text-white w-fit p-[1vw] mr-[3vw] hover:bg-transparent border-[1px] hover:border-white hover:cursor-pointer border-black bg-white text-black rounded-lg'>Download Resume</button>
                            <button className='font-semibold flex items-center text-[1.5vw] hover:text-white w-fit p-[1vw] mr-[3vw] hover:bg-transparent border-2 hover:border-white hover:cursor-pointer border-black bg-white text-black rounded-lg'>
                                <span className='align-middle'><AiOutlineMail /></span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src={my_bitmoji} className='absolute w-[40vw] right-0 top-0' alt='my-bitmoji'></img>  
                    </div>
                </div>

            </div>
        )
    }
}
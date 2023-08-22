import Typed from 'react-typed';
import React,{ Component } from 'react';
import my_bitmoji from '../../images/home_image.png';

import {AiOutlineMail} from 'react-icons/ai'



export default class Home extends Component{
    render(){
        return(
            <div className='h-fit text-white h-fit mb-20 pb-[10vh] w-[100vw] mt-[15vw]'>

                <div className='grid grid-cols-[75%_25%] flex'>
                    <div className='grid grid-rows-auto mx-[5vw]' >
                        <h1 className='text-[4.5vw] my-0.5'>Hi, I'm<br /> Nirmal Chaudhari <br /> &lt;
                            <Typed
                                strings={[
                                    ' Software Developer /',' Engineering Student /', ' Innovator /', ' Computer Nerd /']}
                                typeSpeed={60}
                                backSpeed={70}
                                loop
                                cursorChar='>'> 
                            </Typed>
                        </h1>
                        <p className='text-[2vw] my-2' >
                            Skilled at developing, testing, and implementing efficient codes to perform various tasks
                        </p>
                        <div className='my-2'> 
                            <button className='text-[1.5vw] text-white w-fit p-[1vw] mr-[3vw] bg-transparent border-[1px] border-white hover:cursor-pointer hover:border-black hover:bg-white hover:text-black rounded-lg'>Download Resume</button>
                            <button className='align-middle text-[1.5vw] text-white w-fit p-[1vw] mr-[3vw] bg-transparent border-2 border-white hover:cursor-pointer hover:border-black hover:bg-white hover:text-black rounded-lg'><AiOutlineMail /></button>
                        </div>
                    </div>
                    <div>
                        <img src={my_bitmoji} className='absolute w-[40vw] right-0 top-0' ></img>  
                    </div>
                </div>

            </div>
        )
    }
}
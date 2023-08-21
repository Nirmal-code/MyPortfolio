import Typed from 'react-typed';
import React,{ Component } from 'react';
import my_bitmoji from '../../images/home_image.png'



export default class Home extends Component{
    render(){
        return(
            <div className='h-fit text-white w-[100vw] mt-[15vw]'>

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
                    </div>
                    <div>
                        <img src={my_bitmoji} className='absolute w-[40vw] right-0 top-0' ></img>  
                    </div>
                </div>

            </div>
        )
    }
}
import {Component,React,useState} from 'react';


import {BiSolidHome} from 'react-icons/bi';
import {HiOutlineInformationCircle} from 'react-icons/hi';
import {MdWorkHistory} from 'react-icons/md';
import {GoProjectSymlink} from 'react-icons/go';
import {GiSkills} from 'react-icons/gi';



export default class navbar extends Component{

    render(){
        return(
            <div className="text-[3rem] sm:text-[3rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4.5rem] fixed bottom-7 left-[10vw] p-3 rounded-full w-[80vw] bg-[#0284c7] bg-[#27272a] shadow-1xl shadow-[#71717a] border-2 border-[#a1a1aa]">
                <div className="flex justify-center">
                    <a href="#"><BiSolidHome className="p-3 text-black bg-white rounded-lg hover:scale-125 hover:bg-transparent hover:text-white hover:border-white border-2 border-black hover:cursor-pointer mr-2" /></a>
                    <a href="#about"><HiOutlineInformationCircle className="p-3 text-black bg-white hover:scale-125 rounded-lg hover:bg-transparent hover:text-white hover:border-white border-2 border-black hover:cursor-pointer mr-2" /></a>
                    <a><MdWorkHistory className="p-3 text-black bg-white rounded-lg hover:scale-125 hover:bg-transparent hover:text-white hover:cursor-pointer hover:border-white border-2 border-black mr-2 " /></a>
                    <a><GoProjectSymlink className="p-3 text-black hover:scale-125 bg-white hover:bg-transparent hover:text-white hover:cursor-pointer hover:border-white border-2 border-black rounded-lg mr-2" /></a>
                    <a><GiSkills className="p-3 text-black bg-white hover:scale-125 hover:bg-transparent hover:text-white hover:cursor-pointer hover:border-white border-2 border-black rounded-lg" /></a>
                </div>
            </div>
        )
    }

}

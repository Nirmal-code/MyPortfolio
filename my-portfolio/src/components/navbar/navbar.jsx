import {Component,React,useState} from 'react';


import {BiSolidHome} from 'react-icons/bi';
import {HiOutlineInformationCircle} from 'react-icons/hi';
import {MdWorkHistory} from 'react-icons/md';
import {GoProjectSymlink} from 'react-icons/go';
import {GiSkills} from 'react-icons/gi';



export default class navbar extends Component{

    render(){
        return(
            <div className="z-50 text-[3rem] sm:text-[3rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4.5rem] fixed bottom-7 left-[10vw] p-3 rounded-full w-[80vw] bg-slate-300 bg-white bg-opacity-50 shadow-1xl shadow-[#71717a]">
                <div className="flex justify-center">
                    <a href="#"><BiSolidHome className="p-3 text-white bg-black rounded-lg hover:scale-125 border-2 border-black hover:cursor-pointer mr-2.5" /></a>
                    <a href="#about"><HiOutlineInformationCircle className="p-3 text-white bg-black rounded-lg hover:scale-125 border-2 border-black hover:cursor-pointer mr-2.5" /></a>
                    <a href="#experience"><MdWorkHistory className="p-3 text-white bg-black rounded-lg hover:scale-125 border-2 border-black hover:cursor-pointer mr-2.5" /></a>
                    <a><GoProjectSymlink className="p-3 text-white bg-black rounded-lg hover:scale-125 border-2 border-black hover:cursor-pointer mr-2.5" /></a>
                    <a><GiSkills className="p-3 text-white bg-black rounded-lg hover:scale-125 border-2 border-black hover:cursor-pointer" /></a>
                </div>
            </div>
        )
    }

}

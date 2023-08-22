import {Component,React,useState} from 'react';

import home from '../home/home';

import {BiSolidHome} from 'react-icons/bi';
import {HiOutlineInformationCircle} from 'react-icons/hi';
import {MdWorkHistory} from 'react-icons/md';
import {GoProjectSymlink} from 'react-icons/go';
import {GiSkills} from 'react-icons/gi';



export default class navbar extends Component{

    render(){
        return(
            <div className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl fixed bottom-10 left-[10vw] w-[80vw] translate-x-2 border-2 border-white">
                <div className="flex justify-center">
                    <a href="#home"><BiSolidHome className="p-3 text-black bg-white rounded hover:bg-transparent hover:text-white hover:cursor-pointer mr-2" /></a>
                    <a><HiOutlineInformationCircle className="p-3 text-black bg-white rounded hover:bg-transparent hover:text-white hover:cursor-pointer mr-2" /></a>
                    <a><MdWorkHistory className="p-3 text-black bg-white rounded hover:bg-transparent hover:text-white hover:cursor-pointer  mr-2 " /></a>
                    <a><GoProjectSymlink className="p-3 text-black bg-white hover:bg-transparent hover:text-white hover:cursor-pointer rounded mr-2" /></a>
                    <a><GiSkills className="p-3 text-black bg-white hover:bg-transparent hover:text-white hover:cursor-pointer  rounded" /></a>

                </div>

            </div>
        )
    }

}
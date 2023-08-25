import React,{Component} from 'react';

import Macademy from '../../images/Macademy.png';
import Pong from '../../images/pong.png'
import Humans from '../../images/humans.png';
import QArm from '../../images/q_arm.png';
import PProjects from '../../images/1P13.png';
import instacal from '../../images/instacal.png';
import Piraten from '../../images/Piraten.png';
import Terrain from '../../images/Terrain.png';
import GitMerge from '../../images/gitmerge.png'



import {AiFillGithub} from 'react-icons/ai';



export default class Projects extends Component{

    render(){
        return(
            <div id="projects" className='h-fit h-fit mb-10 w-[100vw] mt-[2vw]'>
                <h1 className='sm:text-[3.5vw] text-[5vw] ml-[5%] mb-2 text-white font-bold'>&lt;Projects / &gt;</h1>

                <Container Name="Git Merge ADV" Date="Aug 2023" Git="https://github.com/ace-design/git-merge-adv" Image={GitMerge} Des="Developed a new structured merge algorithm to improve source-code merging. Designed Abstract Syntax Trees to improve accuracy across multiple languages. Configured VCS like Git to use this merge tool, preventing potential merge conflicts. Tool written in Python." />
                <Container Name="Terrain Generation" Date="Apr 2023" Git="https://github.com/2AA4-W23/a4-urbanism-Nirmal-code" Image={Terrain} Des="Developed a terrain generator, similar to what developers did for games like Minecraft. User has full control over terrain type, temperature, humidity, shape, etc... Terrain generates randomly unless seed is given. Developed using Java, and Maven as the dependency manager." />
                <Container Name="Piraten Karpen" Date="Jan 2023" Git="https://github.com/Nirmal-code/PiratenKarpenGame" Image={Piraten} Des="Developed PiratenKapern game as part of a course project. Up to 2 players can play the game, and functionality resembles that of the actual game. Developed game using Java and Maven as the dependency manager." />
                <Container Name="InstaCal" Date="Jan 2023" Git="https://github.com/Nirmal-code/InstaCal-DeltaHacks9" Image={instacal} Des="DeltaHacks IX Submission: Application processes the image you upload to provide data on what you eat. It tells you the calories, carbs, fat and protein associated with your meal along with a brief description. Used React.js for the frontend, a YoloV5 model for the backend, and flask to create api calls that connect the two." />
                <Container Name="Macademy" Date="Aug 2022" Git="https://github.com/Nirmal-code/Macademy" Image={Macademy} Des="Website developed to help students develop more effective study habits. Features a planner page for students to track course work, and interval studying. Developed using React.js, Node.js, HTML and CSS" />
                <Container Name="1P13 Projects" Date="Sep 2021-Apr 2022" Git="https://abalone-bowler-f8e.notion.site/Nirmal-Chaudhari-6d456ba722de443eb8f0046fa48bbd7f" Image={PProjects} Des="Various projects I worked on in groups of 4-5 as part of my Eng 1P13 course in first year. Developed skills in Engineering Design, Python, AutoCAD, PrusaSlicer, Report Writing." />        
                <Container Name="Humans Project" Date="Feb 2022" Git="git@github.com:Nirmal-code/Humans-Project.git" Image={Humans} Des="Collaborated as a group of over 6 people in SFL to develop a website that helps give a voice to influential people in our socieity. Completed using React.js, Node.js, HTML and CSS." />
                <Container Name="Q-Arm Project" Date="Nov 2021" Git="https://github.com/Nirmal-code/Q-Arm_Project" Image={QArm} Des="Programmed a Q-Arm to work in surgical environments to sterilize equipment for use by responding to muscle sensor emulators. Developed using Python and a Raspberry Pi." />        
                <Container Name="Pong" Date="Jan 2020" Git="https://github.com/Nirmal-code/pong_game" Image={Pong} Des="2-Player game developed for people to play on their devices. Contains point system for users to keep score of who is winning. Developed using Lua through Love2D software." />




            </div>
        )
    }

}

function Container({Name, Date, Git, Image, Des}){
    return(
        <div className='grid grid-cols-[30vw_20vw_35vw] text-white ml-[7.5vw] w-[85vw] border-2 border-white rounded-xl bg-black mt-[10px]'>
            <img src={Image} alt={Name} className="w-[90%] h-[80%] rounded-lg relative ml-[5%] mt-[5%] " />
            <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-[3vw] font-medium">{Name}</h1>
                <h2 className="text-[1.5vw]">{Date}</h2>
                <a href={Git}><AiFillGithub className='text-[4vw] hover:scale-125'/></a>
            </div>
            <p className="text-[1.5vw] flex flex-col justify-center items-center">{Des}</p>

        </div>
    )
}
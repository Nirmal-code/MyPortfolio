import React, {Component} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {BsBriefcaseFill} from 'react-icons/bs';
import {MdVolunteerActivism} from 'react-icons/md';
import {MdSchool} from 'react-icons/md';

import McSCert from '../../images/McSCert.png';
import sfl from '../../images/sfl.png';
import archway from '../../images/archway.jpeg';
import uclub from '../../images/uclub.png';
import homedepot from '../../images/homedepot.png';
import formula from '../../images/formula.png';



export default class Experience extends Component{


    render(){
        return(
            <div id="experience" className='h-fit h-fit mb-10 w-[100vw] mt-[0vw]'>
                <h1 className='sm:text-[3.5vw] text-[5vw] ml-[5%] mb-2 text-white font-bold'>&lt;Experiences / &gt;</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        dateClassName={ 'text-black font-bold bg-white rounded-lg' }
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="May 2023 - Aug 2023"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<BsBriefcaseFill />}
                    >
                        <h3 className="vertical-timeline-element-title font-bold">Undergrad Software Research Intern</h3>
                        <h3 className="vertical-timeline-element-title font-bold">McSCert</h3>
                        <h4 className="vertical-timeline-element-subtitle">Hamilton, ON</h4>
                        <p>
                            Developed a new structured merge tool for Python and Java source code. Improved accuracy over existing solutions by almost 30%, and integrated it with Git software.
                        </p>
                        <p><b>Tools</b>: Git, Java, Python, Abstract Syntax Tree (AST), Concrete Syntax Tree (CST), Tree-Sitter, Gumtree, jDime, Spork</p>
                        <img className="w-[25%] h-fit relative left-[37.5%]" src={McSCert} alt='McSCert' />

                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="Sep 2021 - May 2023"
                        dateClassName={ 'text-black font-bold bg-white rounded-lg' }
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<BsBriefcaseFill />}
                    >
                        <h3 className="vertical-timeline-element-title font-bold">Web Developer</h3>
                        <h3 className="vertical-timeline-element-title font-bold">Software for Love</h3>
                        <h4 className="vertical-timeline-element-subtitle">Remote</h4>
                        <p>
                        Collaborated with experienced programmers using Git to develop websites using JavaScript frameworks for the purpose of making a positive difference in my community by recognizing pertinacious individuals and giving them a platform to talk to others. </p>
                        <p><b>Tools</b>: Git, JavaScript, NodeJS, React.js, HTML, CSS, Gatsby Cloud</p>

                        <img className="w-[25%] h-fit relative left-[37.5%]" src={sfl} alt='SFL' />

                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        dateClassName={ 'text-black font-bold bg-white rounded-lg' }
                        date="Sep 2022 - May 2023"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title font-bold">Archway Mentor</h3>
                        <h3 className="vertical-timeline-element-title font-bold">McMaster University</h3>
                        <h4 className="vertical-timeline-element-subtitle">Hamilton, ON</h4>
                        <p>
                            Mentored a group of 40 first-year undergraduate students to help them transition into a university environment. 
                        </p>
                        <p><b>Skills</b>: Collaborative Leadership, Mentoring, Jira, Event Planning</p>

                        <img className="w-[30%] h-fit relative left-[32.5%] rounded-lg" src={archway} alt='archway' />

                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        dateClassName={ 'text-black font-bold bg-white rounded-lg' }
                        date="Jun 2022 - Aug 2022"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<BsBriefcaseFill />}
                    >
                        <h3 className="vertical-timeline-element-title font-bold">Frontend Developer</h3>
                        <h3 className="vertical-timeline-element-title font-bold">uClub</h3>
                        <h4 className="vertical-timeline-element-subtitle">Remote</h4>
                        <p>
                            Used React to help build a large scaled project by developing the frontend code for various pages. Overall purpose of the project was to help students find academic resources more easily.
                        </p>
                        <p><b>Tools</b>: Git, React.js, JavaScript, HTML, CSS</p>

                        <img className="w-[30%] h-fit relative left-[32.5%] rounded-lg" src={uclub} alt='uclub' />

                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        dateClassName={ 'text-black font-bold bg-white rounded-lg' }
                        date="May 2022 - Aug 2022"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<BsBriefcaseFill />}
                    >
                        <h3 className="vertical-timeline-element-title font-bold">Sales Associate</h3>
                        <h3 className="vertical-timeline-element-title font-bold">Home Depot</h3>
                        <h4 className="vertical-timeline-element-subtitle">Brampton, ON</h4>
                        <p>
                            Collaborated with management and associates to manage inventory using MST Lite to increase accessibility of merchandise to customers.</p>
                        <p><b>Skills</b>: Communication, Inventory Management, Customer Engagement</p>

                        <img className="w-[30%] h-fit relative left-[32.5%] rounded-lg" src={homedepot} alt='homedepot' />

                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        dateClassName={ 'text-black font-bold bg-white rounded-lg' }
                        date="Oct 2021 - Jun 2022"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title font-bold">Programmer-Software & Vehicle Controls</h3>
                        <h3 className="vertical-timeline-element-title font-bold">Mac Formula Electric</h3>
                        <h4 className="vertical-timeline-element-subtitle">Hamilton, ON</h4>
                        <p>
                        Programmed a car's microcontrollers to adjust values of registers using C to ensure that car components interact accurately. Collaborated with other experienced programmers using the MATLAB and Simulink environments to create C programs using various cells in control systems.</p>
                        <p><b>Tools</b>: C, Matlab, Simulink, MicroControllers</p>

                        <img className="w-[30%] h-fit relative left-[32.5%] rounded-lg" src={formula} alt='formula' />

                    </VerticalTimelineElement>

                    </VerticalTimeline>

            </div>
        )
    }
}
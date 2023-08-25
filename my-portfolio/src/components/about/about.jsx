import React,{ Component, createRef  } from 'react';
import MyPic from '../../images/my_picture.jpg';
import Terminal from 'terminal-in-react';



export default class About extends Component{

    constructor(){
        super();
        this.state={
            input:'',
            output:"Welcome to my terminal. Enter 'help' to get started",
        }
        this.outputRef = createRef();


    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.outputRef.current.scrollTop = this.outputRef.current.scrollHeight;
    };

    render(){
        return(
            <div id="about" className='h-fit h-fit mb-10 w-[100vw] mt-[0vw]'>
                <h1 className='sm:text-[3.5vw] text-[5vw] ml-[5%] mb-2 text-white font-bold'>&lt;About Me / &gt;</h1>
                <div className="grid grid-cols-[35vw_65vw] items-center justify-center pt-[3vw] ml-[20%]">
                    <img src={MyPic} className="relative h-[35vw] rounded-xl"></img>
                    <div ref={this.outputRef} className="w-[50vw] max-h-[40vw] h-[40vw] bg-slate-950 border-2 border-grey overflow-scroll text-[1.5vw] text-emerald-600 text-semibold rounded-lg">
                        <div>
                            <p dangerouslySetInnerHTML={{ __html: this.state.output }}></p>
                        </div>
                        <input
                        className="bg-transparent border-none w-[50vw] outline-none"
                        type='text'
                        value={this.state.input || 'C:\\NirmalC> '}
                        onChange={e => {
                            if (!e.target.value.includes('C:\\NirmalC> ')) {
                                this.setState({ input: 'C:\\NirmalC> ' });
                            } else {
                                this.setState({ input: e.target.value });
                            }
                        }}
                        onKeyDown={e=>{
                            if (e.key==='Enter'){
                                if (this.state.input!=""){
                                    let new_output=""
                                    new_output=this.state.output+"<br>"+this.state.input
                                    switch(this.state.input){
                                        case 'C:\\NirmalC> help':
                                            new_output+="<p style='margin-left:5%;'>'des': My Description <br> 'gpa': Current GPA <br> 'courses': Relevant Courses <br> 'projects': Relevant Projects <br> 'experience': Relevant Work Experience <br> 'clear': Clear Terminal</p>"
                                            break;
                                        case 'C:\\NirmalC> des':
                                            new_output+="<p style='margin-left:5%;'></div>Hello! I am a second-year Software Engineering student at McMaster University. I enjoy taking part in collaborative projects, especially those that I believe will help me make a positive impact on our society. I seek out opportunities that will allow me to develop these skills so that I may more effectively do this.</p>"
                                            break;
                                        case 'C:\\NirmalC> gpa':
                                            new_output+="<p style='margin-left:5%;'>My current GPA is 3.98, or 11.9 on McMasters Scale. Use the 'courses' command to see my marks for the technical courses.</p>"
                                            break;
                                        case 'C:\\NirmalC> courses':
                                            new_output+="<p style='margin-left:5%;'>Engineering Cornerstone Design Project, Grade:A+ <br> Object-Oriented Programming, Grade:A+ <br> Software Engineering Practice and Experience, Grade: A+ <br> Digital Systems and Interfacing, Grade: A+ <br> Data Structures and Algorithms, Grade: A+ <br> Software Design-Intro to Software Development, Grade: A+ <br> Computer Architecture, Grade: A</p>"
                                            break;
                                        case 'C:\\NirmalC> projects':
                                            new_output+="<p style='margin-left:5%;'>I have completed 7+ projects. Checkout the Projects section of the website for more information </p>"
                                            break;
                                        case 'C:\\NirmalC> experience':
                                            new_output+="<p style='margin-left:5%;'>I have over 2 years of relevant work experience. Checkout the Experiences section of the website for more information</p>"
                                            break;
                                        case 'C:\\NirmalC> clear':
                                            this.state.output="Welcome to my terminal. Enter 'help' to get started"
                                            new_output=this.state.output
                                    }
                                    this.setState({input:'',output:new_output})
                                }
                            }
                        }
                        }/>
                    </div>
                </div>
            </div>
        )
    }
}
import { Bookmark, History  } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react'
import {Link} from "react-router-dom";
import {useState} from "react";
import "./index.css"

function MainQuestion() {
    const [show, setShow] = useState(false)
    return (
        <div className='main'>
            <div className='main-container'>
            <div className='main-top'>
                <h2 className='main-question'>This is question title</h2>
                <Link to="/add-question">
                    <button>Ask Question</button>
                </Link>
            </div>
            <div className='main-desc'>
                <div className='info'>
                    <p>Timestamp</p>
                    <p>Active<span>today</span></p>
                    <p>Viewed<span>43 times</span></p>
                </div>
                </div>
                <div className='all-questions'>
                    <div className='all-questions-container'>
                    <div className='all-questions-left'>
                    <div className='all-options'>
                        <p className='arrow'>^</p>
                        <p className='arrow'>0</p>
                        <p className='arrow'>⏒⏒</p>
                        <Bookmark />
                        <History />
                        </div>
                        </div>
                        <div className='question-answer'>
                            <p>this is test answer body</p>
                            <div className='author'>
                                <small>asked "timestamp"</small>
                                <div className='auth-details'>
                                    <Avatar />
                                    <p>Author name</p>
                                </div>
                            </div>
                            <div className='comments'>
                                <div className='comment'>
                                    <p>This is comment - <span>User name</span><small>timestamp</small></p>
                                </div>
                                <p onClick={()=>setShow(!show)}>add a comment</p>
                                {
                                    show &&(<div className='title'>
                                        <textarea type="text" 
                                         style={{margin:"5px 0px",
                                         padding:"10px",
                                          border:"1px solid rgba(0,0,0,0.2)",
                                          borderRadius:"3px",
                                          outline:"none",}}
                                        placeholder="add your comment" 
                                        rows={5}
                                       >

                                                 </textarea>
                                        <button style={{maxWidth: "fit-content",}}>Add comment</button>
                                        </div>
                               )}
                            </div>
                        </div>

                    </div>
                </div>
                <div className='all-questions'>
                    <p>No. of answers</p>
                    <div className='all-questions-container'>
                    <div className='all-questions-left'>
                    <div className='all-options'>
                        <p className='arrow'>^</p>
                        <p className='arrow'>0</p>
                        <p className='arrow'>⏒⏒</p>
                        <Bookmark />
                        <History />
                        </div>
                        </div>
                        <div className='question-answer'>
                            <p>this is test answer body</p>
                            <div className='author'>
                                <small>asked "timestamp"</small>
                                <div className='auth-details'>
                                    <Avatar />
                                    <p>Author name</p>
                                </div>
                            </div>
                            
                                <p onClick={()=>setShow(!show)}>add a comment</p>
                                {
                                    show &&(<div className='title'>
                                        <textarea type="text" 
                                        placeholder="add your comment" 
                                        rows={5}
                                        style={{}}></textarea>
                                        <button>Add comment</button>
                                        </div>
                               )}
                            </div>
                        </div>

                    </div>
                </div>
                <div className='main-answer'>
                    <h3 style={{fontSize:"22px",
                                margin:"10px 0",
                                fontWeight:"400",}}>your answer</h3>
                </div>
                <button>Post your answer</button>
                    </div>
               
            
    )
}

export default MainQuestion

import React from 'react'
import {TagsInput} from "react-tag-input-component";
import "./Question.css"

function Question() {
    return (
        <div className='add-question'>
            <div className='add-question-container'>
            <div className="head-title">
                <h1>Ask a public question</h1>
                </div>
                <div className='question-container'>
                    <div className='question-options'>
                    <div className='question-option'>
                    <div className='title'>
                   <h3>Title</h3>
                   <small>Be specific and imaging you are asking a question to another person</small><br />
                   {/* <input type="text" placeholder='Add question title'/> */}
                   <TagsInput name="title" placeHolder='e.g. Is there an R function finding the index of an element' />
                        </div>
                        
                        </div>
                        <div className='question-option'>
                        <div className='title'>
                   <h3>Body</h3>
                   
                   <small>Include all your information someone would need to answer your question</small><br />
                   {/* <input type="text" placeholder='Add question title'/> */}
                   <TagsInput name="body" />
                        </div>
                    <div className='question-option'>
                    <div className='title'>
                   <h3>Tags</h3>
                   <small>Add up to 5 tags to describe what your question is about</small>
                   {/* <input type="text" placeholder='Add question title'/> */}
                   <TagsInput name="tags" placeHolder='press enter to add new tag' />
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                <button className='button'>Add your question</button>
           </div>
        </div>
    )
}

export default Question

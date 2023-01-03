import React from 'react'
import "./Accessall.css"
export default function Accessall() {
    return (
        <>
            <div className="container">
                <h6><u>Human Resources</u></h6>

                {/* <a href="/" className="list-group-item list-group-item-dark">This is a dark list group item</a> */}

                <ul className='list-group list-group-flush ulcon'>
                    <a href="/"><li className='list-group-item'>MyConnect</li></a>
                    <a href="/"><li className='list-group-item'>MAiA for HR</li></a>
                    <a href="/"><li className='list-group-item'>India Continuous Assimilation Program</li></a>
                </ul>
            </div>
        </>
    )
}

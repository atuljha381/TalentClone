import React from 'react'
import "./Accessall.css"
export default function Accessall() {
    return (
        <>
            <div className="cont">
                <h6><u>Human Resources</u></h6>
                <ul className='list-group list-group-flush'>
                    <a href="/"><li className='list-group-item'>MyConnect</li></a>
                    <a href="/"><li className='list-group-item'>MAiA for HR</li></a>
                    <a href="/"><li className='list-group-item'>India Continuous Assimilation Program</li></a>
                </ul>
            </div>

            <div className="cont">
                <h6><u>Helpdesk and Support</u></h6>
                <ul className='list-group list-group-flush'>
                    <a href="/"><li className='list-group-item'>Ask Adam</li></a>
                    <a href="/"><li className='list-group-item'>Service Central</li></a>
                    <a href="/"><li className='list-group-item'>India Application Portal</li></a>
                </ul>
            </div>
            <div className="cont">
                <h6><u>Featured Links</u></h6>
                <ul className='list-group list-group-flush'>
                    <a href="/"><li className='list-group-item'>BRG  Sustainability</li></a>
                    <a href="/"><li className='list-group-item'>Online Brand Store India</li></a>
                    <a href="/"><li className='list-group-item'>Next</li></a>
                </ul>
            </div>

        </>
    )
}

import React from 'react'
import Accessall from './Accessall'
export default function India(props) {
    return (
        <>
            <div className="container my-5">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav nav-tabs">
                        <li className="nav-item mx-1">
                            <a className="nav-link active" href="/">Access All</a>
                        </li>
                        <li className="nav-item mx-1">
                            <a className="nav-link " href="/">Global Links</a>
                        </li>
                        <li className="nav-item mx-1">
                            <a className="nav-link " href="/">Yammer</a>
                        </li>
                    </ul>
                </nav>
                <Accessall />
            </div>
        </>
    )
}

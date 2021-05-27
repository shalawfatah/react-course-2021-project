
import React from 'react'
import {education} from '../utils/work'

const Education = () => {
    return (
        <div>
            <div className="w3-container w3-card">
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
                {education.map((study)=> {
                    return (
                        <>
                        <div className="w3-container">
                            <h5 className="w3-opacity"><b>{study.title}</b></h5>
                            <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{study.date}</h6>
                            <p>{study.description}</p>
                            <hr />
                        </div>
                        </>
                    )
                })}
                </div>
        </div>
    )
}

export default Education

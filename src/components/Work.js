
import React from 'react'
import {work} from '../utils/work'

const Work = () => {
    return (
        <>
        <div>
              <div className="w3-container w3-card w3-margin-bottom">
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
        {
            work.map((job)=> {
                return (
                    <>
                     <div className="w3-container">
                    <h5 className="w3-opacity"><b>{job.title}</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{job.date}</h6>
                    <p>{job.description}</p>
                    <hr />
                    </div>
                    </>
                )
            })
        }
        
                </div>
        </div>
        </>
    )
}

export default Work



import React, { useState } from 'react'
import {projects} from '../utils/work'

const Projects = () => {
    const [search, setSearch] = useState('')
    const filtered = projects.filter(project => {
        return project.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })
    return (
        <>
        <div>
              <div className="w3-container w3-card w3-margin">
                <label for="search" style={{marginRight: '10px'}}>Search</label>
                <input name="search" style={{marginTop: '15px'}} type="text" value={search} onChange={(e)=> setSearch(e.target.value)} />
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
        {
            filtered.map((job)=> {
                return (
                    <>
                     <div className="w3-container">
                    <h5 className="w3-opacity"><b>{job.title}</b></h5>
                    <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right"></i>{job.tech}</h6>
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

export default Projects

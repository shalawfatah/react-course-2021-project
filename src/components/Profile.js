
import React from 'react'
import {personal, languages, skills} from '../utils/work'
import './Profile.css'

const Profile = () => {
    const Img = 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg'
    return (
        <div>
            <div className="w3-text-grey w3-card-4">
                <div className="w3-display-container">
                    <img src={Img} style={{width:'100%'}} alt="Avatar" />
                    <div className="w3-display-bottomleft w3-container name">
                    <h2>{personal.name}</h2>
                    </div>
                </div>
                <div className="w3-container" style={{marginTop: '10px'}}>
                    <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>{personal.job}</p>
                    <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>{personal.location}</p>
                    <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>{personal.email}</p>
                    <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>{personal.phone}</p>
                    <hr />

                    <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
                    {languages.map((skill)=> {
                        return (
                            <>
                            <p>{skill.title}</p>
                            <div className="w3-light-grey w3-round-xlarge w3-small">
                            <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:skill.profiecency}}>{skill.profiecency}</div>
                            </div>
                            </>
                        )
                    })}
                    <br />

                    <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
                    {skills.map(skill => {
                        return (
                            <>
                            <p>{skill.title}</p>
                            <div className="w3-light-grey w3-round-xlarge">
                            <div className="w3-round-xlarge w3-teal" style={{height:'24px',width:skill.profiecency}}></div>
                            </div>
                            </>
                        )
                    })}
                    <br />
                </div>
                </div><br/>

        </div>
    )
}

export default Profile

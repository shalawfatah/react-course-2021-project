
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'
import { ThemeStore } from './ThemeContext'

const Navigation = () => {
    const [theme, setTheme] = useContext(ThemeStore)

    return (
        <>
        <div className="navigation">
            <Link to='/'>
            <i className="fa fa-home">&nbsp;Home&nbsp;</i> 
            </Link>
            <Link to='/projects'>
            <i className="fa fa-briefcase">&nbsp;Projects&nbsp;</i> 
            </Link>
            <Link to='/code'>
            <i className="fa fa-github">&nbsp;Code&nbsp;</i> 
            </Link>
        </div>
        <div className="theme" onClick={() => setTheme(prev => !prev)}>
            {theme ? <i className="fa fa-sun-o fa-fw w3-margin-right w3-large">&nbsp;Light&nbsp;</i> : <i className="fa fa-moon-o fa-fw w3-margin-right w3-large">&nbsp;Dark&nbsp;</i>}
        </div>
        </>
    )
}

export default Navigation

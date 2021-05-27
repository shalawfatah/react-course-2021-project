
import React, { useState, useEffect } from 'react'
import './Code.css'

const Code = () => {
    const [user, setUser] = useState({})
    const gitURL = 'https://api.github.com/users/shalawfatah'
    const fetchUser = async () => {
        const response = await fetch(gitURL)
        const result = await response.json()
        setUser(result)
        console.log(result)
    }
    useEffect(()=> {
        fetchUser()
    }, [])
    return (
        <div className="profile-git">
            <div class="card">
            <img src={user.avatar_url} alt="Avatar" style={{width:'100%'}} />
            <div class="container">
                <h4><b>{user.name}</b></h4>
                <p>{user.blog}</p> 
                <p>{user.bio}</p>
                <p>Number of Repositories on Github: {user.public_repos}</p>
                <p>Followers on Github: {user.follower}</p> 
                <p>Followings on Github: {user.following}</p> 
            </div>
            </div>
        </div>
    )
}

export default Code

/*
{
  "avatar_url": "https://avatars.githubusercontent.com/u/56219053?v=4",
  "html_url": "https://github.com/shalawfatah",
  "followers_url": "https://api.github.com/users/shalawfatah/followers",
  "following_url": "https://api.github.com/users/shalawfatah/following{/other_user}",
  "site_admin": false,
  "name": "Shalaw Fatah",
  "blog": "shalaw.netlify.com",
  "bio": "I'm a developer working with Javascript, React, Vue, Node, Express, and some other technologies.",
  "public_repos": 41,
  "followers": 12,
  "following": 7,
  "created_at": "2019-10-06T09:20:06Z",
}
*/
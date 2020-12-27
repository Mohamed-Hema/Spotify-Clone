import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';

function Login() {
    return (
        <div className="login">
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGGnlhIwkCmk5LNizQJQwg2S4RiogibhC0zQ&usqp=CAU" alt="Spotify Logo"></img>
            <a href={loginUrl}>Login With Spotify</a>
        </div>
    );
}

export default Login;

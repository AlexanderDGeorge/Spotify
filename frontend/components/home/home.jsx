import React from 'react';
import User from '../user/user';
import './home.css';

function Home(props) {
    return(
        <div className="home">
            <User />
            <article className="patch-notes">
                <h3>Welcome to spotlofi!</h3><br/>
                <div>
                    <p>New Features:</p>
                    <ul>
                        <li>player volume</li>
                        <li>player loop</li>
                        <li>player seek</li>
                        <li>play and like micro-interactions</li>
                    </ul><br/>
                </div>
                <div>
                    <p>Features Coming Soon:</p>
                    <ul>
                        <li>player shuffle</li>
                        <li>playlist editing</li>
                        <li>account editing</li>
                        <li>react-spring animations</li>
                        <li>mobile-support</li>
                    </ul>
                </div>
            </article>
        </div>
    )
}

export default Home;
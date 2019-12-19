import React from 'react';
import TopBar from './top-bar/top_bar';

export default class Home extends React.Component {
  render() {
    return(
      <div className="home">
        <TopBar/>

        <section className="block block1">
          <div className="block1">
            <h1>Try Premium free for 3 months</h1>
            <h3>Play millions of songs ad-free, on-demand, and offline.</h3>
            <button>VIEW PLANS</button>
          </div>
          <img className="blockimg1" src="https://campaigns.scdn.co/images/holiday-2019-desktop-turntable.jpg"/>
        </section>

        <section className="block block2">
          <div className="block2">
            <h1>Spotify Free</h1>
            <h3>Millions of songs. No credit card needed.</h3>
            <button>GET SPOTIFY FREE</button>
          </div>
          
          <div>

          </div>
        </section>

        <section className="block block3">
          <div className="block3">
            <h3>Your Wrapped 2019</h3>
            <h1>See how you listened in 2019.</h1>
            <h3>Check out your top artists, songs, genres, and more.</h3>
            <button>GO TO WRAPPED</button>
          </div>

          <div>

          </div>
        </section>

        <footer>
          <h1>Spotify Clone</h1>
        </footer>
        
      </div>
    )
  }
}
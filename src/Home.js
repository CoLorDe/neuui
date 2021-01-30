import React, { useState } from 'react';
import BgColor from './BgColor'

function Home() {
  const [bgColor, setColor] = useState("")


  return (
    <div className="main" style={{backgroundColor: bgColor }}>
      <div className="sub">
        <div>
          <h2>Description</h2>
          <p className="intro">Some examples of neumorphism UI elements, <b>click</b> or <b>hover</b> on them to see the active state! Change the color of the
          background to see how it looks in different tones. I am planning to
          add a css generator soon!
          </p>
        </div>
        <BgColor onChange={ setColor } />
      </div>
      <div className="ex-container">
        <div className="row">
          <p className="description pad-top">Circle</p>
          <div className="item">
            <p className="description">Flat</p>
            <div className="example circle"></div>
          </div>
          <div className="item">
            <p className="description">Concave</p>
            <div className="example small circle concave"></div>
          </div>
          <div className="item">
            <p className="description">Convex</p>
            <div className="example circle convex"></div>
          </div>
          <div className="item ">
            <p className="description">Medium</p>
            <div className="example circle medium"></div>
          </div>
          <div className="item">
            <p className="description">Hole</p>
            <div className="hole medium circle"><div className="circle led"></div></div>
          </div>
          <div className="item">
            <p className="description">Big</p>
            <div className="example circle big"></div>
          </div>
          <div className="item">
            <p className="description">Pad</p>
            <div className="example circle big convex"><div className="inner circle"></div></div>
          </div>
          <div className="item">
            <p className="description">Ring</p>
            <div className="example circle big ring"><div className="inner-ring circle"></div></div>
          </div>
          <div className="item">
            <p className="description">Switch</p>
            <label className="switch circle-switch">
              <input type="checkbox" />
            </label>
          </div>
        </div>
        <div className="row">
          <p className="description pad-top">Square</p>
          <div className="item">
            <p className="description">Flat</p>
            <div className="example square"><div className="square"></div></div>
          </div>
          <div className="item">
            <p className="description">Concave</p>
            <div className="example small square concave"></div>
          </div>
          <div className="item">
            <p className="description">Convex</p>
            <div className="example square convex"></div>
          </div>
          <div className="item ">
            <p className="description">Medium</p>
            <div className="example square medium concave"></div>
          </div>
          <div className="item">
            <p className="description">Hole</p>
            <div className="hole medium square"><div className="square led"></div></div>
          </div>
          <div className="item">
            <p className="description">Big</p>
            <div className="example square big"></div>
          </div>
          <div className="item">
            <p className="description">Pad</p>
            <div className="example square big convex"><div className="inner square"></div></div>
          </div>
          <div className="item">
            <p className="description">Ring</p>
            <div className="example square big ring"><div className="inner-ring square"></div></div>
          </div>
          <div className="item">
            <p className="description">Switch</p>
            <label className="switch square-switch">
              <input type="checkbox" />
            </label>
          </div>
        </div>
        <div className="row">
          <p className="description pad-top">Double<br />radius</p>
          <div className="item">
            <p className="description">Flat</p>
            <div className="example double-radius"></div>
          </div>
          <div className="item">
            <p className="description">Concave</p>
            <div className="example small double-radius concave"></div>
          </div>
          <div className="item">
            <p className="description">Convex</p>
            <div className="example double-radius convex"></div>
          </div>
          <div className="item ">
            <p className="description">Medium</p>
            <div className="example double-radius medium concave"></div>
          </div>
          <div className="item">
            <p className="description">Hole</p>
            <div className="hole medium double-radius"><div className="double-radius led"></div></div>
          </div>
          <div className="item">
            <p className="description">Big</p>
            <div className="example double-radius big "></div>
          </div>
          <div className="item">
            <p className="description">Pad</p>
            <div className="example double-radius big convex"><div className="inner double-radius"></div></div>
          </div>
          <div className="item">
            <p className="description">Ring</p>
            <div className="example double-radius big ring"><div className="inner-ring double-radius"></div></div>
          </div>
          <div className="item">
            <p className="description">Switch</p>
            <label className="switch dr-switch">
              <input type="checkbox" />
            </label>
          </div>
        </div>

        <div className="row">
          <p className="description pad-top">Triangles</p>
          <div className="item">
            <p>Triangles are usable within certain limits,<br />shadows become problematic, and<br /> big shapes slow down the page scroll. (Temporarily removed)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

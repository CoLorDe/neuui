import React, { useState } from 'react';

function Generator() {
  const [distance, setDistance] = useState(5);
  const [width, setWidth] = useState(50);
  const [height, setHeight] = useState(50);
  const [radius, setRadius] = useState(10);

  return(
    <div className="main">
      <div className="panel">
        <div className="container">
          <h2>Preview</h2>
          <div className="preview-container">
            <div className="" style={{boxShadow: `${distance}px ${distance}px ${distance}px #3336, ${-distance}px ${-distance}px ${distance}px #FFF6`, height: `${height}px`, width: `${width}px`, borderRadius:`${radius}px`, backgroundColor: "#0000"}}>
            </div>
          </div>
        </div>

        <div className="options">
          <div className="sliders">
            <h4>Distance</h4>
            <input type="range" min={3} max={20} onChange={e => setDistance(e.target.value)} />
            <h4>Height</h4>
            <input type="range" min={20} max={200} onChange={e => setHeight(e.target.value)} />
            <h4>Width</h4>
            <input type="range" min={20} max={200} onChange={e => setWidth(e.target.value)} />
            <h4>Radius</h4>
            <input type="range" min={0} max={100} onChange={e => setRadius(e.target.value)} />
          </div>
          <div className="css-display">
            <p>height: <o>{height}px</o>;</p>
            <p>width: <o>{width}px</o>;</p>
            <p>border-radius: <o>{radius}px</o>;</p>
            <p>box-shadow: <o>{distance}px {distance}px {distance}px</o> <b>#FFF6</b>,
            <br /> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <o>{-distance}px {-distance}px {distance}px</o> <b>#0006</b>;</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Generator;

import React from 'react';

export default class Svg extends React.Component {
  render(){
    return (
      <div>
        <p>We can just use raw <a href="https://www.w3schools.com/html/html5_svg.asp">HTML SVG</a></p>
        <div>
          <h1>Circle</h1>
          <svg>
            <circle style={{fill: '#69b3a2'}} stroke="black" cx="50" cy="50" r="40"/>
          </svg>
        </div>

        <div>
          <svg>
            <line x1="0" y1="0" x2="10" y2="10" stroke="black"/>
          </svg>
        </div>

        <div>
          <svg>
            <rect x="0" y="0" width="10" height="10"/>
          </svg>

          <svg>
            <circle cx="5" cy="5" r="5"/>
          </svg>

          <svg>
            <ellipse cx="10" cy="5" rx="10" ry="5"/>
          </svg>

          <svg>
            <polygon points="0,0 10,5 20,0 20,20 10,15 0,20"/>
          </svg>

          <svg>
            <polyline points="0,0 10,5 20,0 20,20 10,15 0,20" stroke="black"/>
          </svg>
        </div>

        <div>
          <h1>Path</h1>
          <svg>
            <path d="M65,10 a50,25 0 1,0 50,25"/>
          </svg>
        </div>
      </div>
    );
  }
}

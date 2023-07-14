


import React from "react";

export default function Mymenu(){
    
        const ah = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Sans-Serif"
          };
          const ah1 = {};
          const ah1t = {};
          const ah1tl = {};
        return(
            <div className='ah' style={ah}>
        <div className='ah1' style={ah1}>
          <div className='ah1t' style={ah1t}>
            <div className='ah1tl' style={ah1tl}>
              <p>Efrica</p>
            </div>
            <div className='ah1tr'>
              <ol>
                <li>
                  <p>Who we are?</p>
                  <span>&arrowdown;</span>
                </li>
                <li>
                  <p>Our services</p>
                  <span>&arrowdown;</span>
                </li>
                <li>
                  <p>News</p>
                  <span>&arrowdown;</span>
                </li>
                <li>
                  <p>Support</p>
                  <span>&arrowdown;</span>
                </li>
                <li>
                  <p>About</p>
                  <span>&arrowdown;</span>
                </li>
              </ol>
            </div>
          </div>
          <div className='ah1b'>

          </div>
        </div>
      </div>
        )
    }

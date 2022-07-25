import React from 'react';
import "../App.css";

function AboutCard (props) {
  return (
    <div className='AboutCard'>
      <div className='AboutCardHeader'>
        <img src={props.image} alt={props.title} className='AboutCardImage'/>
        <div className='AboutCardHeaderText'>
          <h1>{props.title}</h1>
          <h2>{props.role}</h2>
        </div>
      </div>
      <ul>
      {props.bullets.map((bullet) =>{
        return (
          <li>{bullet}</li>
        );
      })}
        </ul>
    </div>
  );
}


export default AboutCard;
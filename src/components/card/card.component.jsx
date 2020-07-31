import React from 'react';
import './card.styles.css'
import CardDetail from '../card-detail/card-detail.component';

export const Card = (props) =>(
    <div className='card-container'>
        <img
        alt={props.character.name}
        src={props.character.image}
        style={{width:"320px", height:"320px"}} 
        />
        <h2> {props.character.name}</h2>
        <h3>Race: {props.character.species}</h3>
        <h3>Planet: {props.character.originPlanet}</h3>
        <a href={props.character.url}> More Info</a>
        <CardDetail key={props.character.id} character={props.character}/>
    </div>
)
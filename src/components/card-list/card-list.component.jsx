import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';


export const CardList= props =>(
   
<div className='card-list'>
      {
    props.characters.map(character => (
    <Card key={character.id} character={character}/>
        ))}


</div>

);
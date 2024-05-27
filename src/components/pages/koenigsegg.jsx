import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1><u>Koenigsegg !</u></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/koenigsegg.jpg'
              text='Koenigsegg'
              label='Koenigsegg'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/regera.jpg'
              text='Koenigsegg Regera'
              label='Regera'
              path='/products'
            />
            <CardItem
              src='images/gemera.jpg'
              text='Koenigsegg Gemera'
              label='Gemera'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/agera.jpg'
              text='Koenigsegg Agera RS'
              label='Agera RS'
              path='/products'
            />
            <CardItem
              src='images/jesko.jpg'
              text='Koenigsegg Jesko'
              label='Jesko'
              path='/products'
            />
            <CardItem
              src='images/CC850.jpg'
              text='Koenigsegg CC850'
              label='CC850'
              path='/products'
            />
          </ul>
          <br />
          </div>
      </div>
    </div>
  );
}

export default Cards;
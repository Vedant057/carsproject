import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1><u>Ferrari !</u></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/ferrari.jpg'
              text='Ferrari'
              label='Ferrai'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/Purosangue.jpg'
              text='Ferrari Purosangue'
              label='Purosangue'
              path='/products'
            />
            <CardItem
              src='images/812.jpg'
              text='Ferrari 812 Superfast'
              label='812 Superfast'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/laferrari.jpg'
              text='Ferrari LaFerrari'
              label='LaFerrari '
              path='/products'
            />
            <CardItem
              src='images/f8.jpg'
              text='Ferrari F8 Tributo'
              label='F8 Tributo'
              path='/products'
            />
            <CardItem
              src='images/sf90.jpg'
              text='Ferrari SF90 Stradale'
              label='SF90 Stradale'
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
import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1><u>Bugatti !</u></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/bugatti.jpg'
              text='Bugatti'
              label='Bugatti'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/mistral.jpg'
              text='Bugatti mistral roadster'
              label='Mistral'
              path='/products'
            />
            <CardItem
              src='images/divo.jpg'
              text='Bugatti Divo'
              label='Divo'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/chiron.jpg'
              text='Bugatti Chiron Supersports'
              label='Chiron'
              path='/products'
            />
            <CardItem
              src='images/veyron.jpg'
              text='Bugatti Veyron Super Sports'
              label='Veyron'
              path='/products'
            />
            <CardItem
              src='images/centodieci.jpg'
              text='Bugatti Centodieci '
              label='Centodieci '
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
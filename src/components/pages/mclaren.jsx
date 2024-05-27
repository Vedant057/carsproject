import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1><u>McLaren !</u></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/mclaren.jpg'
              text='McLaren'
              label='McLaren'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/765LT.jpg'
              text='McLaren 765LT'
              label='765LT'
              path='/products'
            />
            <CardItem
              src='images/720S.jpg'
              text='McLaren 720S'
              label='720S'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/p1.jpg'
              text='McLaren P1'
              label='P1'
              path='/products'
            />
            <CardItem
              src='images/senna.jpg'
              text='McLaren Senna'
              label='Senna'
              path='/products'
            />
            <CardItem
              src='images/570S.jpg'
              text='McLaren 570S'
              label='570S'
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
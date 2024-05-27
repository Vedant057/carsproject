import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1><u>EPIC Supercars Companys!</u></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/Lamborghini.jpg'
              text='Lamborghini'
              label='Lamborghini'
              path='/lambo'
            />
            <CardItem
              src='images/bugatti.jpg'
              text='Bugatti'
              label='Bugatti'
              path='/bugatti'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
             src='images/ferrari.jpg'
             text='Ferrari'
             label='Ferrari'
             path='/ferrari'
            />
            <CardItem
              src='images/mclaren.jpg'
              text='McLaren'
              label='McLaren'
              path='/mclaren'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/koenigsegg.jpg'
              text='Koenigsegg'
              label='Koenigsegg'
              path='/koenigsegg'
            />
            <CardItem
              src='images/rollsroyce.jpg'
              text='Rolls Royce'
              label='Rolls Royce'
              path='/products'
            />
            <CardItem
              src='images/mercedes.jpg'
              text='Mercedes Benz'
              label='Mercedes'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/BMW.jpg'
              text='BMW'
              label='BMW'
              path='/products'
            />
            <CardItem
              src='images/maserati.jpg'
              text='Maserati'
              label='Maserati'
              path='/products'
            />
            <CardItem
              src='images/lexus.jpg'
              text='Lexus'
              label='Lexus'
              path='/products'
            />
          </ul>
      </div>
      </div>
    </div>
  );
}

export default Cards;
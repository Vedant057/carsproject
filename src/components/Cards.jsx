import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1><u>Check out these EPIC Supercars!</u></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Revuelto.jpg'
              text='Lamborghini Revuelto'
              label='Lamborghini'
              path='https://www.lamborghini.com/en-en/models/revuelto'
            />
            <CardItem
              src='images/Purosangue.jpg'
              text='Ferrari Purosangue'
              label='Ferrari'
              path='https://www.ferrari.com/en-EN/auto/ferrari-purosangue'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/765LT.jpg'
              text='McLaren 765LT'
              label='McLaren'
              path='https://cars.mclaren.com/en/super-series/765lt'
            />
            <CardItem
              src='images/aventador.jpg'
              text='Lamborghini Aventador SVJ'
              label='Lamborghini'
              path='https://www.lamborghini.com/en-en/history/aventador-svj'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/urus.jpg'
              text='Lamborghini Urus Performante'
              label='Lamborghini'
              path='https://www.lamborghini.com/en-en/models/urus'
            />
            <CardItem
              src='images/dbs.jpg'
              text='Aston Martin DBS Superleggera'
              label='Aston Martin'
              path='https://www.astonmartin.com/en/models/dbx707'
            />
            <CardItem
              src='images/812.jpg'
              text='Ferrari 812 Superfast'
              label='Ferrari'
              path='https://www.ferrari.com/en-EN/auto/812-superfast'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
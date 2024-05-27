import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1><u>Lamborghini !</u></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Lamborghini.jpg'
              text='Lamborghini'
              label='Lamborghini'
              path='https://www.carwale.com'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/Revuelto.jpg'
              text='Lamborghini Revuelto'
              label='Revuelto'
              path='https://www.carwale.com/'
            />
            <CardItem
              src='images/aventador.jpg'
              text='Lamborghini Aventador SVJ'
              label='Aventador SVJ'
              path='https://www.carwale.com/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/urus.jpg'
              text='Lamborghini Urus Performante'
              label='Urus'
              path='https://www.carwale.com/'
            />
            <CardItem
              src='images/huracan.jpg'
              text='Lamborghini Huracan'
              label='Huracan'
              path='https://www.carwale.com/'
            />
            <CardItem
              src='images/Veneno.jpg'
              text='Lamborghini Veneno'
              label='Veneno'
              path='https://www.carwale.com/'
            />
          </ul>
          <br />
          </div>
      </div>
    </div>
  );
}

export default Cards;
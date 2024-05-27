import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';
import Footer from '../Footer';

function Cards() {
  return (
    <>
    <div className='cards'>
      <h1><u>About!</u></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/computer.jpg'
              text='Vedant Panse
                    Computer Engineer
                    vedantpanse357@gmail.com'
              label='Vedant'
              path='https://www.linkedin.com/in/vedant-panse-6bb4b6210/'
            />
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Cards;
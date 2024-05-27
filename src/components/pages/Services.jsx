import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';
import Footer from '../Footer';

function Cards() {
  return (
    <>
    <div className='cards'>
      <h1><u>Our Services!</u></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Service.jpg'
              text='All Kinds of Services Available Here'
              label='Services'
              path=''
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/insurance.jpg'
              text='Cars Insurance'
              label='Insurance'
              path='https://www.policybazaar.com/motor-insurance/car-insurance/'
            />
            <CardItem
              src='images/finance.jpg'
              text='All Financial Option Available Here'
              label='Finance'
              path='https://www.bajajfinserv.in/new-car-finance'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/testdrive.jpg'
              text='Test-Drive Available'
              label='Test-Drive'
              path='https://www.mynewcar.in/book-test-drive-online'
            />
            <CardItem
              src='images/servicing.jpg'
              text='Cars Servicing'
              label='Cars Servicing'
              path='https://gomechanic.in/pune'
            />
            <CardItem
              src='images/support.jpg'
              text='Customer Support'
              label='Customer Support'
              path='/chat'
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
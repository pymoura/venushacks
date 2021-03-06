import React from 'react'
import Cards from './Cards';
import './Cards.css';
import pic from './Images/venushacks.clothes.jpg';
import pic2 from './Images/venushacks.jewelry.jpg';
import pic3 from './Images/venushacks.paint.jpg';
import pic4 from './Images/venushacks.home.jpg';
import pic5 from './Images/venushacks.baking.jpg';
import pic6 from './Images/venushacks.party.jpg';

function AllCards() {
  return (
    <div className='all_cards'>
        <div className='all_cards_container'>
            <div className='all_cards_wrapper'>
                <ul className='card_name_wrapper'>
                    <Cards 
                    src={pic}
                    text='Clothes'
                    path='/clothes'
                    />
                    <Cards 
                    src={pic2}
                    text='Acessories'
                    path='/acessories'
                    />
                    <Cards 
                    src={pic3}
                    text='Art'
                    path='/art'
                    />
                </ul>
                <ul className='card_name_wrapper'>
                    <Cards 
                    src={pic4}
                    text='Home'
                    path='/homegoods'
                    />
                    <Cards 
                    src={pic5}
                    text='Cooking and Baking'
                    path='/cooking'
                    />
                    <Cards 
                    src={pic6}
                    text='Party'
                    path='/party'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default AllCards
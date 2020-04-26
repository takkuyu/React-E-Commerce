import React from 'react'; import {
  Container
} from 'reactstrap';
import Card from '../card.component';
import collections from '../../../collection-items.json'

const MensSneakers = () => {

  console.log(collections)


  return (
    <div className='collections-items-wrapper'>
      <Container>
        <div className='collections-title'>
          <h1>Men's Sneakers</h1>
          <p>Our original everyday sneaker made with cozy wool.</p>
        </div>
        <Card />
      </Container>
    </div>

  );
};

export default MensSneakers;
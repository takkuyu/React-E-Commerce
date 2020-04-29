import React from 'react';
import {
  Row, 
} from 'reactstrap';
import Card from './card.component';

const Category = ({ routeName, categoryTitle, gender, category_items }) => {

  const genderTitle = (gender === 'mens' ? "Men's" : "Women's")

  return (

    <div className='collections-items-wrapper'>

      <div className='collections-title'>
        <h1>{genderTitle} {categoryTitle}</h1>
        <p>Our original everyday sneaker made with cozy wool.</p>
      </div>

      <div className='collections-items-content'>
        <Row>
          {category_items.map(({ id, ...otherSectionProps }) => (
            <Card
              key={id}
              id={id}
              routeName={routeName}
              {...otherSectionProps}
            />
          )
          )}
        </Row>
      </div>

    </div>

  );
};

export default Category;
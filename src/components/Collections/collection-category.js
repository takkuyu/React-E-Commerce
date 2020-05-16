import React from 'react';
import {
  Row,
} from 'reactstrap';
import Card from './card.component';

const Category = ({gender, routeName, categoryTitle,  categoryItems }) => {

  const genderTitle = (gender === 'mens' ? "Men's" : "Women's")
  return (
    <div className='collections-items-wrapper'>
      {
        categoryItems.length === 0 ?
          <div></div>
          :
          <div className='collections-title'>
            <h1>{genderTitle} {categoryTitle}</h1>
            <p>Our original everyday sneaker made with cozy wool.</p>
          </div>
      }
      <div className='collections-items-content'>
        <Row>
          {categoryItems.map(({ id, ...otherSectionProps }) => (
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
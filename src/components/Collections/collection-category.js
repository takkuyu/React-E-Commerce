import React from 'react';
import {
  Row,
} from 'reactstrap';
import Card from './card.component';

const Category = ({ collection }) => {
  const { title, items, routeName } = collection;

  return (
    <div className='collections-items-wrapper'>
      {
        items.length === 0 ?
          <></>
          :
          <div className='collections-title'>
            <h1>{title}</h1>
          </div>
      }
      <div className='collections-items-content'>
        <Row>
          {items.map(({ id, ...otherSectionProps }) => (
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
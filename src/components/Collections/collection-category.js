import React from 'react';
import {
  Row,
} from 'reactstrap';
import Card from './card.component';

function convertTitleToRoute(title) {
  return title.replace(/\s+/g, "").toLowerCase();
}

const Category = ({ categoryTitle, categoryItems }) => {
  return (
    <div className='collections-items-wrapper'>
      {
        categoryItems.length === 0 || !categoryTitle ?
          <></>
          :
          <div className='collections-title'>
            <h1>{categoryTitle}</h1>
          </div>
      }
      <div className='collections-items-content'>
        <Row>
          {categoryItems.map(({ id, ...otherSectionProps }) => (
            <Card
              key={id}
              id={id}
              routeName={categoryTitle ? convertTitleToRoute(categoryTitle) : undefined}
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
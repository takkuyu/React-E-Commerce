import React from 'react';
import {
  Row,
} from 'reactstrap';
import Card from './card.component';

const Category = ({ collection, isOverviewPage }) => {
  const { title, items, routeName, summary } = collection;
  return (
    <div className='collections-items-wrapper'>
      {
        items.length === 0 || !isOverviewPage ?
          <></>
          :
          <div className='collections-title'>
            <h2>{title}</h2>
            <p>{summary}</p>
          </div>
      }
      <div className='collections-items-content'>
        <Row>
          {items.map((item, index) => (
            <Card
              key={index}
              routeName={routeName}
              item = {item}
            />
          )
          )}
        </Row>
      </div>
    </div>
  );
};



export default Category;
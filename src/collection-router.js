import React from 'react';
import Category from './components/collections/collection-category';
import SHOP_DATA from './collection-items'
import men_all_img from './img/sneakers-02.jpg';
import men_sneakers_img from './img/sneakers.jpg';
import men_runnning_img from './img/running.jpg';
import men_boots_img from './img/boots.jpg';
import women_all_img from './img/women-all.jpg';
import women_sneakers_img from './img/women-sneakers.jpg';
import women_running_img from './img/women-running.jpg';
import women_boots_img from './img/women-boots.jpg';

let imageLink = '';
let sum = 0;

function filterItems(items_arr, sum, price, size, color) {
  if (price.pmin !== undefined && price.pmax !== undefined) {
    items_arr = items_arr.filter(item => (Number(price.pmin) <= item.price && item.price <= Number(price.pmax)));
    sum = items_arr.length;
  }

  if (color !== undefined) {
    items_arr = items_arr.filter(item => item.color === color);
    sum = items_arr.length;
  }
  if (size !== undefined) {
    items_arr = items_arr.filter(item => item.size.indexOf(Number(size)) !== -1);
    sum = items_arr.length;
  }

  return { items_arr, sum }
}

const collectionRouter = (this_gender, this_category, price, size, color) => {
  console.log(this_category)
  // if (this_gender !== 'mens' && this_gender !== 'women') {
  //   window.location = '/';
  //   return;
  // }

  switch (this_category) {
    case 'sneakers': {
      const items_arr = SHOP_DATA[1].items.filter(item => (item.item_gender === this_gender));
      const items = filterItems(items_arr, items_arr.length, price, size, color);

      sum = items.sum
      imageLink = (this_gender === 'mens' ? men_sneakers_img : women_sneakers_img);

      return (
        <div>
          <Category gender={this_gender} routeName={SHOP_DATA[1].routeName} categoryTitle={SHOP_DATA[1].title} categoryItems={items.items_arr} />
        </div>
      )
    }
    case 'running': {
      const items_arr = SHOP_DATA[0].items.filter(item => item.item_gender === this_gender);
      const items = filterItems(items_arr, items_arr.length, price, size, color);

      sum = items.sum
      imageLink = (this_gender === 'mens' ? men_runnning_img : women_running_img);

      return (
        <div>
          <Category gender={this_gender} routeName={SHOP_DATA[0].routeName} categoryTitle={SHOP_DATA[0].title} categoryItems={items.items_arr} />
        </div>
      )
    }
    case 'boots': {
      const items_arr = SHOP_DATA[2].items.filter(item => item.item_gender === this_gender);
      const items = filterItems(items_arr, items_arr.length, price, size, color);

      sum = items.sum
      imageLink = (this_gender === 'mens' ? men_boots_img : women_boots_img);

      return (
        <div>
          <Category gender={this_gender} routeName={SHOP_DATA[2].routeName} categoryTitle={SHOP_DATA[2].title} categoryItems={items.items_arr} />
        </div>
      )
    }
    case 'topsellers': {
      const items_arr = SHOP_DATA[3].items.filter(item => item.item_gender === this_gender);
      const items = filterItems(items_arr, items_arr.length, price, size, color);
      sum = items.sum
      imageLink = (this_gender === 'mens' ? men_boots_img : women_boots_img);

      return (
        <div>
          <Category gender={this_gender} routeName={SHOP_DATA[3].routeName} categoryTitle={SHOP_DATA[4].title} categoryItems={items.items_arr} />
        </div>
      )
    }
    case 'new': {
      const items_arr = SHOP_DATA[4].items.filter(item => item.item_gender === this_gender);
      const items = filterItems(items_arr, items_arr.length, price, size, color);
      sum = items.sum
      imageLink = (this_gender === 'mens' ? men_boots_img : women_boots_img);

      return (
        <div>
          <Category gender={this_gender} routeName={SHOP_DATA[4].routeName} categoryTitle={SHOP_DATA[4].title} categoryItems={items.items_arr} />
        </div>
      )
    }
    case 'topsellers': {
      const items_arr = SHOP_DATA[3].items.filter(item => item.item_gender === this_gender);
      const items = filterItems(items_arr, items_arr.length, price, size, color);
      // console.log('new')
      sum = items.sum
      imageLink = (this_gender === 'mens' ? men_boots_img : women_boots_img);

      return (
        <div>
          <Category gender={this_gender} routeName={SHOP_DATA[3].routeName} categoryTitle={SHOP_DATA[4].title} categoryItems={items.items_arr} />
        </div>
      )
    }
    case 'topsellers': {
      const items_arr = SHOP_DATA[3].items.filter(item => item.item_gender === this_gender);
      const items = filterItems(items_arr, items_arr.length, price, size, color);
      // console.log('new')
      sum = items.sum
      imageLink = (this_gender === 'mens' ? men_boots_img : women_boots_img);

      return (
        <div>
          <Category gender={this_gender} routeName={SHOP_DATA[3].routeName} categoryTitle={SHOP_DATA[4].title} categoryItems={items.items_arr} />
        </div>
      )
    }
    case 'topsellers': {
      const items_arr = SHOP_DATA[3].items.filter(item => item.item_gender === this_gender);
      const items = filterItems(items_arr, items_arr.length, price, size, color);
      // console.log('new')
      sum = items.sum
      imageLink = (this_gender === 'mens' ? men_boots_img : women_boots_img);

      return (
        <div>
          <Category gender={this_gender} routeName={SHOP_DATA[3].routeName} categoryTitle={SHOP_DATA[4].title} categoryItems={items.items_arr} />
        </div>
      )
    }
    case undefined: {
      const sneakers_arr = SHOP_DATA[1].items.filter(item => item.item_gender === this_gender);
      const running_arr = SHOP_DATA[0].items.filter(item => item.item_gender === this_gender);
      const boots_arr = SHOP_DATA[2].items.filter(item => item.item_gender === this_gender);

      const sneakers_items = filterItems(sneakers_arr, sneakers_arr.length, price, size, color);
      const running_items = filterItems(running_arr, running_arr.length, price, size, color);
      const boots_items = filterItems(boots_arr, boots_arr.length, price, size, color);

      sum = sneakers_items.sum + running_items.sum + boots_items.sum;
      imageLink = (this_gender === 'mens' ? men_all_img : women_all_img);

      return (
        <div>
          <Category gender={this_gender} routeName={SHOP_DATA[1].routeName} categoryTitle={SHOP_DATA[1].title} categoryItems={sneakers_items.items_arr} />
          <Category gender={this_gender} routeName={SHOP_DATA[0].routeName} categoryTitle={SHOP_DATA[0].title} categoryItems={running_items.items_arr} />
          <Category gender={this_gender} routeName={SHOP_DATA[2].routeName} categoryTitle={SHOP_DATA[2].title} categoryItems={boots_items.items_arr} />
        </div>
      )
    }
    default:
      // window.location = '/';
      break;
  }
}

export { collectionRouter, imageLink, sum }
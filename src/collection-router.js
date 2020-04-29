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

const collectionRouter = (this_gender, this_category, price, size, color) => {
  // console.log(price)
  // console.log(size)
  // console.log(color)
  if (this_gender === 'mens') {

    switch (this_category) {
      case 'sneakers':
        let category_items_sneakers = SHOP_DATA[1].items.filter(item => (item.item_gender === 'mens'));

        sum = category_items_sneakers.length;
        imageLink = men_sneakers_img;

        if (price.pmin !== undefined) {
          category_items_sneakers = category_items_sneakers.filter(item => (Number(price.pmin) <= item.price && item.price <= Number(price.pmax)));
          sum = category_items_sneakers.length;
        }
        return (
          <div>
            <Category gender='mens' routeName={SHOP_DATA[1].routeName} categoryTitle={SHOP_DATA[1].title} category_items={category_items_sneakers} />
          </div>
        )

      case 'running':
        const category_items_running = SHOP_DATA[0].items.filter(item => item.item_gender === 'mens');
        sum = category_items_running.length;
        imageLink = men_runnning_img;

        return (
          <div>
            <Category gender='mens' routeName={SHOP_DATA[0].routeName} categoryTitle={SHOP_DATA[0].title} category_items={category_items_running} />
          </div>
        )

      case 'boots':
        const category_items_boots = SHOP_DATA[2].items.filter(item => item.item_gender === 'mens');
        sum = category_items_boots.length;
        imageLink = men_boots_img;

        return (
          <div>
            <Category gender='mens' routeName={SHOP_DATA[2].routeName} categoryTitle={SHOP_DATA[2].title} category_items={category_items_boots} />
          </div>
        )

      case undefined:
        const category_items_sneakers_all = SHOP_DATA[1].items.filter(item => item.item_gender === 'mens');
        const category_items_running_all = SHOP_DATA[0].items.filter(item => item.item_gender === 'mens');
        const category_items_boots_all = SHOP_DATA[2].items.filter(item => item.item_gender === 'mens');
        sum = category_items_sneakers_all.length + category_items_running_all.length + category_items_boots_all.length;
        imageLink = men_all_img;

        return (
          <div>
            <Category gender='mens' routeName={SHOP_DATA[1].routeName} categoryTitle={SHOP_DATA[1].title} category_items={category_items_sneakers_all} />
            <Category gender='mens' routeName={SHOP_DATA[0].routeName} categoryTitle={SHOP_DATA[0].title} category_items={category_items_running_all} />
            <Category gender='mens' routeName={SHOP_DATA[2].routeName} categoryTitle={SHOP_DATA[2].title} category_items={category_items_boots_all} />
          </div>
        )
      default:
      // window.location = '/'
          alert('Ooops wrong router')
    }

  } else if (this_gender === 'women') {

    switch (this_category) {
      case 'sneakers':
        return (
          <div>
            <Category category='sneakers' gender='women' />
          </div>
        )
      case 'running':
        return (
          <div>
            <Category category='running' gender='women' />
          </div>
        )
      case 'boots':
        return (
          <div>
            <Category category='boots' gender='women' />
          </div>
        )
      case undefined:
        return (
          <div>
            <Category category='sneakers' gender='women' />
            <Category category='running' gender='women' />
            <Category category='boots' gender='women' />
          </div>
        );
      default:
        window.location = '/'

    }
  }
  else {
    window.location = '/'
  }
}

export { collectionRouter, imageLink, sum }
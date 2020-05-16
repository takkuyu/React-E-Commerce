const SHOP_DATA = [
  {
    id: 1,
    title: 'Running Shoes',
    routeName: 'running',
    summary:'Choosing the best performance shoes is a crucial decision for every runner.',
    items: [
      {
        id: 1,
        name: 'Nike React Infinity Run',
        imageUrl: 'https://i.ibb.co/T0TNwQT/men-running-1.jpg',
        price: 90,
        item_gender: 'mens',
        size: [8,9,10,11,12,13,14],
        color: 'black'
      },
      {
        id: 2,
        name: 'UA TRIBASE REIGN 2.0',
        imageUrl: 'https://i.ibb.co/7J6HV0z/men-running-2.jpg',
        price: 114,
        item_gender: 'mens',
        size: [9,10,11,12,13,14],
        color: 'red'
      },
      {
        id: 3,
        name: 'REEBOK HIIT TR',
        imageUrl: 'https://i.ibb.co/QJZ118n/men-running-3.jpg',
        price: 100,
        item_gender: 'mens',
        size: [8,9,10,11,12,13],
        color: 'black'
      },
      {
        id: 4,
        name: 'Nike Renew Retaliation TR',
        imageUrl: 'https://i.ibb.co/kqFN3q5/men-running-4.jpg',
        price: 60,
        item_gender: 'mens',
        size: [10,11,12,13,14],
        color: 'white'
      },
      {
        id: 5,
        name: 'UA TRIBASE REIGN',
        imageUrl: 'https://i.ibb.co/TT9hFjQ/men-running-5.jpg',
        price: 95,
        item_gender: 'mens',
        size: [10,11,12,13,14],
        color: 'white'
      },
      {
        id: 6,
        name: 'UA SPEEDFORM AMP 3.0',
        imageUrl: 'https://i.ibb.co/drvN3kK/men-running-6.jpg',
        price: 83,
        item_gender: 'mens',
        size: [10,11,12,13,14],
        color: 'black'
      },
      {
        id: 7,
        name: 'Nike womens legend essentials',
        imageUrl: 'https://i.ibb.co/Dw7XX5J/women-running-1.jpg',
        price: 110,
        item_gender: 'women',
        size: [8,9,10,11,12],
        color: 'multi'
      },
      {
        id: 8,
        name: 'Nike STREET PREC',
        imageUrl: 'https://i.ibb.co/SVp2Fgs/women-running-2.jpg',
        price: 80,
        item_gender: 'women',
        size: [8,9,10,11,12,13,14],
        color: 'black'
      },
      {
        id: 9,
        name: 'adidas Swift White & Rose Gold Shoes',
        imageUrl: 'https://i.ibb.co/WVS0qSD/women-running-3.jpg',
        price:110,
        item_gender: 'women',
        size: [8,9,10,11,12],
        color: 'black'
      },
      {
        id: 10,
        name: 'UA W AURA TRAINER',
        imageUrl: 'https://i.ibb.co/W6XX0X6/women-running-4.jpg',
        price: 180,
        item_gender: 'women',
        size: [9,10,11,12,13,14],
        color: 'red'
      },
      {
        id: 11,
        name: 'UA W AURA TRAINER',
        imageUrl: 'https://i.ibb.co/nsqKJgz/women-running-5.jpg',
        price: 120,
        item_gender: 'women',
        size: [8,9,10,11,12],
        color: 'black'
      },
      {
        id: 12,
        name: 'REEBOK NANO 9',
        imageUrl: 'https://i.ibb.co/gdmtPyD/women-running-6.jpg',
        price: 80,
        item_gender: 'women',
        size: [8,9,10,11,12],
        color: 'black'
      }
    ]
  },
  {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    summary:'Looking for on-trend walking, evening or daytime sneakers? Here are our top sellections',
    items: [
      {
        id: 1,
        name: 'adidas STAN SMITH EL ',
        imageUrl: 'https://i.ibb.co/YT8W0jR/women-sneaker-1.jpg',
        price: 130,
        item_gender: 'women',
        size: [9,10,11,13,14],
        color: 'white'
      },
      {
        id: 2,
        name: 'NEW BALANCE CM996SMG',
        imageUrl: 'https://i.ibb.co/T2rtkhQ/women-sneaker-2.jpg',
        price: 140,
        item_gender: 'women',
        size: [8,9,10,11,12],
        color: 'white'

      },
      {
        id: 3,
        name: 'NIKE AIR JORDAN 1 LOW',
        imageUrl: 'https://i.ibb.co/PWs51jt/women-sneaker-3.jpg',
        price: 110,
        item_gender: 'women',
        size: [10,11,12,13,14],
        color: 'red'

      },
      {
        id: 4,
        name: 'adidas EQT SUPPORT ULT',
        imageUrl: 'https://i.ibb.co/YyR4S6K/women-sneaker-4.jpg',
        price: 160,
        item_gender: 'women',
        size: [9,10,11,12,13,14],
        color: 'multi'

      },
      {
        id: 5,
        name: 'adidas GAZELLE COLLEGE',
        imageUrl: 'https://i.ibb.co/qg23Jcv/women-sneaker-5.jpg',
        price: 160,
        item_gender: 'women',
        size: [9,10,11,12,13,14],
        color: 'blue'

      },
      {
        id: 6,
        name: 'adidas CAMPUS BURGUNDY',
        imageUrl: 'https://i.ibb.co/FXwQtKg/women-sneaker-6.jpg',
        price: 110,
        item_gender: 'women',
        size: [9,10,11,12,13,14],
        color: 'red'

      },
      {
        id: 7,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/qNtvq82/men-sneaker-1.jpg',
        price: 140,
        item_gender: 'mens',
        size: [8,9,10,11,12],
        color: 'red'

      },
      {
        id: 8,
        name: 'adidas SUPERSTAR FTWR',
        imageUrl: 'https://i.ibb.co/jhfcz5K/men-sneaker-2.jpg',
        price: 160,
        item_gender: 'mens',
        size: [8,9,10,11],
        color: 'white'

      },
      {
        id: 9,
        name: 'NIKE SB DUNK LOW PRO LASER',
        imageUrl: 'https://i.ibb.co/nMPQc0Q/men-sneaker-4.jpg',
        price: 210,
        item_gender: 'mens',
        size: [10,11,12,13,14],
        color: 'multi'

      },
      {
        id: 10,
        name: 'adidas YEEZY BOOST 350',
        imageUrl: 'https://i.ibb.co/12B3WrW/men-sneaker-3.jpg',
        price: 140,
        item_gender: 'mens',
        size: [8,9,10,11,14],
        color: 'multi'

      },
      {
        id: 11,
        name: 'NIKE AIR MAX 90',
        imageUrl: 'https://i.ibb.co/wC74x9g/men-sneaker-6.jpg',
        price: 140,
        item_gender: 'mens',
        size: [8,9,10,11,14],
        color: 'multi'

      },
      {
        id: 12,
        name: 'adidas SAMBA OG CORE',
        imageUrl: 'https://i.ibb.co/5rSxjpJ/men-sneaker-5.jpg',
        price: 90,
        item_gender: 'mens',
        size: [8,9,10,11,14],
        color: 'black'

      }
    ]
  },
  {
    id: 3,
    title: 'Boots',
    routeName: 'boots',
    summary:'Get the latest assortment of boots online today',
    items: [
      {
        id: 1,
        name: 'Vance Co. Men Landon Round',
        imageUrl: 'https://i.ibb.co/gztVrm7/men-boots-1.jpg',
        price: 105,
        item_gender: 'mens',
        size: [8,9,10,11,12,13,14],
        color: 'brown'

      },
      {
        id: 2,
        name: 'Merrell J06011 Men',
        imageUrl: 'https://i.ibb.co/dfz5557/men-boots-2.jpg',
        price: 125,
        item_gender: 'mens',
        size: [8,9,10,11,12,13,14],
        color: 'green'

      },
      {
        id: 3,
        name: "AdTec Men's Black Oiled Leather",
        imageUrl: 'https://i.ibb.co/8cbmnSB/men-boots-3.jpg',
        price: 136,
        item_gender: 'mens',
        size: [8,9,10,11,12,13,14],
        color: 'black'

      },
      {
        id: 4,
        name: 'Polar Fox Jonah',
        imageUrl: 'https://i.ibb.co/RDWyWDB/men-boots-5.jpg',
        price: 85,
        item_gender: 'mens',
        size: [8,9,10,11,12,13,14],
        color: 'brown'

      },
      {
        id: 5,
        name: "Vance Co. Men's 'Durant",
        imageUrl: 'https://i.ibb.co/Gnct4kb/men-boots-4.jpg',
        price: 80,
        item_gender: 'mens',
        size: [8,9,10,11,12,13,14],
        color: 'brown'

      },
      {
        id: 6,
        name: "AdTec Men's Brown Crazy Horse",
        imageUrl: 'https://i.ibb.co/tM3ZdjP/men-boots-6.jpg',
        price: 140,
        item_gender: 'mens',
        size: [8,9,10,11,12,13,14],
        color: 'yellow'

      },
      {
        id: 7,
        name: 'grove short boots',
        imageUrl: 'https://i.ibb.co/YR2Y0G4/women-boots-1.jpg',
        price: 165,
        item_gender: 'women',
        size: [8,9,10,11,12,13,14],
        color: 'brown'
      },
      {
        id: 8,
        name: 'grove belt and fur boots',
        imageUrl: 'https://i.ibb.co/34DV37q/women-boots-2.jpg',
        price: 185,
        item_gender: 'women',
        size: [8,9,10,11,12,13,14],
        color: 'brown'
      },
      {
        id: 9,
        name: 'HUNTER Heel Up',
        imageUrl: 'https://i.ibb.co/r2zgbY3/women-boots-3.jpg',
        price: 140,
        item_gender: 'women',
        size: [8,9,10,11,12,13,14],
        color: 'black'
      },
      {
        id: 10,
        name: 'HUNTER Suede Short',
        imageUrl: 'https://i.ibb.co/K5v1sh6/women-boots-4.jpg',
        price: 130,
        item_gender: 'women',
        size: [8,9,10,11,12,13,14],
        color: 'brown'
      },
      {
        id: 11,
        name: 'HUNTER Chanky Heel',
        imageUrl: 'https://i.ibb.co/0sX5jDQ/women-boots-5.jpg',
        price: 110,
        item_gender: 'women',
        size: [8,9,10,11,12,13,14],
        color: 'white'
      },
      {
        id: 12,
        name: 'HUNTER Rubber',
        imageUrl: 'https://i.ibb.co/j55VBfX/women-boots-6.jpg',
        price: 155,
        item_gender: 'women',
        size: [8,9,10,11,12,13,14],
        color: 'red'
      },
    ]
  },
  {
    id: 4,
    title: 'Top Sellers',
    routeName: 'topsellers',
    items: [
      {
        id: 1,
        name: 'adidas SUPERSTAR FTWR',
        imageUrl: 'https://i.ibb.co/jhfcz5K/men-sneaker-2.jpg',
        price: 160,
        item_gender: 'mens',
        size: [8,9,10,11],
        color: 'white'

      },
      {
        id: 2,
        name: 'adidas YEEZY BOOST 350',
        imageUrl: 'https://i.ibb.co/12B3WrW/men-sneaker-3.jpg',
        price: 140,
        item_gender: 'mens',
        size: [8,9,10,11,14],
        color: 'multi'

      },
      {
        id: 3,
        name: 'NIKE AIR MAX 90',
        imageUrl: 'https://i.ibb.co/wC74x9g/men-sneaker-6.jpg',
        price: 140,
        item_gender: 'mens',
        size: [8,9,10,11,14],
        color: 'multi'

      },
      {
        id: 4,
        name: 'REEBOK HIIT TR',
        imageUrl: 'https://i.ibb.co/QJZ118n/men-running-3.jpg',
        price: 100,
        item_gender: 'mens',
        size: [8,9,10,11,12,13],
        color: 'black'
      },
      {
        id: 5,
        name: 'Nike Renew Retaliation TR',
        imageUrl: 'https://i.ibb.co/kqFN3q5/men-running-4.jpg',
        price: 60,
        item_gender: 'mens',
        size: [10,11,12,13,14],
        color: 'white'
      },
      {
        id: 6,
        name: 'adidas STAN SMITH EL ',
        imageUrl: 'https://i.ibb.co/YT8W0jR/women-sneaker-1.jpg',
        price: 130,
        item_gender: 'women',
        size: [9,10,11,13,14],
        color: 'white'
      },
      {
        id: 7,
        name: 'NEW BALANCE CM996SMG',
        imageUrl: 'https://i.ibb.co/T2rtkhQ/women-sneaker-2.jpg',
        price: 140,
        item_gender: 'women',
        size: [8,9,10,11,12],
        color: 'white'

      },
      {
        id: 8,
        name: 'Nike womens legend essentials',
        imageUrl: 'https://i.ibb.co/Dw7XX5J/women-running-1.jpg',
        price: 110,
        item_gender: 'women',
        size: [8,9,10,11,12],
        color: 'multi'
      },
      {
        id: 9,
        name: 'Nike STREET PREC',
        imageUrl: 'https://i.ibb.co/SVp2Fgs/women-running-2.jpg',
        price: 80,
        item_gender: 'women',
        size: [8,9,10,11,12,13,14],
        color: 'black'
      },
    ]
  },
  {
    id: 5,
    title: 'New Arrivals',
    routeName: 'new',
    items: [
      {
        id: 1,
        name: "MEN'S SUNSHINE SK8-HI",
        imageUrl: "https://i.ibb.co/zHBRGqf/new-1.jpg", 
        price: 80,
        item_gender: 'women',
        size: [10,11,12,13,14],
        color: 'multi'
      },
      {
        id: 2,
        name: "AIR MAX 90 'RECRAFTED'",
        imageUrl: "https://i.ibb.co/rsfmgvK/new-2.jpg",
        price: 120,
        item_gender: 'women',
        size: [10,11,12,13,14],
        color: 'multi'
      },
      {
        id: 3,
        name: 'REACT PRESTO',
        imageUrl: "https://i.ibb.co/NpWDGf0/new-3.jpg",
        price: 110,
        item_gender: 'women',
        size: [10,11,12,13,14],
        color: 'green'
      },
      {
        id: 4,
        name: 'SUNSHINE AUTHENTIC',
        imageUrl: "https://i.ibb.co/Ht2kfPd/new-4.jpg",
        price: 160,
        item_gender: 'women',
        size: [10,11,12,13,14],
        color: 'multi'
      },
      {
        id: 5,
        name: 'SUNSHINE OLD SKOOL',
        imageUrl: "https://i.ibb.co/4ZFsTXR/new-5.jpg",
        price: 120,
        item_gender: 'mens',
        size: [10,11,12,13,14],
        color: 'multi'
      },
      {
        id: 6,
        name: 'LEBRON 17 LOW',
        imageUrl: "https://i.ibb.co/tmQsfQd/new-6.jpg",
        price: 170,
        item_gender: 'mens',
        size: [10,11,12,13,14],
        color: 'black'
      },
      {
        id: 7,
        name: 'AIR FORCE 1 LOW',
        imageUrl: "https://i.ibb.co/dKpszpB/new-7.jpg",
        price: 90,
        item_gender: 'mens',
        size: [10,11,12,13,14],
        color: 'white'
      }
    ]
  },
  
]

export default SHOP_DATA;
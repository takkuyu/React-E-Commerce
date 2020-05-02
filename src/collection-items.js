const SHOP_DATA = [
  {
    id: 1,
    title: 'Running Shoes',
    routeName: 'running',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 25,
        item_gender: 'mens',
        size: [8,9,10,11,12,13,14],
        color: 'black'
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: 18,
        item_gender: 'mens',
        size: [9,10,11,12,13,14],
        color: 'white'
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 35,
        item_gender: 'mens',
        size: [8,9,10,11,12,13],
        color: 'brown'
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        price: 25,
        item_gender: 'mens',
        size: [10,11,12,13,14],
        color: 'blue'
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        price: 18,
        item_gender: 'women',
        size: [8,9,10,11,12],
        color: 'red'
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 14,
        item_gender: 'women',
        size: [8,9,10,11,12,13,14],
        color: 'yellow'
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 18,
        item_gender: 'women',
        size: [8,9,10,11,12],
        color: 'multi'
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14,
        item_gender: 'women',
        size: [9,10,11,12,13,14],
        color: 'green'
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16,
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
    items: [
      {
        id: 1,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 220,
        item_gender: 'women',
        size: [9,10,11,13,14],
        color: 'black'
      },
      {
        id: 2,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280,
        item_gender: 'women',
        size: [8,9,10,11,12],
        color: 'white'

      },
      {
        id: 3,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110,
        item_gender: 'women',
        size: [10,11,12,13,14],
        color: 'brown'

      },
      {
        id: 4,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160,
        item_gender: 'women',
        size: [9,10,11,12,13,14],
        color: 'blue'

      },
      {
        id: 5,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160,
        item_gender: 'mens',
        size: [8,9,10,11,12],
        color: 'red'

      },
      {
        id: 6,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160,
        item_gender: 'mens',
        size: [8,9,10,11],
        color: 'yellow'

      },
      {
        id: 7,
        name: 'Air Jordan Limited',
        imageUrl: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        price: 120,
        item_gender: 'mens',
        size: [10,11,12,13,14],
        color: 'multi'

      },
      {
        id: 8,
        name: 'Vanz Old School',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 140,
        item_gender: 'mens',
        size: [8,9,10,11,14],
        color: 'black'

      },
      {
        id: 9,
        name: 'Adidas',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 300,
        item_gender: 'mens',
        size: [8,9,10,11,14],
        color: 'green'

      },
      {
        id: 10,
        name: 'New Balance',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 90,
        item_gender: 'mens',
        size: [8,9,10,11,14],
        color: 'white'

      },
      {
        id: 11,
        name: 'Reebok',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 80,
        item_gender: 'mens',
        size: [8,9,10,11,13,14],
        color: 'blue'

      },
    ]
  },
  {
    id: 3,
    title: 'Boots',
    routeName: 'boots',
    items: [
      {
        id: 1,
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125,
        item_gender: 'mens',
        size: [8,9,10,11,12,13,14],
        color: 'black'

      },
      {
        id: 2,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90,
        item_gender: 'mens',
        size: [8,9,10,11,12,13,14],
        color: 'black'

      },
      {
        id: 3,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90,
        item_gender: 'mens',
        size: [8,9,10,11,12,13,14],
        color: 'black'

      },
      {
        id: 4,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165,
        item_gender: 'women',
        size: [8,9,10,11,12,13,14],
        color: 'black'

      },
      {
        id: 5,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185,
        item_gender: 'women',
        size: [8,9,10,11,12,13,14],
        color: 'black'

      }
    ]
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 1,
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25
      },
      {
        id: 2,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20
      },
      {
        id: 3,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80
      },
      {
        id: 4,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80
      },
      {
        id: 5,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45
      },
      {
        id: 6,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135
      },
      {
        id: 7,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 1,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325
      },
      {
        id: 2,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20
      },
      {
        id: 3,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25
      },
      {
        id: 4,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25
      },
      {
        id: 5,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40
      },
      {
        id: 6,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      }
    ]
  }
]

export default SHOP_DATA;
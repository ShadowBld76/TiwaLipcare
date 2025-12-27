// data.js
const products = [
  {
    id: 1,
    name: "Full Pink Lip Kit",
    price: 10000,
    image: "image/product1.jpg",
    description: "High-shine, cherry-scented gloss with a non-sticky formula and Barbie-core vibes."
  },
  {
    id: 2,
    name: "Pink Lips Mini Kit",
    price: 5000,
    image: "image/product2.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 3,
    name: "Lip Scrub",
    price: 2000,
    image: "image/product3.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 4,
    name: "Lip Moisturizer",
    price: 1500,
    image: "image/product4.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 5,
    name: "Pink Lips Balm",
    price: 2000,
    image: "image/product5.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 6,
    name: "Pink Lips Balm",
    price: 2500,
    image: "image/product6.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 7,
    name: "Lip Gloss Fat Tube",
    price: 3000,
    image: "image/product7.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 8,
    name: "Lip Gloss Squeeze Tube",
    price: 2000,
    image: "image/product8.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 9,
    name: "Lip Gloss Baddie Pink",
    price: 7500,
    image: "image/product9.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 10,
    name: "Lip Gloss Choco",
    price: 7500,
    image: "image/product10.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 11,
    name: "Lip Gloss Glitz",
    price: 7500,
    image: "image/product11.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 12,
    name: "Lip Gloss Nude",
    price: 7500,
    image: "image/product12.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 13,
    name: "Clear Lip Gloss",
    price: 7500,
    image: "image/product13.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 14,
    name: "Lip Gloss Bubblegum Combo(Fat Tube)",
    price: 5000,
    image: "image/product14.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 15,
    name: "Lip Gloss Barbie Pink",
    price: 5000,
    image: "image/product15.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 16,
    name: "Creamy Combo",
    price: 5000,
    image: "image/product16.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 17,
    name: "Glitz Combo",
    price: 5000,
    image: "image/product17.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  },
    {
    id: 18,
    name: "Cherry Combo",
    price: 5000,
    image: "image/product18.jpg",
    description: "Moisturizing lip gloss with a subtle shine and a variety of colors."
  }
];

function getProduct(id) {
  return products.find(product => product.id === id);
}

function getAllProducts() {
  return products;
}